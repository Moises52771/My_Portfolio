import { styled } from "@mui/material/styles"
import "react-image-gallery/styles/css/image-gallery.css";


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
    justify-content: center;
    display: flex;
    flex-direction: column;

    ${props => props.theme.breakpoints.down('md')}{
        
        width: 100vw;
    }
`


// ----------------Slideshow------------------------------------------------------
export const Content = styled('div')`
    height: 440px;
    width: 820px;
    border-radius: 20px;
    overflow: hidden;
    margin: 0 auto;

    ${props => props.theme.breakpoints.down('md')}{
        
        height: 220px;
        width: 410px;
    }

    input{
        display: none;
    }

    .slides{
        display: flex;
        width: 500%;
        height: 100%;
    }

    .slide{
        width: 20%;
        transition: .6s;

    }

    .slide img{
        width: 100%;
        height: 100%;
    }

    //---------- Tranzição das Imagens ------------------------------
    #slide1:checked ~ .s1{
        margin-left: 0;
    }

    #slide2:checked ~ .s1{
        margin-left: -20%;
    }

    #slide3:checked ~ .s1{
        margin-left: -40%;
    }

    #slide4:checked ~ .s1{
        margin-left: -60%;
    }

    #slide5:checked ~ .s1{
        margin-left: -80%;
    }

`

export const Navigation = styled('div')`
    display: flex;
    position: relative;
    bottom: 30px;
    margin: 0 auto;
    transform: translate(24%);

    ${props => props.theme.breakpoints.down('md')}{
        transform: translate(18%);
        
    }

    label{
        text-align: center;
    }

    .bar{
        width: 70px;
        height: 17px;
        border: 2px solid #f3f3f3;
        background-color: #414141;
        margin: 6px;
        border-radius: 5px;
        cursor: pointer;
        transition: .4s;

        ${props => props.theme.breakpoints.down('md')}{
            width: 40px;
            height: 20px;
        
        }
    }

    .bar:hover{
        background-color: #f3f3f3;
    }



`






