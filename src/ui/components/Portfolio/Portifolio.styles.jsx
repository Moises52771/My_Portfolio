import { styled } from "@mui/material/styles"
import "react-image-gallery/styles/css/image-gallery.css";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai"


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

    ${props => props.theme.breakpoints.down('md')}{
        
        margin-bottom: 50px;
    }

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
    height: 300px;
    width: 620px;
    border-radius: 20px;
    overflow: hidden;
    margin: 0 auto;
    border: solid #333 1px;

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
    transform: translate(25%);

    ${props => props.theme.breakpoints.down('md')}{
        transform: translate(16%);
        
    }

    label{
        text-align: center;
    }

    .bar{
        width: 50px;
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


//-----------------------------------------------------------------------------------
//----------- Informações dos projetos ---------------------------------------------


export const ProjectContainer = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 0 200px;
    font-family: sans-serif;

    ${props => props.theme.breakpoints.down('md')}{
        
        padding: 0 40px ;
    }
`

export const SubTitle = styled('h2')`
    margin-top: 25px;
    text-align: center;
    font-size: 20px;
    color: ${({ theme }) => theme.palette.text.primary};

`

export const Text = styled('div')`
    color: ${({ theme }) => theme.palette.text.primary};
    text-align: center;
    margin-top: 20px;    
    width: 400px;

    ${props => props.theme.breakpoints.down('md')}{
        width: 300px;
        padding: 0 50px;
    }
`

export const IconsContainer = styled("div")`
    margin: 0 auto;

    img{
        width: 40px;
        height: 40px;
        margin: 0 5px;

        ${props => props.theme.breakpoints.down('md')}{
            width: 50px;
            height: 50px;
        }
    }
`

export const AiFillGithubStyled = styled(AiFillGithub)`
    color: ${({ theme }) => theme.palette.primary.light};
    margin: 20px 10px 0;
    cursor: pointer;
    width: 30px;
    height: 30px;

    ${props => props.theme.breakpoints.down('md')}{
        
    }

`

export const AiOutlineGlobalStyled = styled(AiOutlineGlobal)`
    color: ${({ theme }) => theme.palette.primary.light};
    margin: 20px 10px 0;
    cursor: pointer;
    width: 30px;
    height: 30px;

    ${props => props.theme.breakpoints.down('md')}{
        
    }

`






