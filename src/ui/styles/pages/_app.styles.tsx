import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { WiDaySunny } from 'react-icons/wi'
import { FaMoon } from 'react-icons/fa'

export const AppContainer = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const BoxSwitch = styled(Button)`
  position: fixed;
  right: 20px;
  top: 120px;
`

export const WiDaySunnyStyled = styled(WiDaySunny)`
  width: 25px;
  height: 25px;
  color: ${props => props.theme.palette.grey[100]}
`

export const FaMoonStyled = styled(FaMoon)`
  width: 25px;
  height: 25px;
  color: ${props => props.theme.palette.grey[900]}
`

