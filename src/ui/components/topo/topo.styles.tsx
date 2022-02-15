import { styled } from "@mui/material/styles"
import { Avatar,Button } from "@mui/material"
import { FcMultipleDevices } from "react-icons/fc"

export const PageTopStyled = styled("div")`
    background-color: ${props => props.theme.palette.background.default};
    display: flex;
    padding: 100px 200px ;
    font-family: sans-serif;

    ${props => props.theme.breakpoints.down('md')}{
        flex-direction: column-reverse;
        width: 100%;
        padding: 50px 40px ;
        text-align: center;
    }
`

export const AvatarStyled = styled(Avatar)`
    justify-content: center;
    height: 350px;
    width: 350px;
    margin-left: auto;
    

    ${props => props.theme.breakpoints.down('md')}{
        height: 200px;
        width: 200px;
        margin-left: auto;
        margin-right: auto;
    }
`

export const TopTitle = styled('h1')`
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 50px;
    width: 500px;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 15px;

    ${props => props.theme.breakpoints.down('md')}{
        
        margin-left: auto;
        margin-right: auto;
    }
    
`
export const SubTitle = styled('h3')`
    color: ${({ theme }) => theme.palette.text.secondary};
    width: 500px;
    margin-right: auto;
    margin-top: 0px;

    ${props => props.theme.breakpoints.down('md')}{
        
        margin-left: auto;
        margin-right: auto;
    }
`

export const Text = styled('div')`
    color: ${({ theme }) => theme.palette.text.primary};
    width: 400px;
    margin-right: auto;
    margin-top: 0px;

    ${props => props.theme.breakpoints.down('md')}{
        margin: 0 auto;
        text-align: center;
    }
`

export const ButtonStyled = styled(Button)`
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    margin-top: 40px;
    width: 150px;
    height: 40px;
    font-family: sans-serif;
    font-size: 16px;

    :hover{
        background-color: #6B2AEEbb;
    }

    ${props => props.theme.breakpoints.down('md')}{
        margin-left: auto;
        margin-right: auto;
    }
`

export const Div = styled('div')`
    display: flex;
    flex-direction: column;
`


export const FcMultipleDevicesStyled = styled(FcMultipleDevices)`
    
`



