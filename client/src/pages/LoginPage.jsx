import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { fetchAuth } from '../redux/slices/auth.slice';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const LoginPage = () => {
 
    const navigate = useNavigate()
    const location = useLocation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const fromPage = location.state?.from?.pathname || '/'


    const handleSubmit = (values) => {
        try {
            axios.post('http://localhost:5000/api/auth/login', {
                email, password
            }).then(
                (resp) => {
                    toast(resp.data.message, {
                        theme: 'dark'
                    })
                    localStorage.setItem('userToken', resp.data.token)
                    navigate('/create')
                }
            ).catch((er) => {
                toast(er.response.data.message, {
                    theme: 'dark'
                })

            })
            setEmail('');
            setPassword('');
            toast()

        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            <form
                onSubmit={e => e.preventDefault()}
            >
                <TextField
                    color='primary'
                    label="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    color='primary'
                    label="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <Button
                    type='submit'
                    onClick={handleSubmit}
                >Login</Button>

            </form>



        </>


    )
}
