import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

// Ao usar o <Outlet /> no seu componente Base, você permite que o React Router injete os componentes correspondentes às rotas filhas naquele ponto.

export default function Base() {
    return (
        <>
            <Header />
            <main className='base'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
