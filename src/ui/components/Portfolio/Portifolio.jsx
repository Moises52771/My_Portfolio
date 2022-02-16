import React from "react";
import { PortfolioStyled, 
         Title,
         PortfolioComponents,
         ImageGalleryStyled
       } from "./Portifolio.styles";


const images = [
    {
      original: 'img/projects/p2.jpg',
      thumbnail: 'img/projects/p2.jpg',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  

const Portfolio = () =>{
    
       
    
    return(
        <PortfolioStyled>
            <Title>
                Portifolio
            </Title>
            <PortfolioComponents>
              <ImageGalleryStyled items={images} />

            </PortfolioComponents>
        </PortfolioStyled>
    )
}


export default Portfolio;