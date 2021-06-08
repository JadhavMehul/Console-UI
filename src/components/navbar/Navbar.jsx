import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import NavbarLinks from './NavbarLinks'

export default function Navbar() {
    return (
        <AppBar position="sticky" className="main_navbar">
            <Container>
                <Toolbar variant="dense">
                    <NavLink to="/"><Typography variant="h5" style={{color: "white"}}>
                        Console UI
                    </Typography></NavLink>
                    
                    <NavbarLinks />                    
                </Toolbar>
            </Container>
        </AppBar>
    )
}
