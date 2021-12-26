import React, { useContext, useState } from "react";
// Styles
import { Wrapper } from "./Login.styles";
// Context
import { Context } from '../../context';
// Component
import LoginBackground from "../LoginBackground";

const LoginStatus: React.FC = () => {
    const [user] = useContext(Context);
    const [state, setState] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLElement>, outsideLoginBoxClick = false) => {

        const loginStatusElementClick = e.currentTarget.parentElement?.classList.contains('login-status');

        return user
            ? setState(false)
            : loginStatusElementClick || outsideLoginBoxClick ? setState(!state) : null


    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>, escape = false) => {

        return !user
            ? escape ? setState(false) : null
            : null
    }
    return (
        <Wrapper >
            <div className="login-status">
                <span onClick={handleClick}>|||</span>
                <span onClick={handleClick}> {user
                    ? `Welcome ${user.username}`
                    : 'Login'}
                </span>
            </div>
            {state && <LoginBackground onClick={handleClick} onKeyDown={handleKeyPress} />}
        </Wrapper>
    )
};

export default LoginStatus;