import React from "react";
import { HeaderAppBar, FaGithubSquareStyled, FaLinkedinStyled, FaWhatsappStyled, IconsContainerStyled} from "./Header.styles";
import { Toolbar, Container } from "@mui/material";
import { useAppThemeContext } from 'contexts/ThemeContext'
import { BoxSwitch } from "ui/components/surfaces/Header/Header.styles";


const Header: React.FC = () => {
  const { toggleTheme, icon } = useAppThemeContext();

  return (
    <HeaderAppBar position={"sticky"}>
        <Toolbar component={Container}>
            <h2>
                Moisés Gomes 
            </h2>
            <IconsContainerStyled>

                <a href="https://www.linkedin.com/in/moisesgomesdev52771" target={"_blank"}>
                  <FaLinkedinStyled/>
                </a>
                <a href="https://github.com/Moises52771" target={"_blank"}>
                  <FaGithubSquareStyled/>
                </a>
                <a href="https://wa.me/5511954642820" target={"_blank"}>
                  <FaWhatsappStyled/>
                </a>

            </IconsContainerStyled>
            <BoxSwitch onClick={toggleTheme}>
              {icon}
            </BoxSwitch>
        </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;