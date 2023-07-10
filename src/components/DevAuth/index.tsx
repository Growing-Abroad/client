import { useRouter } from 'next/router';

const useWithAuth = () => {
    const router = useRouter();
    // const { password } = router.query;

    // if (process.env.ENVIRONMENT === 'prod') {
    //     return true;
    // }
    // if (
    //     process.env.ENVIRONMENT === 'dev' && process.env.NEXT_PUBLIC_AUTH !== password
    // ) {
    //     return false;
    // }

    // Allow access in all other environments
    return true;
};

export default useWithAuth;
