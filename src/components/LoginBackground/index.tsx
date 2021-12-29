import React, { useContext, useEffect } from "react";
// Styles 
import { Wrapper } from "./LoginBackground.styles";
// Components
import LoginBox from "../LoginBox";
// Context
import { Context } from '../../context';

type Props = {
    onClick: Function;
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>
}


const LoginBackground: React.FC<Props> = ({ onClick, state, setState }) => {

    const [user] = useContext(Context);

    useEffect(() => {
        const loginBoxEscape = (e: any) => {
            e.key === 'Escape'
                ? setState(false)
                : setState(state)
        };
        window.addEventListener('keydown', loginBoxEscape);
        return () => {
            window.removeEventListener('keydown', loginBoxEscape);

        }

    }, [state, setState])

    return (
        <>
            {!user && state && <Wrapper onClick={(e) => onClick(e, e.target === e.currentTarget)} >
                <LoginBox />
            </Wrapper>}
        </>

    )
};

export default LoginBackground;