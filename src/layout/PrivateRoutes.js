import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthProvider } from '../contexts/authContext'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'

const PrivateRoutes = () => {
    let token = localStorage.getItem('user_token') || false;
    return (
        token ? (
            <AuthProvider>
                <div className="main">
                    <Navbar />
                    <div className="content">
                        <Header />
                        <Outlet />
                    </div>
                </div>
            </AuthProvider>
        ) : (
            <Navigate to="/" />
        )
    )
}

export default PrivateRoutes