import { Drawer, Toolbar, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeMode } from "../ThemeContext";
import { useTheme } from "@mui/material/styles";
import CloseIcon from '@mui/icons-material/Close';

import { useLocation, useNavigate } from "react-router-dom";
import { Create, Home, Logout, Person, Settings } from "@mui/icons-material";
import { teal } from "@mui/material/colors";



const drawerWidth = 210;

export default function Draw({showDrawer , handleShowDrawer }) {

    const currentPath = useLocation().pathname;
    

    const { toggleTheme } = useThemeMode();
    const theme = useTheme();

    const navigate = useNavigate();
    const items = [
        { id: 101, toUrl: '/', icon: <Home />, text: 'Home' },
        { id: 102, toUrl: '/create', icon: <Create />, text: 'Create' },
        { id: 103, toUrl: '/profile', icon: <Person />, text: 'Profile' },
        { id: 104, toUrl: '/settings', icon: <Settings />, text: 'Settings' },
        { id: 105, toUrl: '/logout', icon: <Logout />, text: "Log Out" },
    ]
    const itemsList = items.map(item => {
        const { id, toUrl, icon, text } = item
        return (

            <ListItem key={id} disablePadding sx={currentPath === toUrl ? {bgcolor:teal[500] , color:'#fff'} : null}>
                <ListItemButton onClick={() => {
                    navigate(toUrl);
                    handleShowDrawer();
                }}>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>

        )

    })
    return (
        <Drawer component='nav' 
            sx={{
                position:{xs:'fixed', sm:'relative'},
                zIndex:9999,
                height: '100vh',
                flexShrink: 0,
                display:{xs:showDrawer , sm:'block'},
                '& .MuiDrawer-paper': {
                    position: 'static',
                    width: `${drawerWidth}px` ,
                    // width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
           variant="permanent" 
            anchor="left"
        >

            <Toolbar>
                <IconButton sx={{position:'absolute', top:0 , right:0 ,display:{md:'none'}}} onClick={handleShowDrawer }>
                    <CloseIcon sx={{cursor:'pointer'}}/>
                </IconButton>
                <IconButton onClick={toggleTheme} color="inherit" sx={{mx:'auto'}}>
                    {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>

            <Divider />

            <List>
                {itemsList}
            </List>



        </Drawer>
    )
}