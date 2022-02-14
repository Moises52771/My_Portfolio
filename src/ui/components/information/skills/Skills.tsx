import React from "react";
import { SkillsContainer, 
         Title,
         BoxSkills,
         Box,
         Lines,
         SiSapStyled,
         SiJavascriptStyled,
         SiTypescriptStyled,
         SiCss3Styled,
         SiHtml5Styled,
         SiReactStyled,
         SiNodedotjsStyled,
         SiPythonStyled,
         SiPhpStyled,
         SiMysqlStyled

        } from "./Skills.styles";


const Skills = () => {
    return (
        <SkillsContainer>
            <Title>
                Skills
            </Title>
            <BoxSkills>
                <Lines>
                    <Box>
                        <SiTypescriptStyled/>
                        <h3>
                            TypeScript
                        </h3>
                    </Box>
                    <Box>
                        <SiJavascriptStyled/>
                        <h3>
                            JavaScript
                        </h3>
                    </Box>
                    <Box>
                        <SiHtml5Styled/>
                        <h3>
                            HTML 5
                        </h3>
                    </Box>
                    <Box>
                        <SiCss3Styled/>
                        <h3>
                            CSS 3
                        </h3>
                    </Box>
                    <Box>
                        <SiReactStyled/>
                        <h3>
                            ReactJS
                        </h3>
                    </Box>
                </Lines>
                <Lines>
                    <Box>
                        <SiNodedotjsStyled/>
                        <h3>
                            NodeJS
                        </h3>
                    </Box>
                    <Box>
                        <SiPythonStyled/>
                        <h3>
                            Python
                        </h3>
                    </Box>
                    <Box>
                        <SiPhpStyled/>
                        <h3>
                            PHP
                        </h3>
                    </Box>
                    <Box>
                        <SiMysqlStyled/>
                        <h3>
                            MySQL
                        </h3>
                    </Box>
                    <Box>
                        <SiSapStyled/>
                        <h3>
                            SAP - ABAP
                        </h3>
                    </Box>
                </Lines>
               
            </BoxSkills>
        </SkillsContainer>
    )
}

export default Skills;