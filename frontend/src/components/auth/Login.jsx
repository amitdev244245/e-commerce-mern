import React, { useState } from 'react'
import Layout from '../layout/Layout'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/login`, formData);
            if (res.data.success) {
                toast.success(res.data.message);
                setTimeout(() => { navigate('/') }, 4000);
            }
            else {
                toast.error(res.data.error);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <Layout title={'Login - E-Commerce App 🛒'}>
            <div className="login d-flex align-items-center justify-content-center">
                <div className="login-form col-md-3 mx-auto px-3 py-3">
                    <h2 className="text-center">Login Page</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" placeholder="Enter your email" onChange={handleInputChange} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" placeholder="Enter your password" onChange={handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-dark">Login</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Login