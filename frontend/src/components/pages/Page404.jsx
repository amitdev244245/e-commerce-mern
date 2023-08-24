import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <Layout title={'PageNotFound - E-Commerce App 🛒'}>
            <div className="p404 d-flex flex-column align-items-center justify-content-center">
                <h1 className="p404-title fw-bolder">404</h1>
                <h2>Ooops! Page Not Found</h2>
                <Link to="/" className="p404-btn text-dark text-decoration-none border border-dark border-2 rounded p-2 mt-3">Go Back</Link>
            </div>
        </Layout>
    )
}

export default Page404