import React, { EventHandler, useContext, useState } from "react";
// Styles
import { Wrapper } from "./Login.styles";
// Context
import { Context } from '../../context';
import LoginBackground from "../LoginBackground";

const LoginStatus: React.FC = () => {
    const [user] = useContext(Context);
    const [state, setState] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (!user) setState(!state);
        const t = e.currentTarget;
        console.log(t)

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
            {state && <LoginBackground />}
        </Wrapper>
    )
};

export default LoginStatus;