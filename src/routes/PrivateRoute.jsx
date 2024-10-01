import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';

export default function PrivateRoute({ children }) {
    const { token } = useContext(AuthContext);

    // tem que criar uma função para validar token no back

    return token ? children : <Navigate to="/login" state={{ message: "To upload images, sign in" }} />
}
