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
                Sempre fui apaixonado por tecnologia, assim que conheci o mundo
                do desenvolvimento descidi mergulhar de cabeça e me aprofundar a 
                cada dia mais. Hoje em conjunto com a faculdade, busco me desafiar 
                com novos projetos, sempre buscando me manter atualizado com as novas 
                tecnologias e tendencias do mercado
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
            <ButtonStyled href={'img/cv.pdf'}>
                Baixar Curriculo &nbsp;&nbsp;<MdFileDownload/>
            </ButtonStyled>
        </BiographyContainer>
    )
}


export default Biography;