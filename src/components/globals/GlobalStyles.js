import styled, { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Ballet&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Redressed&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Courgette|Lato:400,700');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  }  

h1 {
    font-family: 'Ballet', cursive;
    color: cadetblue;
    font-size: 3em;
  }
h2{
  font-family: 'Courgette', cursive;
  color: PaleVioletRed;
  font-size: 2em;
  }
  h4 {
    font-family: 'Redressed', cursive;
     

  }
p {
    font-family: 'Lato', sans-serif;
    line-height:1.2;
    color: #222;
    font-size: 100%;
    margin-bottom: 2em;
    
    
  }
`;

export default Globals;
