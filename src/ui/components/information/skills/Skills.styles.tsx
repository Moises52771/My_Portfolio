import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { SiJavascript, 
         SiSap,
         SiTypescript,
         SiHtml5,
         SiCss3,
         SiReact,
         SiNodedotjs,
         SiPython,
         SiPhp,
         SiMysql
        } from "react-icons/si";


export const SkillsContainer = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 50px 200px;
    font-family: sans-serif;

    ${props => props.theme.breakpoints.down('md')}{
        
        padding: 50px 40px ;
    }
`  

export const Title = styled('h2')`
    text-align: center;
    font-size: 30px;
    color: ${props => props.theme.palette.text.primary};
`

export const BoxSkills = styled('div')`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`

export const Lines = styled('div')`
    display: flex;
`

export const Box = styled(Button)`
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, 
                ${props => props.theme.palette.secondary.dark} 60%,
                ${props => props.theme.palette.secondary.light} 99%);
    color: ${({ theme }) => theme.palette.primary.contrastText};
    text-align: center;
    border-radius: 10px;
    width: 180px;
    height: 150px;
    margin: 10px;
    padding: 10px;

    :hover{
        background: linear-gradient(180deg, 
                ${props => props.theme.palette.secondary.dark} 30%,
                ${props => props.theme.palette.secondary.light} 99%);
    }

    ${props => props.theme.breakpoints.down('md')}{
        
        margin: 5px;
    }
`



//----------------- icones das skils --------------------------------


export const SiSapStyled = styled(SiSap)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    width: 80px;
    height: 80px;
`

export const SiJavascriptStyled = styled(SiJavascript)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    width: 80px;
    height: 80px;
`

export const SiTypescriptStyled = styled(SiTypescript)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    width: 80px;
    height: 80px;
`

export const SiHtml5Styled = styled(SiHtml5)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    width: 80px;
    height: 80px;
`

export const SiCss3Styled = styled(SiCss3)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    width: 80px;
    height: 80px;
`

export const SiReactStyled = styled(SiReact)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    width: 80px;
    height: 80px;
`

export const SiNodedotjsStyled = styled(SiNodedotjs)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    width: 80px;
    height: 80px;
`

export const SiPythonStyled = styled(SiPython)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    width: 80px;
    height: 80px;
`

export const SiPhpStyled = styled(SiPhp)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    width: 80px;
    height: 80px;
`

export const SiMysqlStyled = styled(SiMysql)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    width: 80px;
    height: 80px;
`