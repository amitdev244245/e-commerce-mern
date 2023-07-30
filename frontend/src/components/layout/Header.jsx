import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">E-Commerce</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink to="/login" className="dropdown-item">Login</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><NavLink to="/signup" className="dropdown-item">Signup</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header