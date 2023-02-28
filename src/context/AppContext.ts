import React from "react";

export interface IContext {
    windowSize: {
        width: number,
        height: number
    }
}

const AppContext = React.createContext<IContext>({windowSize: {width: 0, height: 0}});

export default AppContext;