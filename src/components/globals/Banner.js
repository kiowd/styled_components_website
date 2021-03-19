import React from "react";
import styled from "styled-components";
import { RiArrowDownCircleFill } from "react-icons/ri";
import { Infinite } from "../../styles";

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
          <RiArrowDownCircleFill/>
        </FaColor>  
      </div>
    </BannerWrapper>
    
    
  );
};

const FaColor = styled.div`
  color: papayawhip;
  margin-top: 9px;
  ${Infinite('infinite', '1.5', '2',' 1.5')}
`

const BannerWrapper = styled.div`
  background:  rgba(0,0,0,0.7);
  text-align: center;
  padding: 33px 25px;
  margin: 5px;
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
    font-size: 1rem;
    
  }
  h1{
    font-size: 2.5rem;

  }

`}

@media (max-width: 768px){
width: 100vw;
border: 2px solid ${setColor.primaryColor};

p{
  width: 100%;
  font-size: 12px;

}
h1{
  font-size: 1.5rem;
}
}

h1{
  ${fadeIn('X', '-100%', '10%', '0')}
}
.info{
  ${fadeIn('Y', '100%', '-50%', '0')}
}

`;

export default Banner;
