import React from "react";
import styled from "styled-components";
import { FaAngleDoubleDown } from "react-icons/fa";
import { setFlex } from "../../styles";

import { setColor, screen, fadeIn } from "../../styles";

const Banner = ({ title, greeting, text, children }) => {
  return (
    <BannerWrapper>
      <h1>
        {greeting}
        <span>{title}</span>
      </h1>
      <div className="info">
        <p>{text}</p>
        {children}
        <FaColor>
          <FaAngleDoubleDown/>
        </FaColor>  
      </div>
    </BannerWrapper>
  );
};

const FaColor = styled.div`
  color: royalblue;
  margin-top: 7px;
  font-size: 30px;
`

const BannerWrapper = styled.div`
  background:  rgba(0,0,0,0.7);
  text-align: center;
  padding: 33px 25px;
  margin: 65px;
  letter-spacing: 3px;
  border: 5px solid ${setColor.primaryColor};
  
  p{
    color: whitesmoke;
    width: 85%;
    margin: 0 auto;
  }
  h1 {
    margin: 25px 7px;
    color: ${setColor.primaryColor};
  }
  span {
    color: orangered;
  }

${screen.phone `
  width: 70vw; 

  p{
    width: auto;
    
  }

`}

/* @media (min-width: 768px){
width: 70vw;
border: 5px solid ${setColor.primaryColor};

p{
  width: 65%;
  color: mediumseagreen;
}

} */

h1{
  ${fadeIn('X', '-100%', '10%', '0')}
}
.info{
  ${fadeIn('Y', '100%', '-50%', '0')}
}

`;

export default Banner;
