import { Menu } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, Link, Avatar, Container, IconButton } from '@mui/material';





export default function Appbar({ handleShowDrawer }) {

    return (
        <AppBar position='absolute'>
            <Container maxWidth='xl' sx={{ p: 0 }}>

                <Toolbar>
                    <IconButton sx={{ display: { sm: 'none' }, mr: 1 }} onClick={handleShowDrawer}>
                        <Menu />
                    </IconButton>

                    <Link href="#" underline="none" color='inherit' sx={{ flexGrow: 1, transition: '.3s', '&:hover': { fontSize: 17 } }}>
                        Expenses
                    </Link>
                    <Typography variant="3" color="inherit">
                        Mohammed Nasser
                    </Typography>
                    <Avatar alt="Mohammed Nasser" src="../public/profile.jpg" sx={{ ml: 2, width: 46, height: 46, cursor: 'pointer' }} />

                </Toolbar>
            </Container>
        </AppBar>
    )
}