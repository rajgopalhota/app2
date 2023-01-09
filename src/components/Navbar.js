import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav>
            <ul>
                <NavLink to="/" >Home</NavLink>&emsp;&emsp;
                <NavLink to="/about">About</NavLink>
            </ul>
        </nav>
    )
}
