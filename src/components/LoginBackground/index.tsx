import React, { useContext } from "react";
// Styles 
import { Wrapper } from "./LoginBackground.styles";
// Components
import LoginBox from "../LoginBox";
// Context
import { Context } from '../../context';

type Props = {
    onClick: Function;
    onKeyDown: Function;
}


const LoginBackground: React.FC<Props> = ({ onClick, onKeyDown }) => {

    const [user] = useContext(Context);

    return (
        <>
            {!user && <Wrapper onClick={(e) => onClick(e, e.target === e.currentTarget)} onKeyDown={(e) => onKeyDown(e, e.key === 'Escape')}>
                <LoginBox />
            </Wrapper>}
        </>

    )
};

export default LoginBackground;