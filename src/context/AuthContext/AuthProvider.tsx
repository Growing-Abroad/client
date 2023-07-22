// authProvider.js
import { useState, useEffect, PropsWithChildren, Dispatch } from 'react';
import AuthContext from './AuthContext';
import Cookie from 'js-cookie';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  

  const updateAccessToken = (token: string | null) => {
    setAccessToken(token);

    if (token) {
      Cookie.set('accessToken', token);
    } else {
      Cookie.remove('accessToken');
    }
  };

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken: updateAccessToken, refreshToken, setRefreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};
