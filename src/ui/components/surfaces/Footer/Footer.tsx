import react from "react";
import {
    FooterStyled,
    FooterContainer,
    FooterTitle,
    AppList,
    FaFacebookSquareStyled,
    FaInstagramStyled
  } from "ui/components/surfaces/Footer/Footer.styled";
  import { Typography, Box } from "@mui/material";
  
  const Footer = () => {
    return (
      <FooterStyled>
        <FooterContainer>
          <Box sx={{ maxWidth: "400px" }}>
            <FooterTitle>Quem Somos</FooterTitle>
            <Typography variant={"body2"} sx={{ mt: 2 }}>
              O help-Diaristas te ajuda a encontrar o profissional perfeito para
              realizar a limpeza de sua casa. Garantiremos os melhores
              profissionais com total segurança e praticidade! São Milhares de
              clientes satisfeitos por todo o pais.
            </Typography>
          </Box>
  
          <div>
            <FooterTitle>Minhas Redes</FooterTitle>
            <AppList>
              <li>
                <a href={"https://www.facebook.com/moises.gomesdasilva.1848"}
                    target={"_blank"} rel={"noopener nereferrer"}>
                  <FaFacebookSquareStyled/>
                </a>
              </li>
              <li>
                <a href={"https://www.instagram.com/moise_sgomes/"}
                 target={"_blank"} rel={"noopener nereferrer"}>
                  <FaInstagramStyled/>
                </a>
              </li>
            </AppList>
          </div>
        </FooterContainer>
      </FooterStyled>
    );
  };
  export default Footer;
  