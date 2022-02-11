import React from "react";
import { PageTopStyled, 
         AvatarStyled, 
         TopTitle, 
         SubTitle, 
         Text, 
         ButtonStyled,
        } from "./topo.styles";


const PageTitle = () => {
    return(
        <PageTopStyled>
            <div>
                <TopTitle>Olá, sou Moises Gomes</TopTitle> 
                <SubTitle>Desenvolvedor Full Stack</SubTitle> 
                <Text>
                    Seja muito bem vindo, se está em busca
                    de um dev com muita garra e vontade de 
                    aprender achou a pessoa certa!
                </Text>
                <ButtonStyled>Contate-me </ButtonStyled>
            </div>          
            <AvatarStyled src={'img/Perfil.jpg'}/>
                           
        </PageTopStyled>
    )
}

export default PageTitle;