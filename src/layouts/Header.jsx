import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function Header() {
    const { decodedToken, setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    function logout() {
        setToken(null)
        localStorage.removeItem('token');
        return navigate('/login');
    };

    return (
        <header className='header'>
            <Link to={'/'} style={{ color: 'whitesmoke', textDecoration: 'none' }}>
                <h1>ImageLite</h1>
            </Link>

            {decodedToken
                ?
                <div>
                    <span style={{ display: 'block' }}>Olá, {decodedToken.username}</span>
                    <span style={{ cursor: 'pointer' }} onClick={logout}>Logout</span>
                </div>
                :
                <Link to={'/login'} style={{ color: 'whitesmoke' }}>
                    <span>Sign in</span>
                </Link>
            }
        </header>
    )
}
