import React, { useState } from "react";
// Styles 
import { Wrapper } from "./LoginBackground.styles";
// Components
import Login from "../Login";

const LoginBackground: React.FC = () => {

    const [collapsed, setCollapsed] = useState(true);
    return (
        <Wrapper>
            <Login />
        </Wrapper>
    )
};

export default LoginBackground;