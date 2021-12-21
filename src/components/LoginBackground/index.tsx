import React, { useContext } from "react";
// Styles 
import { Wrapper } from "./LoginBackground.styles";
// Components
import Login from "../Login";

import { Context } from '../../context';


const LoginBackground: React.FC = () => {

    const [user] = useContext(Context);

    return (
        <>
            {!user &&
                <Wrapper>
                    <Login />
                </Wrapper>
            }
        </>

    )
};

export default LoginBackground;