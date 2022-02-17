import React from "react";
import { PortfolioStyled, 
         Title,
         PortfolioComponents,
         Content,
         Navigation
       } from "./Portifolio.styles";
       

  

const Portfolio = () =>{
    
       
    
    return(
        <PortfolioStyled>
            <Title>
                Portifolio
            </Title>
            <PortfolioComponents>
                <Content>
                    <div class="slides">
                        <input type="radio" name="slide" id="slide1"/>
                        <input type="radio" name="slide" id="slide2"/>
                        <input type="radio" name="slide" id="slide3"/>
                        <input type="radio" name="slide" id="slide4"/>
                        <input type="radio" name="slide" id="slide5"/>


                        <div class="slide s1">
                            <img src="img/projects/p1.jpg"/>
                        </div>
                        <div class="slide">
                            <img src="img/projects/p2.jpg"/>
                        </div>
                        <div class="slide">
                            <img src="img/projects/p3.jpg"/>
                        </div>
                        <div class="slide">
                            <img src="img/projects/p4.gif"/>
                        </div>
                        <div class="slide">
                            <img src="img/projects/p3.jpg"/>
                        </div>
                    </div>
                    <Navigation>
                        <label for="slide1" class="bar" id="lbSlide1"></label>
                        <label for="slide2" class="bar" id="lbSlide2"></label>
                        <label for="slide3" class="bar" id="lbSlide3"></label>
                        <label for="slide4" class="bar" id="lbSlide4"></label>
                        <label for="slide5" class="bar" id="lbSlide5"></label>
                    </Navigation>
                </Content> 

            </PortfolioComponents>
        </PortfolioStyled>
    )
}


export default Portfolio;

