import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {

    // localStorage.setItem('token', token_value)
    // localStorage.removeItem('token')

    const [loading, setLoading] = useState(false);
    // const [errorMsgs, setErrorMsgs] = useState([]);

    const [user, setUser] = useState({
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
        const url = 'http://localhost:8080/v1/users/auth';
        
        try {
            const res = await axios.post(url, user);
            console.log(res)
            toast.success('Logado(a)');
        }
        catch (error) {
            if (error.status === 401) {
                toast.warning('E-mail ou Senha incorretos');
                setLoading(false);
                return;
            }
            console.error(error);
            toast.error('Ocorreu um erro');
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            <span className='nav-pages'><Link to="/">Home</Link> / Login</span>

            <form onSubmit={handleSubmit}>
                <h2>Sign in</h2>

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

                <Link to={'/register'}><span>Sign up</span></Link>
            </form>
        </>
    )
}
