import React, { useContext, useEffect, useState } from "react";
// Styles
import { Wrapper, Content } from "./Login.styles";
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
            <Content className="login-status">
                <div className="container" onClick={handleClick}>
                    <div className="image-icon" >
                        <div className="image-icon-head">
                        </div>
                        <div className="image-icon-body" >
                        </div>
                    </div>
                    <div className="text"> {user
                        ? typeof (windowWidth) != 'number' ? null : windowWidth <= 500
                            ? user.username
                            : `Welcome ${user.username}`
                        : 'Login'}
                    </div>
                </div>
            </Content>

            {state && <LoginBackground onClick={handleClick} state={state} setState={setState} />}
        </Wrapper>
    )
};

export default LoginStatus;