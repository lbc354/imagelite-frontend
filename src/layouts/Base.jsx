import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import { useLocation } from 'react-router-dom';

export default function Base({ children }) {
    // const location = useLocation();
    // const hideHeader = location.pathname === '/' || location.pathname === '/alguma-coisa';
    // const hideFooter = location.pathname === '/' || location.pathname === '/alguma-coisa';

    return (
        <>
            {/* {!hideHeader && <Header />} */}
            <Header />
            <div className='base'>
                {children}
            </div>
            <Footer />
            {/* {!hideFooter && <Footer />} */}
        </>
    )
}
