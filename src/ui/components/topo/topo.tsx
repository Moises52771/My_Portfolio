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
                <TopTitle>Olá, sou Moisés Gomes</TopTitle> 
                <SubTitle>Desenvolvedor Full Stack <FcMultipleDevicesStyled/></SubTitle> 
                <Text>
                    Seja muito bem vindo!<br/>
                    Se está em busca de um DEV com muita garra, vontade de 
                    aprender e evoluir a cada dia mais, para agregar em seu time,
                     encontrou a pessoa certa!
                </Text>
                <ButtonStyled href={"https://wa.me/5511954642820"}><>Contate-me</>&nbsp;&nbsp;&nbsp;<RiSendPlane2Line/></ButtonStyled>
            </Div>          
            <AvatarStyled src={'img/perfil1.jpg'}/>
                           
        </PageTopStyled>
    )
}

export default PageTitle;