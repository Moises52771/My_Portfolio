import React from "react";
import { RiSendPlane2Line } from "react-icons/ri"
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
                    de um DEV para seu time com muita garra e vontade de 
                    aprender a cada dia mais, achou a pessoa certa!
                </Text>
                <ButtonStyled><>Contate-me</>&nbsp;&nbsp;&nbsp;<RiSendPlane2Line/></ButtonStyled>
            </div>          
            <AvatarStyled src={'img/Perfil.jpg'}/>
                           
        </PageTopStyled>
    )
}

export default PageTitle;