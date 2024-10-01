import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [decodedToken, setDecodedToken] = useState(null);

    const convertTokenToDecodedToken = () => {
        if (token) {
            const tokenDecoded = jwtDecode(token);
            setDecodedToken(tokenDecoded);
        } else {
            setDecodedToken(null); // limpa o token decodificado se o token for removido
        }
    };

    useEffect(() => {
        convertTokenToDecodedToken();
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken, decodedToken, setDecodedToken }}>
            {children}
        </AuthContext.Provider>
    );
};
