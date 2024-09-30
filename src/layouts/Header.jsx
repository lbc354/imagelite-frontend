import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <Link to={'/'} style={{ color: 'whitesmoke', textDecoration: 'none' }}>
                <h1>ImageLite</h1>
            </Link>
            <Link to={'/login'} style={{ color: 'whitesmoke' }}>
                <span>Sign in</span>
            </Link>
        </header>
    )
}
