import React from 'react';
import { Link } from 'react-router-dom';
// Images
import LogoText from '../../images/logo-text.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
// Styles
import { Wrapper, Content, TMDBLogoImg, Logo } from './Header.styles';
// Components
import Login from '../Login';

const Header: React.FC = () => (
    <Wrapper>
        <Content>
            {<Link to='/' style={{ textDecoration: 'none' }}>
                <Logo>
                    <div className='logo-image'></div>
                    <img className='logo-text' src={LogoText} alt='one cinema' />
                </Logo>
            </Link>}
            <Login />
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;