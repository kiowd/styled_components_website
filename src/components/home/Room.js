import React from "react";
import styled from "styled-components";
import { setColor, setShadow, setTransition } from "../../styles";


const Room = ({ room, className }) => {
  const { img = "", title = "", info = "", price = 0 } = room;

  return (
    <article className={className}>
      <div className="img-container">
        <img src={img} alt="room " />
        <div className="price">£{price}</div>
      </div>
      <div className="room">
        <h4>{title}</h4>
        <p>{info}</p>
      </div>
    </article>
  );
};


export default styled(Room)`
background: #fff;
margin: 2rem 0;
.img-container{
background: #ccc;
position: relative;
}
img{
width: 100%;
display: block;
${setTransition}

}
&:hover img{
  opacity: 0.5;
}


`;

