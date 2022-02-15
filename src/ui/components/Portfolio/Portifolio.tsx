import React from "react";
import { PortfolioStyled, 
         Title,
         PortfolioComponents,
         Items,
         Item,
         Img
       } from "./Portifolio.styles";


const Portfolio: React.FC = () =>{
    return(
        <PortfolioStyled>
            <Title>
                Portifolio
            </Title>
            <PortfolioComponents>
                <Items>
                    <Item>
                        <Img src={'img/projects/p1.jpg'}/>
                    </Item>
                    <Item>
                        <Img src={'img/projects/p1.jpg'}/>
                    </Item>
                    <Item>
                        <Img src={'img/projects/p1.jpg'}/>
                    </Item>
                    <Item>
                        <Img src={'img/projects/p1.jpg'}/>
                    </Item>
                    <Item>
                        <Img src={'img/projects/p1.jpg'}/>
                    </Item>
                </Items>   
            </PortfolioComponents>
        </PortfolioStyled>
    )
}


export default Portfolio;