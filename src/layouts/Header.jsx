import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function Header() {
    const { decodedToken } = useContext(AuthContext);

    return (
        <header className='header'>
            <Link to={'/'} style={{ color: 'whitesmoke', textDecoration: 'none' }}>
                <h1>ImageLite</h1>
            </Link>

            {decodedToken
                ?
                <span>Olá, {decodedToken.username}</span>
                :
                <Link to={'/login'} style={{ color: 'whitesmoke' }}>
                    <span>Sign in</span>
                </Link>
            }
        </header>
    )
}
