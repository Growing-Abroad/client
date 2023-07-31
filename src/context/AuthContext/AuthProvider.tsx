// authProvider.js
import { useState, useEffect, PropsWithChildren, Dispatch } from 'react';
import AuthContext from './AuthContext';
import Cookie from 'js-cookie';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
