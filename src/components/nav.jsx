//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

//{Kodet af: Mathias & Victoria}

// Med NavLink gør vi, at produktet bliver en 1 pager
import { NavLink } from "react-router-dom";

// Her er der linket til CSS filen
import '../styles/matty.css'

//import ikoner fra MUI
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

//import af custom theme
import { customTheme } from '../themes/themes';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { CssBaseline, Typography } from "@mui/material";

//noter til koden under {/*KOMMENTAR*/}
export default function Nav() {
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
            <nav>
                <aside className="nav_border nav_left"></aside>
                <section className="nav">
                    <div>
                        <NavLink to='/' activeClassName="active" className={'navlink'}>
                            <HomeOutlinedIcon
                                sx={{ color: customTheme => customTheme.palette.text.primary }}
                            />
                            <Typography variant="body2"
                                sx={{ color: customTheme => customTheme.palette.text.primary }}
                            >
                                Home</Typography>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/booking' activeClassName="active" className={'navlink'}>
                            <AirplaneTicketOutlinedIcon
                                sx={{ color: customTheme => customTheme.palette.text.primary }}
                            />
                            <Typography variant="body2"
                                sx={{ color: customTheme => customTheme.palette.text.primary }}
                            >
                                Booking</Typography>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/map' activeClassName="active" className={'navlink'}>
                            <ExploreOutlinedIcon
                                sx={{ color: customTheme => customTheme.palette.text.primary }}
                            />
                            <Typography variant="body2"
                                sx={{ color: customTheme => customTheme.palette.text.primary }}
                            >
                                Map</Typography>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/planner' activeClassName="active" className={'navlink'}>
                            <EventOutlinedIcon
                                sx={{ color: customTheme => customTheme.palette.text.primary }}
                            />
                            <Typography variant="body2"
                                sx={{ color: customTheme => customTheme.palette.text.primary }}
                            >
                                Planner</Typography>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/user' activeClassName="active" className={'navlink'}>
                            <AccountCircleOutlinedIcon
                                 sx={{ color: customTheme => customTheme.palette.text.primary }}

                            />
                            <Typography variant="body2"
                                sx={{ color: customTheme => customTheme.palette.text.primary }}
                            >
                                User</Typography>
                        </NavLink>
                    </div>
                </section>
                <aside className="nav_border nav_right"></aside>
            </nav>
        </ThemeProvider>
    );
}
