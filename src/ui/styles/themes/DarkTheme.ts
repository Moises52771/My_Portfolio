import { blueGrey, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const DarkTheme = createTheme({
    palette: {
        
        primary: {
            main: "#617eff",
        },
        secondary: {
            light: grey[600],
            main: "#6B2AEE",
            dark: blueGrey[700],
        },
        text: {
            primary: '#e4e4e4',
            secondary: '#9B9B9B',
        },
        background: {
            paper: '#424242',
            default: '#212121',
        },
    },
    typography: {
        fontFamily: 'Poppins',
    },
    shape: {
        borderRadius: '3px',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
            variants: [
                {
                    props: { variant: 'contained', color: 'secondary' },
                    style: {
                        color: 'white',
                    },
                },
            ],
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 0px 39px rgba(0, 0, 0, 0.05)',
                },
            },
        },
    },
});

export default DarkTheme;
