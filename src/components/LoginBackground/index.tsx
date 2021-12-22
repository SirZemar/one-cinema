import React, { useContext } from "react";
// Styles 
import { Wrapper } from "./LoginBackground.styles";
// Components
import Login from "../LoginBox";
// Context
import { Context } from '../../context';

type Props = {
    onClick: Function;
}


const LoginBackground: React.FC<Props> = ({onClick}) => {

    const [user] = useContext(Context);

    return (
        <>
            {!user && <Wrapper onClick={(e) => onClick(e, e.target === e.currentTarget)}>
                <Login />
            </Wrapper>}
        </>

    )
};

export default LoginBackground;