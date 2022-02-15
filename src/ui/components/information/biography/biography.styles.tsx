import { styled } from "@mui/material/styles";
import { FaLaptopCode } from "react-icons/fa";
import { BsHeadset } from "react-icons/bs";
import { RiMedalLine } from "react-icons/ri";
import { Button } from "@mui/material";


export const BiographyContainer = styled('div')`
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
    color: ${({ theme }) => theme.palette.text.primary};
`

export const Text = styled('div')`
    color: ${({ theme }) => theme.palette.text.primary};
    text-align: center;
    margin-top: 40px;
    padding-left: 100px;
    padding-right: 100px;

    ${props => props.theme.breakpoints.down('md')}{
        
        padding: 0 50px;
    }
`

export const Feedback = styled('div')`
    display: flex;
    padding-left: 100px;
    padding-right: 100px;

    ${props => props.theme.breakpoints.down('md')}{
        
        padding: 0 50px ;
    }
`

export const Icons = styled('div')`
    color: ${({ theme }) => theme.palette.text.primary};
    width: 150px;
    text-align: center;
    margin: 50px auto;
`

export const FaLaptopCodeStyled = styled(FaLaptopCode)`
    color: ${({ theme }) => theme.palette.text.primary};
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
`

export const BsHeadsetStyled = styled(BsHeadset)`
    color: ${({ theme }) => theme.palette.text.primary};
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
`

export const RiMedalLineStyled = styled(RiMedalLine)`
    color: ${({ theme }) => theme.palette.text.primary};
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
`

export const ButtonStyled = styled(Button)`
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-family: sans-serif;
    margin: 40px auto 10px;
    font-size: 16px;
    width: 200px;
    height: 50px;

    :hover{
        background-color: #6B2AEEbb;
    }
`