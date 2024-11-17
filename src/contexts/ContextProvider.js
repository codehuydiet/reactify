import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isActiveSidebar, setIsActiveSidebar] = useState(true)

    return (
        <StateContext.Provider
            value={{
                isActiveSidebar,
                setIsActiveSidebar
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)