import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="min-vh-80">{children}</main>
            <Footer />
        </>
    )
}

export default Layout