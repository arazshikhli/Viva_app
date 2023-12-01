import { Link, Outlet } from 'react-router-dom'

import { AppBar, } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react'
import Toolbar from '@mui/material/Toolbar'
export const Header=()=>{
    return (
        <AppBar
        position='static'
        sx={{
            width: "100%"
        }}

    >
        <Toolbar >
            <AdbIcon />

        </Toolbar>

        {/* <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contacts'>Contacts</Link>
    <Link to='/gallery'>Gallery</Link> */}
    </AppBar>
    )
}