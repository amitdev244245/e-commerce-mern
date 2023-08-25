import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <ToastContainer autoClose={3000} />
            <main className="min-vh-80">{children}</main>
            <Footer />
        </>
    )
}

Layout.defaultProps = {
    title: 'E-Commerce App 👨🏻‍💻',
    description: 'MERN Stack Project on E-Commerce 👨🏻‍💻',
    keywords: 'MERN, MongoDB, ExpressJS, ReactJS, NodeJS 👨🏻‍💻',
    author: 'Amit Sharma 👨🏻‍💻'
}

export default Layout