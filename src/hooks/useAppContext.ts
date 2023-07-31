import AppContext from "../context/AppContext/AppContext";
import { useContext } from "react";

export default function useAppContext() {
    return useContext(AppContext);
}