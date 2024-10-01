import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [token, setToken] = useState(() => {
        return localStorage.getItem('token') || null;
    });
    
    const [decodedToken, setDecodedToken] = useState(() => {
        const storedToken = localStorage.getItem('token');
        return storedToken ? jwtDecode(storedToken) : null;
    });

    useEffect(() => {
        if (token) {
            // Salva o token no localStorage sempre que ele for atualizado
            localStorage.setItem('token', token);
            const tokenDecoded = jwtDecode(token);
            setDecodedToken(tokenDecoded);
        } else {
            // Remove o token do localStorage se o token for removido do estado
            localStorage.removeItem('token');
            setDecodedToken(null);
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken, decodedToken }}>
            {children}
        </AuthContext.Provider>
    );
};
