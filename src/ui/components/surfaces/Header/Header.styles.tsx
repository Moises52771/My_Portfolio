import { styled } from "@mui/material/styles";
import { AppBar } from "@mui/material";
import { FaLinkedin, FaGithubSquare, FaWhatsapp } from 'react-icons/fa';

export const HeaderAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.grey[900]};;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);
  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      height: 100px;
      padding-left: 50px;
    }
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled("img")`
  height: 25px;
  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 47px;
  } ;
`;

export const FaLinkedinStyled = styled(FaLinkedin)`
    width: 30px;
    height: 30px;
    margin: 5px;
`

export const FaGithubSquareStyled = styled(FaGithubSquare)`
    width: 30px;
    height: 30px;
    margin: 5px;
`

export const FaWhatsappStyled = styled(FaWhatsapp)`
    width: 30px;
    height: 30px;
    margin: 5px;
`

export const IconsContainerStyled = styled('div')`
    margin-left: auto;
    margin-right: 50px;
`

