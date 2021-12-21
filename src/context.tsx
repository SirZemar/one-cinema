import React, { useState, createContext } from "react";

export type GlobalContent = {
    state: string,
    setState: (c: string) => void
}

export const Context: any = createContext<GlobalContent>({ state: '', setState: c => { } });

const UserProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(undefined);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
};

export default UserProvider;