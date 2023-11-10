//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

//{Kodet af: Vic}

import { customTheme } from '../themes/themes';
import { useTheme } from '@mui/material/styles';

import { CssBaseline, Stack, ThemeProvider, Typography } from '@mui/material';
import SearchBar from '../components/search';
import { QuickTools, ScrollCards } from '../components/cards';

//import af navlink og rettelser ang. det af Mathias
import { NavLink } from "react-router-dom";


export default function Booking() {
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
            <Typography variant="h2">Where would you like to go [username]</Typography>
            <div>
                <SearchBar/>
            </div>

            <section className='quickTools'>
                <Stack direction="row" spacing={2}  
                        sx={{

                            padding: "1% 3%",
                            overflow: "auto",

                        }}>
                    <NavLink to='*'><QuickTools name="Flights"/></NavLink>
                    <NavLink to='*'><QuickTools name="Hotels"/></NavLink>
                    <NavLink to='*'><QuickTools name="Rentals"/></NavLink>
                    <NavLink to='*'><QuickTools name="Explore"/></NavLink>
                </Stack>
            </section>
        </ThemeProvider>   
    );
}