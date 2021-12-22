import React from 'react';
import { Link } from 'react-router-dom';
// Images
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';
// Components
import LoginStatus from '../Login';

const Header: React.FC = () => (
    <Wrapper>
        <Content>
            <Link to='/' style={{ textDecoration: 'none', flexGrow: '3'}}>
                <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            </Link>
            <LoginStatus></LoginStatus>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;