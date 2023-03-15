import { useWindowSize } from "@/hooks/useWindowSize";
import { variables } from "@/styles/global-variables";
import { removePxFromCssValue } from "@/utils/scripts/general-utility";
import { PropsWithChildren } from "react";
import AppContext, { IContext } from "./AppContext";


export default function ContextProvider(props: PropsWithChildren) {
    const {sizes: {mediaQuery}} = variables;
    const [width, height] = useWindowSize()
    const contextValue: IContext = {
            windowSize: {
            width,
            height
        },
        isMobile: width < removePxFromCssValue(mediaQuery)
    }
    return <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>
}