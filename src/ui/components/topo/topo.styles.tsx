import { styled } from "@mui/material/styles"
import { Avatar,Button } from "@mui/material"

export const PageTopStyled = styled("div")`
    background-color: ${({ theme }) => theme.palette.grey[900]};
    display: flex;
    padding: 50px 200px ;
    font-family: sans-serif;
`

export const AvatarStyled = styled(Avatar)`
    justify-content: center;
    height: 350px;
    width: 350px;
    margin-left: auto;
`

export const TopTitle = styled('h1')`
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 50px;
    width: 500px;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 15px;
    
`
export const SubTitle = styled('h3')`
    color: ${({ theme }) => theme.palette.text.secondary};
    width: 500px;
    margin-right: auto;
    margin-top: 0px;
`

export const Text = styled('div')`
    color: ${({ theme }) => theme.palette.text.primary};
    width: 400px;
    margin-right: auto;
    margin-top: 0px;
`

export const ButtonStyled = styled(Button)`
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.text.primary};
    margin-top: 40px;
    width: 150px;
    height: 40px;
    font-family: sans-serif;
    font-size: 16px;
    border: solid 2px ${({ theme }) => theme.palette.secondary.main};
`

