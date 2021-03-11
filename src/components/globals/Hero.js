import styled from "styled-components";
import laptop from "../../images/laptop.jpg";
import estate from "../../images/estate.jpg";
import { setFlex, setBackground } from "../../styles";

const Hero = styled.header`
  min-height: 100vh;
  ${setFlex()}
  ${setBackground({img: estate})}
`;

export default Hero;
