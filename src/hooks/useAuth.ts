import { useRouter } from "next/router";
import { useEffect } from "react";


export function useAuth(accessToken: string) {
  const routes = useRouter();
  
  useEffect(() => {
    // const isAuthenticated = await verifyRefreshToken(refreshToken);
    if (!accessToken) {  // or whatever condition indicates unauthenticated state
      routes.push('/admin-login');
    }
  }, []);
}
