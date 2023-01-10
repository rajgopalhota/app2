import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Products() {
    return (
        <>
            <div>
                <h2>Poducts Page</h2>
            </div>
            <nav className='SubLinks'>
                <NavLink to="featured" >Featured</NavLink>&emsp;
                <NavLink to="new" >New Products</NavLink>
            </nav>
            <Outlet></Outlet>
        </>
    )
}
