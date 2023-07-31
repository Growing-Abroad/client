import AuthContext from "@/context/AuthContext/AuthContext";
import { useContext } from "react";


export const useAuthContext = () => {
  return useContext(AuthContext);
};