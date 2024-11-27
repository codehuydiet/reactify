import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isActiveSidebar, setIsActiveSidebar] = useState(true)
    const [activeSong, setActiveSong] = useState()

    return (
        <StateContext.Provider
            value={{
                isActiveSidebar,
                setIsActiveSidebar,
                activeSong,
                setActiveSong
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)