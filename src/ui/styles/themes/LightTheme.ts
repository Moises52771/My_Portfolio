import { createTheme } from '@mui/material/styles';

const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#617eff",
            contrastText: '#f3f3f3',
        },
        secondary: {
            main: "#6B2AEE",
            contrastText: '#9B9B9B',
        },
        text: {
            primary: '#333',
            secondary: '#555',
        },
        background: {
            paper: '#fff',
            default: '#f3f3f3',
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

export default LightTheme;
