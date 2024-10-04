import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContext';

export default function Login() {

    const { setToken } = useContext(AuthContext); // acessando o setter de token do contexto
    const navigate = useNavigate();
    const location = useLocation();
    const messageFromUploadImages = location.state?.message;

    useEffect(() => {
        if (messageFromUploadImages) {
            toast.warning(messageFromUploadImages);
            // redireciona para a página atual limpando o state
            navigate(location.pathname, { replace: true });
        }
    }, [messageFromUploadImages, navigate, location.pathname]);

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const url = process.env.PUBLIC_URL + '/v1/users/auth';

        try {
            const res = await axios.post(url, user);
            const token = res.data.accessToken;
            setToken(token); // atualizando o token no contexto
            toast.success('Logado(a)');
            navigate('/');
        } catch (error) {
            console.error(error);
            if (error.status === 401) {
                toast.warning('E-mail ou Senha incorretos');
            } else {
                toast.error('Ocorreu um erro');
            }
        } finally {
            setLoading(false);
        }
    };

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
