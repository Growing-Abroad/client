import { useWindowSize } from "@/hooks/useWindowSize";
import { PropsWithChildren } from "react";
import AppContext, { IContext } from "./AppContext";


export default function ContextProvider(props: PropsWithChildren) {
    const [width, height] = useWindowSize()
    const contextValue: IContext = {
            windowSize: {
            width,
            height
        }
    }

    return <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>
}