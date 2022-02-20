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
         TextBox,
         H3,
         H3Text
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
                            <H3>E-Mail</H3>
                        </TitleBox>
                        <TextBox>
                            <H3Text>moises.dev52771@gmail.com</H3Text>
                        </TextBox>
                    </Div>
                    <Div>  
                        <TitleBox>                      
                            <FiSmartphoneStyled/>&nbsp;&nbsp;&nbsp;&nbsp;
                            <H3>Cel. &nbsp;&nbsp;&nbsp;</H3>
                        </TitleBox>
                        <TextBox>
                            <H3Text>(11) 95464-2820</H3Text>
                        </TextBox>
                    </Div>
                    <Div>
                        <TitleBox>
                            <GoLocationStyled/>&nbsp;&nbsp;&nbsp;&nbsp;
                            <H3></H3>
                        </TitleBox>
                        <TextBox>
                        <H3Text>São Paulo - SP</H3Text>
                        </TextBox>
                    </Div>
                </BoxContact>
            </ContactContainer>
        </ContactStyled>
    )
}


export default Contact