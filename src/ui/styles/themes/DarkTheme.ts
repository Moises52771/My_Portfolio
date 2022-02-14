import { createTheme } from '@mui/material/styles';

const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#617eff",
        },
        secondary: {
            main: "#6B2AEE",
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
