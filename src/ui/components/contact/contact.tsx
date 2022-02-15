import { Box } from "@mui/system";
import React from "react";
import { FaInstagramStyled } from "../surfaces/Footer/Footer.styled";
import { ContactStyled, 
         Title, 
         ContactContainer,
         BoxContact,
         MdAlternateEmailStyled,
         GoLocationStyled,
         FiSmartphoneStyled,
         Div,
         TitleBox,
         TextBox
        } from "./contact.styles";


const Contact: React.FC = () => {

    return(
        <ContactStyled>
            <Title>
                Contatos
            </Title>
            <ContactContainer>
                <BoxContact>
                    <Div>
                        <TitleBox>
                            <MdAlternateEmailStyled/>&nbsp;&nbsp;&nbsp;&nbsp;
                            <h3>E-Mail</h3>
                        </TitleBox>
                        <TextBox>
                            <h3>moises.dev52771@gmail.com</h3>
                        </TextBox>
                    </Div>
                    <Div>  
                        <TitleBox>                      
                            <FiSmartphoneStyled/>&nbsp;&nbsp;&nbsp;&nbsp;
                            <h3>Cel. &nbsp;&nbsp;&nbsp;</h3>
                        </TitleBox>
                        <TextBox>
                            <h3>(11) 95464-2820</h3>
                        </TextBox>
                    </Div>
                    <Div>
                        <TitleBox>
                            <GoLocationStyled/>&nbsp;&nbsp;&nbsp;&nbsp;
                            <h3>Localização</h3>
                        </TitleBox>
                        <TextBox>
                        <h3>São Paulo - SP</h3>
                        </TextBox>
                    </Div>
                </BoxContact>
            </ContactContainer>
        </ContactStyled>
    )
}


export default Contact