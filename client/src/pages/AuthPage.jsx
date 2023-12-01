import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { fetchAuth } from '../redux/slices/auth.slice';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AuthPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const handleSubmit = async (values) => {
        try {
            await axios.post('http://localhost:5000/api/auth/login', {
                email, password
            }).then(
                (resp) => {
                    console.log(resp.data.message)
                    setMessage(resp.data.message)
                    toast(message)
                }
            )
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

            <ToastContainer />

        </>


    )
}
