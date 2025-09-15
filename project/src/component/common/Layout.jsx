import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import PropTypes from 'prop-types'

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ minHeight: "80vh", maxWidth: "100vw" }}>{children}</main>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.isRequired,
}