import { useAuth } from "@/hooks/useAuth";
import { useAuthContext } from "@/hooks/useAuthContext";
import { withAuthServerSide } from "@/utils/withAuthServerSide";

export const getServerSideProps = async (context: any) => {
    const authCheck = await withAuthServerSide(context);
    return authCheck;
  };

function Admin() {
    const authValues = useAuthContext();

    console.log({authValues})
    useAuth(authValues?.accessToken || '');
    return(
        <div>admin works</div>
    )
}

export default Admin;