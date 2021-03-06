import { styled } from "@mui/material/styles";

export const AppContainer = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.paper};

  ${props => props.theme.breakpoints.down('md')}{
      width: 150vw;
    }
`;



