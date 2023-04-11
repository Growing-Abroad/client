import { useRouter } from 'next/router';

const useWithAuth = () => {
    const router = useRouter();
    const { password } = router.query;

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

export default useWithAuth;
