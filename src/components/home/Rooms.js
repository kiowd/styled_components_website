import React, {useState} from 'react';
import styled from "styled-components";
import Section from "../globals/Section";
import Title from "../globals/Title";
import roomsData from './rooms-data';
import Room from './Room';

const Rooms = () => {
  const [rooms] = useState(roomsData);
  return(

    <Section color='#f7f7f7'>
      <Title title="our rooms" center></Title>
      <RoomsCenter>
        {rooms.map(room => {
          return <Room key={room.id} room={room}/>
        })}
        </RoomsCenter>
    </Section>

  );
}

const RoomsCenter = styled.div`
width: 90vw;
margin: 0 auto;
@media (min-width: 1281px){
  width: 100vw;
  max-width: 1200px;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(360px,1fr));
grid-column-gap: 2rem;
}
`

export default Rooms;