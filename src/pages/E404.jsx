//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

//{Kodet af: Mathias}

// Her er der linket til CSS filen
import '../styles/matty.css'

// Med NavLink gør vi, at produktet bliver en 1 pager
import { NavLink } from "react-router-dom";

import logoplaceholder from '../assets/pictures/logoplaceholder.png'

//import af custom theme
import { customTheme } from '../themes/themes';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { Box, Button, CssBaseline, Stack, ThemeProvider, Typography } from "@mui/material";

//Er ikke helt sikker på, hvorfor den ikke vil importere kontentet ind på siden
export default function User(){
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
            <Stack>
                <Box>
                    <Typography variant='h3'>ERROR OCCURED</Typography>
                </Box>
                <Box>
                    <img src={logoplaceholder} alt="placeholder" style={{ width: "5em" }} />
                </Box>
                <Box>
                    <p>An error has occured <br/>Please check your connection<br/>and press the button below<br/>to return to the front page</p>
                </Box>
                <Box>
                    <Button>
                        <Typography variant='h5'>Please contact our support</Typography>
                    </Button>
                    <Button>
                        <NavLink to='/'>Home</NavLink>
                    </Button>
                </Box>
            </Stack>
        </ThemeProvider>
    );
}