import { Outlet } from "react-router-dom"

import MenuIcon from '@mui/icons-material/Menu';

import { Padding, Scale } from '@mui/icons-material';
import Draw from './Drawer';

// Material Components
import { AppBar, Toolbar, Typography, Link, Avatar, Container } from '@mui/material'
import Appbar from '../../AppBar';
import {  useState } from "react";

// api trans Funs



export default function Root() {
   

    const [showDrawer, setShowDrawer] = useState('none');
    const handleShowDrawer = () => {
        showDrawer === 'none' ? setShowDrawer('block') : setShowDrawer('none')
    }
    return (
        <div style={{
            display: 'flex'
        }}>

            <Draw showDrawer={showDrawer} handleShowDrawer={handleShowDrawer} />
            <div style={{ flex: '1', position: 'relative', minHeight: '100vh' }}>
                <Appbar handleShowDrawer={handleShowDrawer} />
                <Container component={'main'} maxWidth='sm' sx={{
                    height: 'calc(100% - 64px)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    <Outlet />
                </Container>
            </div>


        </div>
    )
}