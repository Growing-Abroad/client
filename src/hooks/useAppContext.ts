import AppContext from "../context/AppContext";
import { useContext } from "react";

export default function useAppContext() {
    return useContext(AppContext);
}