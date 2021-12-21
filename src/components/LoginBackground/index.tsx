import React from "react";
// Styles 
import { Wrapper } from "./LoginBackground.styles";
// Components
import Login from "../Login";



const LoginBackground: React.FC = () => {


    return (
        <>
            <Wrapper>
                <Login />
            </Wrapper>
        </>

    )
};

export default LoginBackground;