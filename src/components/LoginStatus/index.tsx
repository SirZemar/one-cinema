import React, { useContext, useState } from "react";
// Styles
import { Wrapper } from "./Login.styles";
// Context
import { Context, Test } from '../../context';

const LoginStatus: React.FC = () => {
    const [user] = useContext(Context);

    const handleClick = () => {
    }
    return (
        <Wrapper onClick={handleClick}>
            <span>|||</span>
            {user
                ? `Welcome ${user.username}`
                : 'Login'}
        </Wrapper>
    )
};

export default LoginStatus;