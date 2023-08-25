import React, { useState } from 'react'
import Layout from '../layout/Layout'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/register`, formData);
            if (res.data.success) {
                toast.success(res.data.message);
                setTimeout(() => { navigate('/login') }, 4000);
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
        <Layout title={'Signup - E-Commerce App 🛒'}>
            <div className="signup d-flex align-items-center justify-content-center">
                <div className="signup-form col-md-3 mx-auto px-3 py-3">
                    <h2 className="text-center">Signup Page</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" placeholder="Enter your name" onChange={handleInputChange} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" placeholder="Enter your email" onChange={handleInputChange} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" placeholder="Enter your password" onChange={handleInputChange} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="mobile" className="form-label">Mobile</label>
                            <input type="text" className="form-control" name="mobile" placeholder="Enter your mobile" onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" name="address" placeholder="Enter your address" onChange={handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Register