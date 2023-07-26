// authProvider.js
import { useState, useEffect, PropsWithChildren, Dispatch } from 'react';
import AuthContext from './AuthContext';
import Cookie from 'js-cookie';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, refreshToken, setRefreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};
