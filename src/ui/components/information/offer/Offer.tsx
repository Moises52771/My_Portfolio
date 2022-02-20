import React from "react";
import { OfferContainer, 
         Title,
         BoxOffer,
         Box,
         Lines,
         FaLaptopCodeStyled,
         FiSmartphoneStyled,
         AiFillCodeStyled

        } from "./Offer.styles";


const Offer = () => {
    return (
        <OfferContainer>
            <Title>
                O que ofereço
            </Title>
            <BoxOffer>
                <Lines>
                    <Box>
                        <AiFillCodeStyled/>
                        <h3>
                            Programação de Desktop
                        </h3>
                    </Box>
                    <Box>
                        <FaLaptopCodeStyled/>
                        <h3>
                            Desenvolvimento <br/> Web
                        </h3>
                    </Box>
                    <Box>
                        <FiSmartphoneStyled/>
                        <h3>
                            Desenvolvimento Mobile
                        </h3>
                    </Box>
                    
                </Lines>
               
            </BoxOffer>
        </OfferContainer>
    )
}

export default Offer;