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
         AiOutlineGlobalStyled,
         IoIosArrowBackStyled,
         IoIosArrowForwardStyled,
         Div
       } from "./Portifolio.styles";
import { useState } from "react";  
    

  

const Portfolio = () =>{

    const [currentSlide, setCurrentSlide] = useState(1);



    // O IF verifica se a pagina ja carregou totalemnte para evitar erros no NextJS
    if (typeof window !== "undefined") {

        // --------------------------- Indentifica o slide atual ----------------------------------------
        
    
        if (currentSlide == 1) {
                checked(currentSlide);                                
                document.getElementById("lbSlide1").style.backgroundColor = '#f3f3f3';
                document.getElementById("lbSlide2").style.backgroundColor = '#414141';
                document.getElementById("lbSlide3").style.backgroundColor = '#414141';
                document.getElementById("lbSlide4").style.backgroundColor = '#414141';
                document.getElementById("lbSlide5").style.backgroundColor = '#414141';    
                     
        }     
        
    
        if (currentSlide == 2) {
                checked(currentSlide);    
                document.getElementById("lbSlide1").style.backgroundColor = '#414141';
                document.getElementById("lbSlide2").style.backgroundColor = '#f3f3f3';
                document.getElementById("lbSlide3").style.backgroundColor = '#414141';
                document.getElementById("lbSlide4").style.backgroundColor = '#414141';
                document.getElementById("lbSlide5").style.backgroundColor = '#414141';                 
                 
        }
    
        if (currentSlide == 3) {
                checked(currentSlide);        
                document.getElementById("lbSlide1").style.backgroundColor = '#414141';
                document.getElementById("lbSlide2").style.backgroundColor = '#414141';
                document.getElementById("lbSlide3").style.backgroundColor = '#f3f3f3';
                document.getElementById("lbSlide4").style.backgroundColor = '#414141';
                document.getElementById("lbSlide5").style.backgroundColor = '#414141';
                  
        }
    
        if (currentSlide == 4) {
                checked(currentSlide);           
                document.getElementById("lbSlide1").style.backgroundColor = '#414141';
                document.getElementById("lbSlide2").style.backgroundColor = '#414141';
                document.getElementById("lbSlide3").style.backgroundColor = '#414141';
                document.getElementById("lbSlide4").style.backgroundColor = '#f3f3f3';
                document.getElementById("lbSlide5").style.backgroundColor = '#414141';                
                
        }
    
        if (currentSlide == 5) {
                checked(currentSlide);       
                document.getElementById("lbSlide1").style.backgroundColor = '#414141';
                document.getElementById("lbSlide2").style.backgroundColor = '#414141';
                document.getElementById("lbSlide3").style.backgroundColor = '#414141';
                document.getElementById("lbSlide4").style.backgroundColor = '#414141';
                document.getElementById("lbSlide5").style.backgroundColor = '#f3f3f3';

                
        }
        //------------------------------------------------------------------------------------------------
        
        function checked (value) {
            if(value == 1){
                document.getElementById("slide1").checked = true;
            }
            else if(value == 2){
                document.getElementById("slide2").checked = true;
            }
            else if(value == 3){
                document.getElementById("slide3").checked = true;
            }
            else if(value == 4){
                document.getElementById("slide4").checked = true;
            }
            else if(value == 5){
                document.getElementById("slide5").checked = true;
            }
        }
        
    }


    //----------- Escolhe o conteudo dos slides -----------------------------------------------------------
    const slide = useMemo(() => {// Projeto My Portfolio

        
        if (currentSlide == 1){// Projeto com nodeJS ......
            
            return(
                <ProjectContainer>
                <IconsContainer>
                        <a href={'https://github.com/Moises52771/API_Filmes.git'} target={"_blank"}>
                            <AiFillGithubStyled/>
                        </a>
                        <a>
                            <AiOutlineGlobalStyled/>  
                        </a>
                </IconsContainer>
                <SubTitle>
                    API de Filmes com NodeJS
                </SubTitle>
                <IconsContainer>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
                </IconsContainer>
                <Text>
                    API de Filmes desenvolvida com Node.JS, Express.JS, TypeORM e PostegreSQL. 
                    O projeto não possui um frontend, mas no repositório do GitHub existe a documentação
                    de como ultiliza-lo
                </Text>
            </ProjectContainer>
            )
        }
        else if (currentSlide == 2){// Projeto IES.Cronos
            
            return(
                <ProjectContainer>
                <IconsContainer>
                        <a href={'https://github.com/Moises52771/IES.Cronos'} target={"_blank"}>
                            <AiFillGithubStyled/>
                        </a>
                        <a>
                            <AiOutlineGlobalStyled/>  
                        </a>
                </IconsContainer>
                <SubTitle>
                    Projeto IES.Cronos
                </SubTitle>
                <IconsContainer>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                </IconsContainer>
                <Text>
                    Projeto de uma aplicação para gestão de horarios de uma instituição de ensino,
                     possui uma API desenvolvida em PHP, que trata as varias requisições do frontend
                      desenvolvido com React.JS e Axios
                </Text>
            </ProjectContainer>
            )
        }
        else if (currentSlide == 3){// Projeto My Portfolio
            
            return(
                <ProjectContainer>
                    <IconsContainer>
                        <a href={'https://github.com/Moises52771/My_Portfolio'} target={"_blank"}>
                            <AiFillGithubStyled/>
                        </a>
                        <a>
                            <AiOutlineGlobalStyled/>  
                        </a>
                        
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
                        Projeto do meu portifolio pessoal desenvolvido com um layout responsivo
                        ultilizando React.JS, Next.JS e Material-UI em seu design
                    </Text>
                </ProjectContainer>
            )
        }
        else if (currentSlide == 4){// Frontend E-Diaristas
            
            return(
                <ProjectContainer>
                <IconsContainer>
                        <a href={'https://github.com/Moises52771/Frontend_E-Diaristas'} target={"_blank"}>
                            <AiFillGithubStyled/>
                        </a>
                        <a>
                            <AiOutlineGlobalStyled/>  
                        </a>
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
                    2° edição da semana multi-stack, ultilizando React.JS, Axios, Next.JS e Material-UI
                </Text>
            </ProjectContainer>
            )
        }
        else if (currentSlide == 5){// Backend E-Diaristas
            
            return(
                <ProjectContainer>
                <IconsContainer>
                        <a href={'https://github.com/Moises52771/Backend_E-Diaristas'} target={"_blank"}>
                            <AiFillGithubStyled/>
                        </a>
                        <a>
                            <AiOutlineGlobalStyled/>  
                        </a>
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
    }, [currentSlide])


    return(
            
        
        <PortfolioStyled>
            <Title>
                Portifolio
            </Title>
            <PortfolioComponents>
                <Div>
                    <IoIosArrowBackStyled onClick={
                        () => {
                            setCurrentSlide(
                                currentSlide < 6 && currentSlide > 1 ? currentSlide - 1 : currentSlide
                            );
                        }
                    }/>
                    <Content>
                        <div class="slides">
                            <input type="radio" name="slide" id="slide1"/>
                            <input type="radio" name="slide" id="slide2"/>
                            <input type="radio" name="slide" id="slide3"/>
                            <input type="radio" name="slide" id="slide4"/>
                            <input type="radio" name="slide" id="slide5"/>


                            <div class="slide s1">
                                <img src="img/projects/API_Filmes.jpg"/>
                            </div>
                            <div class="slide">
                                <img src="img/projects/ProjetoIES.Cronos.jpg"/>
                            </div>
                            <div class="slide">
                                <img src="img/projects/ProjetoMyPortfolio.jpg"/>
                            </div>
                            <div class="slide">
                                <img src="img/projects/FrontEnd_E-diaristas.jpg"/>
                            </div>
                            <div class="slide">
                                <img src="img/projects/BackEnd_E-diaristas.jpg"/>
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
                    <IoIosArrowForwardStyled onClick={
                        () => {
                            setCurrentSlide(
                                currentSlide < 5 && currentSlide > 0 ? currentSlide + 1 : currentSlide 
                            )
                        }
                    }/>
                </Div>
                
                {slide}
                
            </PortfolioComponents>
        </PortfolioStyled>
    )
}

export default Portfolio;


