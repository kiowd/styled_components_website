import React from "react";
import styled from 'styled-components';


const Title = ({className, title, center}) => {
  return (
    <h3 className={className}>
      {title}    
    </h3>
  )
}
export default styled(Title)`
font-size: 2rem;
text-transform: capitalize;
letter-spacing: 0.3rem;
text-align: ${props => props.center ? 'center' : 'left'}

`;