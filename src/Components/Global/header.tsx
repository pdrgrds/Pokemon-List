import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Logo from './../../utils/img/logo.png';
import './../../utils/scss/components.header.scss';

const Header = () => {
    return(
        <header>
            <div className='header__Logo'>
                <img src={Logo} alt="Not Found :c" height={50}/>
            </div>
            <div className='header__nav'>
                <nav>
                    <Link to="/">INICIO</Link>
                    <Link to="/pokemon/pikachu">POKEMON</Link>
                    {/* <Link to="/ability/smash">ABILITY</Link> */}
                    <Outlet />
                </nav>
            </div>
        </header>
    )
}

export default Header;