import { useAuthContext } from "@/hooks/useAuthContext";
import { withAuthServerSide } from "@/utils/withAuthServerSide";
import * as S from "@/styles/pages-styles/admin/index.styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export const getServerSideProps = async (context: any) => {
    const authCheck = await withAuthServerSide(context);
    console.log({authCheck: authCheck});
    return authCheck;
  };

type User = {
    _id: number;
    pronoum: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    areasOfExpertise: Array<string>;
    files: Array<{}>;
    otherFiles?: Array<{}>;
};
  

function Admin() {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const authValues = useAuthContext();
    console.log({authValues: authValues});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<User[]>('http://localhost:3001/talentpool');
                setUsers(response.data);
                console.log({talentResponse: response.data});
                // setUsers(mockedPoolData);
                // setSelectedUser(mockedPoolData[0]);
            } catch (error) {
                console.error("Failed to fetch user data: ", error);
            }
        };

        fetchData();
    }, []);

    const filteredUsers = users.filter(user => 
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    );


    console.log({authValues})
    return(

        <S.AdminContainer>
            <S.ListSection>
                <S.SearchBox
                placeholder="Search for a user..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <S.UserList>
                    {filteredUsers.map((user, i) => (
                        <li key={user._id.toString()+i} onClick={() => setSelectedUser(user)}>
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
                            {selectedUser.files.map(() => (<FontAwesomeIcon icon={faFilePdf} size="2x"/>))}
                        </div>
                        <div className="files-list">
                            <span>Other Files:</span>
                             {selectedUser.otherFiles?.map(() => (<FontAwesomeIcon icon={faFilePdf} size="2x"/>))}
                        </div>
                    </>
                )}
            </S.DetailsSection>
        </S.AdminContainer>
    )
}

export default Admin;