import React from "react";
import { MdFileDownload} from "react-icons/md";
import { BiographyContainer, 
         Title, 
         Text, 
         Feedback, 
         Icons, 
         FaLaptopCodeStyled, 
         BsHeadsetStyled,
         RiMedalLineStyled,
         ButtonStyled
        } from "./biography.styles";


const Biography = () => {
    return(
        <BiographyContainer>
            <Title>
                Sobre mim
            </Title>
            <Text>
                Sempre fui apaixonado por tecnologia. Assim que conheci o mundo
                do desenvolvimento, decidi mergulhar de cabeça e me aprofundar a 
                cada dia mais. Hoje, em conjunto com a faculdade, sempre me desafio 
                com novos projetos, buscando me manter sempre atualizado com as novas 
                tecnologias e tendencias do mercado.
            </Text>
            <Feedback>
                <Icons>
                    <BsHeadsetStyled/>
                    <div>
                        Disponivel para contato 24h por dia 7 dias por semana
                    </div>
                </Icons>
                <Icons>
                    <FaLaptopCodeStyled/>
                    <div>
                        + de 5 projetos completos 
                    </div>
                </Icons>
                <Icons>
                    <RiMedalLineStyled/>
                    <div>
                        Muitos desafios vencidos ao longo desses 3 anos de aprendizado
                    </div>
                </Icons>
            </Feedback>
            <ButtonStyled href={'img/Moises Gomes da Silva CV.pdf'}>
                Baixar Curriculo &nbsp;&nbsp;<MdFileDownload/>
            </ButtonStyled>
        </BiographyContainer>
    )
}


export default Biography;