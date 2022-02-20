import { styled } from "@mui/material/styles"
import { FiSmartphone } from "react-icons/fi"
import { GoLocation } from "react-icons/go"
import { MdAlternateEmail } from "react-icons/md"

export const ContactStyled = styled('div')`
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

export const ContactContainer = styled('div')`
    margin-top: 20px;
    display: flex;
    
`

export const BoxContact = styled('div')`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    color: ${({ theme }) => theme.palette.text.primary};
`

export const Div = styled('div')`
    display: flex;
    margin: 0 auto;
    width: 50%;
    text-align: center;
    justify-content: center;
    flex-direction: column;

    ${props => props.theme.breakpoints.down('md')}{
        width: 80%;
        
    }
`

export const MdAlternateEmailStyled = styled(MdAlternateEmail)`
    color: ${({ theme }) => theme.palette.text.primary};
    width: 30px;
    height: 30px;

`

export const GoLocationStyled = styled(GoLocation)`
    color: ${({ theme }) => theme.palette.text.primary};
    width: 30px;
    height: 30px;
`

export const FiSmartphoneStyled = styled(FiSmartphone)`
    color: ${({ theme }) => theme.palette.text.primary};
    width: 30px;
    height: 30px;
`
export const TitleBox = styled('div')`
    display: flex;
    align-items: center;
    margin: 15px auto 0;
`
export const TextBox = styled('div')`
    display: flex;
    align-items: center;
    margin: 0 auto 15px;
`

export const H3 = styled('h3')`
    margin: 0;
    font-size: 25px;
`

export const H3Text = styled('h3')`
    
`