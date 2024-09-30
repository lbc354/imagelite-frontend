import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Register() {

    const [loading, setLoading] = useState(false);
    // const [errorMsgs, setErrorMsgs] = useState([]);

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setUser((prevState) => ({
            ...prevState,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const url = 'http://localhost:8080/v1/users';
        try {
            await axios.post(url);
            toast.success('Cadastrado(a)');
        } catch (error) {
            console.error(error);
            toast.error('Ocorreu um erro');
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <span className='nav-pages'><Link to="/">Home</Link> / Register</span>

            <form onSubmit={handleSubmit}>
                <h2>Sign up</h2>

                <div className="campo">
                    <label htmlFor="username">Enter username: *</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="campo">
                    <label htmlFor="email">Enter e-mail: *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="campo">
                    <label htmlFor="password">Enter password: *</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="campo">
                    <label htmlFor="confirmPassword">Confirm password: *</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* {errorMsg
                    ? <div>
                        <ul>
                            {errorMsgs.map((message, index) => (
                                <li key={index}>{message}</li>
                            ))}
                        </ul>
                    </div>
                    : null
                } */}

                {loading
                    ? <div className="loader"></div>
                    : <input type="submit" className='btn-submit' disabled={loading} />
                }

                <Link to={'/login'}><span>Sign in</span></Link>
            </form>
        </>
    )
}
