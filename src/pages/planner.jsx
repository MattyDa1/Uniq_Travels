import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material"

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Planner(){
    return(
        <ThemeProvider theme={theme}>
            <h1>planner</h1>
        </ThemeProvider>
    )
}