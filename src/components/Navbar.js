import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className='PrimaryNav'>
            <section></section>
            <ul>
                <NavLink to="/" >Home</NavLink>&emsp;&emsp;
                <NavLink to="/about">About</NavLink>&emsp;&emsp;
                <NavLink to="/products">Products</NavLink>&emsp;&emsp;
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/login">Login</NavLink>
            </ul>
        </nav>
    )
}
