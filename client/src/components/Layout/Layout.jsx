import { Outlet } from 'react-router-dom'
import React from 'react'
import { Header } from '../Header/Header';
import styles from './Layout.module.css'
export const Layout = () => {

    return (
        <>

        <Header />
         <Outlet />
        </>
     )
}
