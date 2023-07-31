import { useAuthContext } from "@/hooks/useAuthContext";
import { withAuthServerSide } from "@/utils/withAuthServerSide";
import * as S from "@/styles/pages-styles/admin/index.styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { fetchUsersData, getFileFromDb } from "@/services/admin/application.service";

export const getServerSideProps = async (context: any) => {
    const authCheck = await withAuthServerSide(context);
    return authCheck;
};

export type User = {
    _id: number;
    pronoum: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    areasOfExpertise: Array<string>;
    fileId: string;
    otherFileId?: string;
};

interface IFileProp {
    fileId: string,
    authToken: string
}

const FileLink = ({ fileId, authToken }: IFileProp) => {
    if (!fileId) return '';
    return (
        <S.FileButton onClick={() => getFileFromDb(fileId, authToken)}>
            <FontAwesomeIcon icon={faFilePdf} size="2x" />
        </S.FileButton>
    )
}
interface AdminProps {
    authenticationToken: string;
}

function Admin({ authenticationToken }: AdminProps) {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const authValues = useAuthContext();

    useEffect(() => {
        if (!authenticationToken) return; 

        authValues?.setAccessToken(authenticationToken);
        fetchUsersData(authenticationToken)
            .then(res => {
                setUsers(res);
                setSelectedUser(res[0]);
            })
    }, []);

    const filteredUsers = users.filter(user =>
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <S.AdminContainer>
            <S.ListSection>
                <S.SearchBox
                    placeholder="Search for a user..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <S.UserList>
                    {filteredUsers?.map((user, i) => (
                        <li key={user._id.toString() + i} onClick={() => setSelectedUser(user)}>
                            {user.firstName} {user.lastName}
                        </li>
                    ))}
                </S.UserList>
            </S.ListSection>
            <S.DetailsSection>
                {selectedUser && (
                    <>
                        <h2>{selectedUser.firstName} {selectedUser.lastName}</h2>
                        <p>Pronoum: {selectedUser.pronoum}</p>
                        <p>Email: {selectedUser.email}</p>
                        <p>Phone: {selectedUser.phone}</p>
                        <p>Areas of Expertise: {selectedUser.areasOfExpertise.join(', ')}</p>
                        {/* Note: Displaying FileList directly can be complex. This is a simple representation */}
                        <div className="files-list">
                            <span>CV:</span> 
                            <FileLink 
                                key={selectedUser.fileId} 
                                fileId={selectedUser.fileId} 
                                authToken={authenticationToken}
                            />
                        </div>
                        <div className="files-list">
                            <span>Other Files:</span> 
                            <FileLink 
                                key={selectedUser.otherFileId} 
                                fileId={selectedUser.otherFileId ?? ""} 
                                authToken={authenticationToken}    
                            />
                        </div>
                    </>
                )}
            </S.DetailsSection>
        </S.AdminContainer>
    )
}

export default Admin;