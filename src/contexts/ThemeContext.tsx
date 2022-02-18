import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material"
import LightTheme from "ui/styles/themes/LightTheme";
import DarkTheme from "ui/styles/themes/DarkTheme";
import { FaMoonStyled, WiDaySunnyStyled } from "ui/components/surfaces/Header/Header.styles";

interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
    icon: any;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const [icon, setIcon] = useState(<WiDaySunnyStyled/>);

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light' )
    }, []);

    const theme = useMemo(() => {
        if (themeName === 'light') {
            setIcon(<FaMoonStyled/>)
            return LightTheme;
        }
        
        setIcon(<WiDaySunnyStyled/>)
        return DarkTheme;
    }, [themeName])

    return(
        <ThemeContext.Provider value={{ themeName, toggleTheme, icon }}>
            <ThemeProvider theme={theme}>
                {children}
                {toggleTheme}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}