import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { FaLaptopCode } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { FiSmartphone } from "react-icons/fi";


export const OfferContainer = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 10px 200px;
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

export const BoxOffer = styled('div')`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`

export const Lines = styled('div')`
    display: flex;
    margin: auto;
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
    height: 200px;
    margin: 10px;
    padding: 10px;

    ${props => props.theme.breakpoints.down('md')}{
        width: 150px;
        height: 160px;
    }

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



export const FaLaptopCodeStyled = styled(FaLaptopCode)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    width: 80px;
    height: 80px;
`

export const AiFillCodeStyled = styled(AiFillCode)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    width: 80px;
    height: 80px;
`

export const FiSmartphoneStyled = styled(FiSmartphone)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    width: 80px;
    height: 80px;
`
