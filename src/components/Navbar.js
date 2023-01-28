import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from './auth'
export default function Navbar() {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.logout();
        navigate('/');
    }
    return (
        <div className="navbar">
            <nav className='PrimaryNav'>
                <section></section>
                <ul>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                    {
                        !auth.user && (
                            <NavLink to="/login">Login</NavLink>
                        )
                    }
                    {
                        !(!auth.user) && (
                            <button onClick={handleLogout}>Logout</button>
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}
