import React from "react";
import { HeaderAppBar, FaGithubSquareStyled, FaLinkedinStyled, FaWhatsappStyled, IconsContainerStyled} from "./Header.styles";
import { Toolbar, Container } from "@mui/material";
import { FaLinkedin, FaGithubSquare, FaWhatsapp } from 'react-icons/fa';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';


const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
        <Toolbar component={Container}>
            <h2>
                Moises Gomes 
            </h2>
            <IconsContainerStyled>

                <a href="https://www.linkedin.com/in/moisesgomesdev52771"><FaLinkedinStyled/></a>
                <a href="https://github.com/Moises52771"><FaGithubSquareStyled/></a>
                <a href="https://wa.me/5511954642820"><FaWhatsappStyled/></a>

            </IconsContainerStyled>
        </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;