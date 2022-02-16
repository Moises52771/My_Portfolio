import { styled } from "@mui/material/styles"
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';


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

export const ImageGalleryStyled = styled(ImageGallery)`
    width: 20px;

`






