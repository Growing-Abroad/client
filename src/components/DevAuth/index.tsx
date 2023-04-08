import { useRouter } from 'next/router';

const withAuth = () => {
    const router = useRouter();
    const { password } = router.query;

    console.log({envPass: process.env.NEXT_PUBLIC_AUTH, password, env: process.env.NODE_ENV})
    if (
        !process.env.NEXT_PUBLIC_AUTH || 
        (process.env.NODE_ENV === 'production' 
        && process.env.NEXT_PUBLIC_AUTH !== password)
    ) {
        // In production, require password to match environment variable
        return false;
    }

    // Allow access in all other environments
    return true;
};

export default withAuth;
