import React from "react";

export interface IContext {
    windowSize: {
        width: number,
        height: number
    },
    isMobile: boolean
}

const defaultContext = {
    windowSize: {
        width: 0, 
        height: 0
    },
    isMobile: false
}

const AppContext = React.createContext<IContext>(defaultContext);

export default AppContext;