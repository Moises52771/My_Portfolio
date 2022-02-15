import React from "react";
import { RiSendPlane2Line } from "react-icons/ri"
import { PageTopStyled, 
         AvatarStyled, 
         TopTitle, 
         SubTitle, 
         Text, 
         ButtonStyled,
         FcMultipleDevicesStyled,
         Div
        } from "./topo.styles";


const PageTitle = () => {

    return(
        <PageTopStyled>
            <Div>
                <TopTitle>Olá, sou Moises Gomes</TopTitle> 
                <SubTitle>Desenvolvedor Full Stack <FcMultipleDevicesStyled/></SubTitle> 
                <Text>
                    Seja muito bem vindo, se está em busca
                    de um DEV para seu time com muita garra e vontade de 
                    aprender a cada dia mais, achou a pessoa certa!
                </Text>
                <ButtonStyled href={"https://www.linkedin.com/in/moisesgomesdev52771"}><>Contate-me</>&nbsp;&nbsp;&nbsp;<RiSendPlane2Line/></ButtonStyled>
            </Div>          
            <AvatarStyled/>
                           
        </PageTopStyled>
    )
}

export default PageTitle;