import React, { useState } from 'react';
import {Link} from 'gatsby';
import { isConstructorDeclaration } from 'typescript';

function NavBar(){
    /* react hook */
    const [showMenu, setShowMenu] = useState(false)

    const logoStyle = `
    font-serif
    sm:text-base
    text-sm
    `

    let menu

    if(showMenu){
        menu = 
        <div className="fixed right-0 w-2/3 bg-white rounded-bl-lg">
            <ul>
                <li className="p-3 m-2 border border-black rounded text-center shadow flex"><Link className="transparent w-full h-full" to="/contact">Contact</Link></li>
                <li className="p-3 m-2 border border-black rounded text-center shadow flex"><Link className="transparent w-full h-full" to="/about">About</Link></li>
            </ul>
        </div>
    }

    return (
        <div>
            <header className="border-b border-neutral-200 p-3 flex justify-between items-center py-4">
                <span className="font-bold">
                    <h3 className={logoStyle}><Link to="/">jonathanweiss</Link></h3>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    onClick={() => setShowMenu(!showMenu)}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>

            </header>
            <nav>
                { menu }
            </nav>
        </div>
    )
}

export default NavBar