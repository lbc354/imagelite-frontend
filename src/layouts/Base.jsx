import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Base({ children }) {

    return (
        <>
            <Header />
            <div className='base'>
                {children}
            </div>
            <Footer />
        </>
    )
}
