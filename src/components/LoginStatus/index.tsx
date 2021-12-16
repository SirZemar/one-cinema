import React, { useContext, useState } from "react";
// Styles
import { Wrapper } from "./Login.styles";
// Context
import { Context } from '../../context';

const LoginStatus: React.FC = () => {
    const [status, setStatus] = useState(true);
    const [user] = useContext(Context);

    const handleClick = () => {
        console.log(status)
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