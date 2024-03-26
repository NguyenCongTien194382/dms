import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const PublicRoutes = () => {
    let token = localStorage.getItem('user_token') || false;
    return (
        !token ? <Outlet /> : <Navigate to="/list-device" />
    )
}

export default PublicRoutes