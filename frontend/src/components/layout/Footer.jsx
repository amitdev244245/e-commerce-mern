import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light p-3">
            <h4 className="text-center">All Right Reserved © Amit Sharma ❤️</h4>
            <p className="text-center">
                <Link to="/about" className="text-light text-decoration-none px-2">About</Link>|
                <Link to="/contact" className="text-light text-decoration-none px-2">Contact</Link>|
                <Link to="/policy" className="text-light text-decoration-none px-2">Privacy Policy</Link>
            </p>
        </footer>
    )
}

export default Footer