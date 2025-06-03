"use client"
import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [toggleMenu, setToggleMenu] = useState(true);
    return (
        <UserContext.Provider value={{ user, setUser, toggleMenu, setToggleMenu }}>
            {children}
        </UserContext.Provider>
    )
}