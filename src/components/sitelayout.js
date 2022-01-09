import React from 'react';
import {Link} from 'gatsby';

const SiteLayout = ({children}) => {
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
        <div className="application">
            <script src="../path/to/@themesberg/flowbite/dist/flowbite.bundle.js"></script>
            <div>
                <nav className="flex sm:justify-between  justify-around items-center bg-gray-50 lg:px-20 sm:px-6 py-8 text-gray-100">
                    <h3 className={logoStyle}>jonathanweiss1</h3>
                    <ul className="flex">
                        <li className={linkStyle}><Link to="/">Home</Link></li>
                        <li className={linkStyle}><Link to="/contact">Contact</Link></li>
                        <li className={linkStyle}><Link to="/about">About</Link></li>
                    </ul>
                </nav>

                <main>{children}</main>

                <footer className="text-center py-8 bg-green-900 text-gray-100">
                    <p>Copyright 2030 <span  className={logoStyle}>HealthRoom</span></p>
                </footer>
            </div>
        </div>
    )
}

export default SiteLayout