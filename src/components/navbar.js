import React from 'react';
import {Link} from 'gatsby';

const NavBar = () => {
    const linkStyle = `
        Hover:opacity-70
        text-sm
        sm:text-lg
        lg:px-20
        sm:px-10
        px-2
    `

    const logoStyle = `
        text-white
        font-radley
        sm:text-base
        text-sm
    `

    return (
        <nav className="flex sm:justify-between border-b-8 border-double justify-around items-center bg-gray-50 lg:px-20 sm:px-6 py-4 text-gray-100">
            <h3 className={logoStyle}>jonathanweiss</h3>
            <ul className="flex">
                <li className={linkStyle}><Link to="/">Home</Link></li>
                <li className={linkStyle}><Link to="/contact">Contact</Link></li>
                <li className={linkStyle}><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar