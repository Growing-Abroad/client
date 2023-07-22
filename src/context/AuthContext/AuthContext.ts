import React, { Dispatch } from 'react';

export interface IAuthContext {
  accessToken: string | null,
  setAccessToken: (token: string | null) => void,
  refreshToken: string | null
  setRefreshToken: Dispatch<React.SetStateAction<string | null>>,
}

const AuthContext = React.createContext<IAuthContext | null>(null);

export default AuthContext;
