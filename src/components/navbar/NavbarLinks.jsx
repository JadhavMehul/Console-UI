import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavbarLinks() {
    return (
        <ul className="nav_links">
            <li>
                <NavLink className="navlink" style={{color: "white"}} to="/docs">Docs</NavLink>
            </li>
            <li>
                <NavLink className="navlink" style={{color: "white"}} to="/components">Components</NavLink>
            </li>
            <li>
                <NavLink className="navlink" style={{color: "white"}} to="/contact">Contact</NavLink>
            </li>
        </ul>
    )
}
