import React from 'react';
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const token = localStorage.getItem('token')

    // tem que criar uma função para validar token no back

    return token ? children : <Navigate to="/login" state={{ message: "To upload images, sign in" }} />
}
