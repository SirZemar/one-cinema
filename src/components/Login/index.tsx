import React, { useContext, useEffect, useState } from "react";
// Styles
import { Wrapper } from "./Login.styles";
// Context
import { Context } from '../../context';
// Component
import LoginBackground from "../LoginBackground";


const LoginStatus: React.FC = () => {
    const [user] = useContext(Context);
    const [state, setState] = useState(false);
    const [windowWidth, setWindowWidth] = useState<number>();

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            if (width !== undefined) {
                setWindowWidth(width);
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);

    }, [])

    const handleClick = (e: React.MouseEvent<HTMLElement>, outsideLoginBoxClick = false) => {

        const loginStatusElementClick = e.currentTarget.parentElement?.classList.contains('login-status');

        return user
            ? setState(false)
            : loginStatusElementClick || outsideLoginBoxClick ? setState(!state) : null


    }

    return (
        <Wrapper >
            <div className="login-status" >
                <div className="text" onClick={handleClick}> {user
                    ? typeof (windowWidth) != 'number' ? null : windowWidth <= 500
                        ? user.username
                        : `Welcome ${user.username}`
                    : 'Login'}
                </div>
            </div>
            {state && <LoginBackground onClick={handleClick} state={state} setState={setState} />}
        </Wrapper>
    )
};

export default LoginStatus;