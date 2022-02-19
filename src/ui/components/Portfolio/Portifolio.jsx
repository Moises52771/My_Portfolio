import React, { useMemo } from "react";
import { PortfolioStyled, 
         Title,
         PortfolioComponents,
         Content,
         Navigation,
         ProjectContainer,
         Text,
         SubTitle,
         IconsContainer,
         AiFillGithubStyled,
         AiOutlineGlobalStyled
       } from "./Portifolio.styles";
import { useState } from "react";   
    

  

const Portfolio = () =>{

    const [currentSlide, setCurrentSlide] = useState(1);



    // O IF verifica se a pagina ja carregou totalemnte para evitar erros no NextJS
    if (typeof window !== "undefined") {

        // --------------------------- Indentifica o slide atual ----------------------------------------
        
    
        if (currentSlide == 1) {
                                              
                document.getElementById("lbSlide1").style.backgroundColor = '#f3f3f3';
                document.getElementById("lbSlide2").style.backgroundColor = '#414141';
                document.getElementById("lbSlide3").style.backgroundColor = '#414141';
                document.getElementById("lbSlide4").style.backgroundColor = '#414141';
                document.getElementById("lbSlide5").style.backgroundColor = '#414141';    

                               
        }     
        
    
        if (currentSlide == 2) {
                        
                document.getElementById("lbSlide1").style.backgroundColor = '#414141';
                document.getElementById("lbSlide2").style.backgroundColor = '#f3f3f3';
                document.getElementById("lbSlide3").style.backgroundColor = '#414141';
                document.getElementById("lbSlide4").style.backgroundColor = '#414141';
                document.getElementById("lbSlide5").style.backgroundColor = '#414141';                 
                 
        }
    
        if (currentSlide == 3) {
                        
                document.getElementById("lbSlide1").style.backgroundColor = '#414141';
                document.getElementById("lbSlide2").style.backgroundColor = '#414141';
                document.getElementById("lbSlide3").style.backgroundColor = '#f3f3f3';
                document.getElementById("lbSlide4").style.backgroundColor = '#414141';
                document.getElementById("lbSlide5").style.backgroundColor = '#414141';
                  
        }
    
        if (currentSlide == 4) {
                        
                document.getElementById("lbSlide1").style.backgroundColor = '#414141';
                document.getElementById("lbSlide2").style.backgroundColor = '#414141';
                document.getElementById("lbSlide3").style.backgroundColor = '#414141';
                document.getElementById("lbSlide4").style.backgroundColor = '#f3f3f3';
                document.getElementById("lbSlide5").style.backgroundColor = '#414141';                
                
        }
    
        if (currentSlide == 5) {
                        
                document.getElementById("lbSlide1").style.backgroundColor = '#414141';
                document.getElementById("lbSlide2").style.backgroundColor = '#414141';
                document.getElementById("lbSlide3").style.backgroundColor = '#414141';
                document.getElementById("lbSlide4").style.backgroundColor = '#414141';
                document.getElementById("lbSlide5").style.backgroundColor = '#f3f3f3';

                
        }
        //------------------------------------------------------------------------------------------------
        
          
        
    }


    //----------- Escolhe o conteudo dos slides -----------------------------------------------------------
    const slide = useMemo(() => {// Projeto My Portfolio
        if (currentSlide == 1){
            return(
                <ProjectContainer>
                    <IconsContainer>
                        <AiFillGithubStyled/>
                        <AiOutlineGlobalStyled/>
                    </IconsContainer>
                    <SubTitle>
                        Projeto My Portfolio
                    </SubTitle>
                    <IconsContainer>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
                    </IconsContainer>
                    <Text>
                        Projeto do meu portifolio pessoal desenvolvido com um layout responssivo
                        ultilizando React.JS com Next.JS e Material-UI
                    </Text>
                </ProjectContainer>
            )
        }
        else if (currentSlide == 2){
            return(
                <ProjectContainer>
                    <IconsContainer>
                        <AiFillGithubStyled/>
                        <AiOutlineGlobalStyled/>
                    </IconsContainer>
                    <SubTitle>
                        Projeto 2
                    </SubTitle>
                </ProjectContainer>
            )
        }
        else if (currentSlide == 3){// Frontend E-Diaristas
            return(
                <ProjectContainer>
                <IconsContainer>
                    <AiFillGithubStyled/>
                    <AiOutlineGlobalStyled/>
                </IconsContainer>
                <SubTitle>
                    Frontend E-Diaristas
                </SubTitle>
                <IconsContainer>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                </IconsContainer>
                <Text>
                    Projeto de uma aplicação web para contratação de diaristas, desenvolvido durante a 
                    2° ediçao da semana multi-stack, ultilizando React.JS, Axios, Next.JS e Material-UI
                </Text>
            </ProjectContainer>
            )
        }
        else if (currentSlide == 4){// Backend E-Diaristas
            return(
                <ProjectContainer>
                <IconsContainer>
                    <AiFillGithubStyled/>
                    <AiOutlineGlobalStyled/>
                </IconsContainer>
                <SubTitle>
                    Backend E-Diaristas
                </SubTitle>
                <IconsContainer>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" />
                </IconsContainer>
                <Text>
                    Este projeto é composto por uma API desenvolvida em Python, que trata as requisições do frontend e 
                    possui uma aplicação administrativa feita com Django e Bootstrap em seu desenvolvimeto
                </Text>
            </ProjectContainer>
            )
        }
        else if (currentSlide == 5){
            return(
                <ProjectContainer>
                <IconsContainer>
                    <AiFillGithubStyled/>
                    <AiOutlineGlobalStyled/>
                </IconsContainer>
                <SubTitle>
                    Projeto IES.Cronos
                </SubTitle>
                <IconsContainer>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                </IconsContainer>
                <Text>
                    Este projeto possui uma API desenvolvida em PHP, para tratar as requisições do frontend que 
                    foi desenvolvido com React.JS
                </Text>
            </ProjectContainer>
            )
        }
    }, [currentSlide])


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
                            <img src="img/projects/ProjetoMyPortfolio.jpg"/>
                        </div>
                        <div class="slide">
                            <img src="img/projects/p4.gif"/>
                        </div>
                        <div class="slide">
                            <img src="img/projects/FrontEnd_E-diaristas.jpg"/>
                        </div>
                        <div class="slide">
                            <img src="img/projects/BackEnd_E-diaristas.jpg"/>
                        </div>
                        <div class="slide">
                            <img src="img/projects/p3.jpg"/>
                        </div>
                    </div>
                    <Navigation>
                        <label for="slide1" class="bar" id="lbSlide1" onClick={
                            () => {setCurrentSlide(1);}
                        }></label>
                        <label for="slide2" class="bar" id="lbSlide2" onClick={
                            () => {setCurrentSlide(2);}
                        }></label>
                        <label for="slide3" class="bar" id="lbSlide3" onClick={
                            () => {setCurrentSlide(3);}
                        }></label>
                        <label for="slide4" class="bar" id="lbSlide4" onClick={
                            () => {setCurrentSlide(4);}
                        }></label>
                        <label for="slide5" class="bar" id="lbSlide5" onClick={
                            () => {setCurrentSlide(5);}
                        }></label>
                    </Navigation>
                </Content>
                
                {slide}
                
            </PortfolioComponents>
        </PortfolioStyled>
    )
}


export default Portfolio;

