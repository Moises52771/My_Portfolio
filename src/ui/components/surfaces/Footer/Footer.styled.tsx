import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

export const FooterStyled = styled("footer")`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  margin-top: auto;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const FooterTitle = styled((props) => (
  <Typography component={"h2"} variant={"body2"} {...props} />
))`
  font-weight: bold;
`;

export const AppList = styled("ul")`
  display: flex;
  list-style-type: none;
  padding: 0;
  gap: ${({ theme }) => theme.spacing()};
  img {
    width: 122px;
  }
`;


export const FaInstagramStyled = styled(FaInstagram)`
  width: 50px;
  height: 50px;
`;

export const FaFacebookSquareStyled = styled(FaFacebookSquare)`
  width: 50px;
  height: 50px;
`;