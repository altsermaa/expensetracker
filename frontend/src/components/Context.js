"use client";

const { createContext, useState } = require("react");

export const TitleContext = createContext(null);

export const TitleContextProvider = ({children}) => {
    const[title, setTitle] = useState({title:"choose"})

    return (
        <TitleContext.Provider>
            {children}
        </TitleContext.Provider>
    )
        
}