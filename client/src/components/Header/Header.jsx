import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { AppBar, Button, Icon, Typography, } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import React, { useEffect, useState } from 'react'
import Toolbar from '@mui/material/Toolbar';
import { toast } from 'react-toastify';
export const Header = () => {
    const navigate = useNavigate()
    const [token, setToken] = useState(false)

    useEffect(() => {

    }, [token])
    const handleRegister = () => {
        if (Boolean(localStorage.getItem('userToken'))) {
            localStorage.removeItem('userToken')
            navigate('/login');
            toast('Вы вышли из системы')
        }
  
    }

    return (
        <AppBar
            position='static'
            sx={{
                width: "100%"
            }}

        >
            <Toolbar >
                <Typography
                    sx={{ flexGrow: 1 }}
                ><AdbIcon/></Typography>
                <Button
                    color='error'
                    onClick={handleRegister}
                >{token ? 'Выйти' : 'Войти'}</Button>
            </Toolbar>

            {/* <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contacts'>Contacts</Link>
    <Link to='/gallery'>Gallery</Link> */}
        </AppBar>
    )
}