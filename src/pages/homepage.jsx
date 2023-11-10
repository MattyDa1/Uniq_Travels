//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

//{Kodet af: Victoria}

//import billeder
//import logoplaceholder from '../assets/pictures/logoplaceholder.png'
import beach from "../assets/pictures/beachy.jpeg"
import video from "../assets/NFP2.mp4"

//import andre komponenter
import { QuickTools, ScrollCards } from '../components/cards';
import SearchBar from '../components/search';
import "../styles/vic.css"

//import fra MUI
import Box from '@mui/material/Box';
import { CssBaseline, Divider, Stack, ThemeProvider, Typography } from '@mui/material';
//import af ikoner fra MUI
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';


//import af separat theme file
import { customTheme } from '../themes/themes';
import { useTheme } from '@mui/material/styles';

//import af navlink og rettelser ang. det af Mathias
import { NavLink } from "react-router-dom";


export default function HomePage() {
    //Oprettelse af variabel for at bruge useTheme
    const outerTheme = useTheme();
    
    //const greet = newUser ? "Welcome, new traveler!" : "Welcome back, traveler!"
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
            <section className='hPic'>
                <section className='search'>
                    <Box /* Bruger box komponenten fra MUI i stedet for div/section etc, for at være i stand til at style med CSS fra MUI systemet*/
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",

                            position: 'absolute',
                            top: 80
                        }}
                    >
                        <Typography variant="h2" sx={{ color: customTheme => customTheme.palette.background.paper, lineHeight:.8, marginBottom:4 }}>Welcome Traveler!</Typography>
                        <SearchBar/>
                    </Box>

                </section>
            </section>



        <Stack spacing={4} m={"2em 0"} marginBottom={"200px"}>
            <Box className='quickTools'
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  
                }}
            >
                <NavLink to='*'><QuickTools name="Travel options" icon={<FmdGoodOutlinedIcon sx={{ fontSize: 40, marginBottom:"16%" }} />} /></NavLink>
                <NavLink to='*'><QuickTools name="Housing options" icon={<MapsHomeWorkOutlinedIcon sx={{ fontSize: 40, marginBottom:"16%" }} />} /></NavLink>
                <NavLink to='*'><QuickTools name="Explore options" icon={<TravelExploreOutlinedIcon sx={{ fontSize: 40, marginBottom:"16%" }} />} /></NavLink>
            </Box>

            <Box
                sx={{ color: customTheme => customTheme.palette.secondary.main }}
            >
                <Typography variant='h4' m="0 3%" >Hot deals!</Typography>
                <Stack direction="row" spacing={2}  /*Stack komponenten fra MUI er brugt her for at sætte elementerne horisontalt – opdagede denne måde, efter jeg havde brugt flex og flexdirection andre steder */
                    sx={{
                        p: "0 3% 3%",
                        overflow: "auto",
                    }}
                >
                    <NavLink to='*'><ScrollCards name="New offers" image={<img src={beach} alt="img"/>}/></NavLink> {/*Billeder virker ikke ordentligt med props, forsøger at fikse */}
                    <NavLink to='*'><ScrollCards name="Your next vacation?" image={<img src={beach} alt="img"/>} /></NavLink>
                    <NavLink to='*'><ScrollCards name="Get 20% off on next booking!" image={<img src={beach} alt="img"/>} /></NavLink>
                    <NavLink to='*'><ScrollCards name="Incredible croissonts" image={<img src={beach} alt="img"/>} /></NavLink>
                    <NavLink to='*'><ScrollCards name="Got a coupon?" image={<img src={beach} alt="img"/>} /></NavLink>
                </Stack>
            </Box>

            <Stack direction="column">
                <Typography variant="h4" lineHeight="1" textAlign="center" gutterBottom>Plan your next vacation with us!</Typography>
                    <video src={video} width="100%" height="auto" controls preload="none" /*TODO: udskift video*//>                     
                    <Stack direction="row" spacing={4}>
                        <Typography>Simple!</Typography>
                        <Divider orientation="horizontal" variant="inset"/>                        
                        <Typography>Fast!</Typography>
                        <Divider orientation="horizontal" variant="inset"/>
                        <Typography>Easy!</Typography>
                        <Divider orientation="horizontal" variant="inset"/>
                    </Stack>
            </Stack>
        </Stack>
        </ThemeProvider >
    );
}