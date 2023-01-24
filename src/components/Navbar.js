import React from 'react'
import { NavLink } from 'react-router-dom'
import { AuthProvider } from './auth'
export default function Navbar() {
    return (
        <AuthProvider>
            <nav className='PrimaryNav'>
                <section></section>
                <ul>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </ul>
            </nav>
        </AuthProvider>
    )
}
