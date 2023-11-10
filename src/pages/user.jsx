//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

//{Kodet af: Mathias}

// Her er der linket til CSS filen
import '../styles/matty.css'

// Med NavLink gør vi, at produktet bliver en 1 pager
import { NavLink } from "react-router-dom";


import logoplaceholder from '../assets/pictures/logoplaceholder.png'
import beach from "../assets/pictures/beachy.jpeg"

//import af separat theme fil
import { customTheme } from '../themes/themes';
import { useTheme } from '@mui/material/styles';
import { ScrollCards } from '../components/cards';

import { Box, CssBaseline, Stack, ThemeProvider, Typography } from '@mui/material';


export default function User(){
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
            <Stack className='u_main'>
                <Box>{/*Her er der gjort brug af MUI til at lave en scroller der er vandret og ikke har overflow, mens den holder alle*/}
                    <Stack direction="row" spacing={2} sx={{overflow: "auto",}} ClassName='blue_img'>
                        <NavLink to='*'><ScrollCards name="My Documents" image={<img src={beach} alt="img"/>}/></NavLink>
                        <NavLink to='*'><ScrollCards name="My Reviews" image={<img src={beach} alt="img"/>}/></NavLink>
                        <NavLink to='*'><ScrollCards name="My Tickets" image={<img src={beach} alt="img"/>}/></NavLink>
                        <NavLink to='*'><ScrollCards name="My Reviews" image={<img src={beach} alt="img"/>}/></NavLink>
                        <NavLink to='*'><ScrollCards name="My Planner" image={<img src={beach} alt="img"/>}/></NavLink>
                        <NavLink to='*'><ScrollCards name="My Saved" image={<img src={beach} alt="img"/>}/></NavLink>
                    </Stack>
                </Box>
                <Box>{/*Her er der blevet brugt nogle knapper, typografi og navlink til at bygge knapperne og deres funktion i user siden*/}
                    <NavLink to='*'><button className='u_button blue_img'><Typography variant='h5'>Settings</Typography></button></NavLink>
                    <NavLink to='/login'><button className='u_button blue_img'><Typography variant='h5'>Log Out</Typography></button></NavLink>
                    <NavLink to='/signup'><button className='u_button red'><Typography variant='h5'>Delete User</Typography></button></NavLink>
                </Box>
            </Stack>
        </ThemeProvider>
    );
}