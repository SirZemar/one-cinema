import React, { useState, createContext } from "react";

export type GlobalContent = {
    state: string,
    setState: (c: string) => void
}

export type Loading = {
    loading: boolean,
    setLoading: (c: boolean) => void
}

export const Context: any = createContext<GlobalContent>({ state: '', setState: c => { } });

export const UserProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(undefined);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
};

export const LoadingContext: any = createContext<Loading>({ loading: false, setLoading: c => { } });

export const LoadingProvider: React.FC = ({ children }) => {
    const [loading, setLoading] = useState(false)

    return (
        <LoadingContext.Provider value={[loading, setLoading]}>{children}</LoadingContext.Provider>
    )
}

// export default UserProvider;