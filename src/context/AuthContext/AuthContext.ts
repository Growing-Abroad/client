import React, { Dispatch } from 'react';

export interface IAuthContext {
  accessToken: string | null,
  setAccessToken: Dispatch<React.SetStateAction<string | null>>,
  refreshToken: string | null,
  setRefreshToken: Dispatch<React.SetStateAction<string | null>>,
}

const AuthContext = React.createContext<IAuthContext | null>(null);

export default AuthContext;
