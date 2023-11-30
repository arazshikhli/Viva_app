import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
export const AuthPage = () => {

    const { register, handleSubmit, setError,
        formState: { errors, isValid }
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onChange'
    })

    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <Paper>
            <Typography variant='h3'>
                Авторизация            </Typography>

            <Box component={'form'}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: "column",
                        width: '100%',
                        alignItems: "center"

                    }}
                >
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextField
                            color='primary'
                            label="email"
                            error={Boolean(errors.email?.message)}
                            helperText={errors.email?.message}
                            {...register('email', { required: "Укажите почту" })}
                        />
                        <TextField
                            color='primary'
                            label="password"
                            error={Boolean(errors.password?.message)}
                            helperText={errors.password?.message}
                            {...register('password', { required: "Укажите пароль" })}
                        />
                        <div>
                            <Button

                            >Регистрация</Button>
                            <Button

                                type='submit'
                            >Авторизация</Button>
                        </div>
                    </form>

                </div>

            </Box>
        </Paper>


    )
}
