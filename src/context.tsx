import React, { useState, createContext } from "react";

export type GlobalContent = {
    state: string,
    setState: (c: string) => void
}

export const Context: any = createContext<GlobalContent>({ state: '', setState: c => { } });
export const Test: any = createContext({ teste: '', setTeste: () => { } });

const UserProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(undefined);
    const [teste, setTeste] = useState(false);

    const contextValues = {
        state,
        setState,
        teste,
        setTeste
    }
    console.log(Context)
    console.log(Test)
    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
};

export default UserProvider;