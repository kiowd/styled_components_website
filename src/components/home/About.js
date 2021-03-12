import React from "react";
import styled from "styled-components";
import Section from "../globals/Section";
import Title from "../globals/Title";
import hdmiExtend from "../../images/hdmiExtend.jpg";
import {PrimaryBtn} from "../globals/Buttons";
import { setColor } from "../../styles";

const About = () => {
  return (
    <>
      <Section>
        <AboutCenter>
          <div className="about-img">
            <img src='https://images.unsplash.com/photo-1589884629038-b631346a23c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvcmslMjBmcm9tJTIwaG9tZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="cable" />
          </div>
          <div className="about-info">
            <Title title="about us"></Title>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour,
              or non-characteristic words etc.
            </p>
            <PrimaryBtn>Read More</PrimaryBtn>
          </div>
        </AboutCenter>
      </Section>
    </>
  );
};
export default About;

const AboutCenter = styled.div`
.about-img, .about-info {
  padding: 2rem;
}

.about-img {
  img{
    width: 100%;
    display: block;
    border: 0.5rem solid ${setColor.mainGrey};

  }

}

.about-info {
  p {
    letter-spacing: 2px;
    font-weight: 600;
    margin: 1rem 0;
    
  }

}

width: 90vw;
margin: 0 auto;
@media (min-width: 1281px){
width: 100vw;
max-width: 1200px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-column-gap: 2rem;
.about-img {
align-self: center;
}
.about-info{
  p{
    width: 90%;
  }
}


}


`;
