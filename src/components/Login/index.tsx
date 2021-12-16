import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from '../../API';
// Components
import Button from "../Button";
// Styles
import { Wrapper } from "./Login.styles";
// Context 
import { Context } from '../../context';
import { Content } from "../Header/Header.styles";

const Login: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [_user, setUser] = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setError(false);
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
                requestToken,
                username,
                password
            );
            console.log(sessionId);

            setUser({ sessionId: sessionId.session_id, username });

            navigate('/');
        } catch (error) {
            setError(true);
        }
    };
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;

        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);

    };
    return (
        <Wrapper>
                {error && <div className="error">Invalid user</div>}
                <label>Username</label>
                <input
                    type='text'
                    value={username}
                    name='username'
                    onChange={handleInput}
                />
                <label>Password</label>
                <input
                    type='password'
                    value={password}
                    name='password'
                    onChange={handleInput}
                />
                <Button text='Login' callback={handleSubmit} />
        </Wrapper>
    )
};

export default Login;