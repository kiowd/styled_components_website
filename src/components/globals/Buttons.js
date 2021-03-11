import styled from "styled-components";
import { setColor, setTransition } from "../../styles";

export const PrimaryBtn = styled.button`
display: inline-block;
background: steelblue;
color: #fff;
text-transform: capitalize;
font-size: 1.2rem;
padding: 0.7rem 0.7rem;
${props => `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`};
border-color: ${setColor.primaryColor};
outline: none;
letter-spacing: 0.2rem;
${setTransition()};
&:hover{
background: transparent;
color: ${setColor.primaryColor};
}
text-decoration: none;
cursor: pointer;

`

export const SmallBtn = styled(PrimaryBtn)`
padding: 0.4rem;


` 