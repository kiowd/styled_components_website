import React from "react";
import styled from "styled-components";
import { setFlex } from "../../styles";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterestSquare,
  FaLaptopCode,
  
} from "react-icons/fa";

const Footer = ({className}) => {
  return (
    <section className={className}>
      
      <h4>Let's get Social</h4>
      <div>
      <FaFacebookSquare className='fa'/>
      <FaInstagram className='fa'/>
      <FaTwitter className='fa'/>
      <FaPinterestSquare className='fa'/>
      </div>
      <hr />
      <div className='laptop'><FaLaptopCode className='fa'/> <h4>with styled components</h4></div>
      
    </section>
  );
};

export default styled(Footer)`
background: #000;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
.fa{
font-size: 2rem;
color: white;
margin: 1rem;
}
.laptop{
  ${setFlex()}
}
hr{
 width: 30vw;
 opacity: 0.5;
}

`;