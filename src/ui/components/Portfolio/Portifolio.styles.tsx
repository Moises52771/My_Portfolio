import { styled } from "@mui/material/styles"
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md"


export const PortfolioStyled = styled('div')`
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

export const PortfolioComponents = styled('div')`
    margin: 0 auto;
    width: 60vw;
    border-radius: 10px;

    ${props => props.theme.breakpoints.down('md')}{
        
        width: 100vw;
    }
`

export const Items = styled('div')`
    display: flex;
    overflow: hidden;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    border-radius: 10px;
    -webkit-overflow-scrolling: touch;
    scrollbar-color: red;
`

export const Item = styled('div')`
    flex: none;
    width: 70%;
    height: 450px;
    scroll-snap-align: start;
`

export const Img = styled('img')`
    width: 100%;
    height: 80%;
    object-fit: cover;
`


