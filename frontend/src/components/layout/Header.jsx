import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GiShoppingCart } from 'react-icons/gi'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand fw-bold"> <GiShoppingCart size={30} />E-Commerce</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to="/signup" className="nav-link">Signup</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header