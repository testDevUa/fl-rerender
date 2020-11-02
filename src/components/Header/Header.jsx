import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <nav className='nav'>
                <NavLink to='/Posts' className='nav__item'>Posts</NavLink>
                <NavLink to='/About' className='nav__item'>About</NavLink>
            </nav>
        </header>
    )
}

export default Header;