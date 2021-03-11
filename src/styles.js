import styled, { css, keyframes } from "styled-components";

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `
    display: flex;
    justify-content: ${x};
    align-items: ${y};
`;
};

export const setBackground = ({
  img = "https://images.unsplash.com/photo-1550680505-870b6d594489?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTg2fHwxOTIwJTIweCUyMDEwODB8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  color = "rgba(0,0,0,0)"
} = {}) => {
  return `
background: linear-gradient(${color}, ${color}),
url(${img}) center/cover fixed no-repeat;
`;
};

export const setColor = {
  primaryColor: "#af9a7d",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7"
};

export const screen ={
  
    phone: (...args) => {
      const styles = args;

      return `@media (min-width:567px){
        ${styles};
    } `;
    }
  };

export const fadeIn = (direction, start, point, end) => {
  const animation = keyframes `

  0%{
    opacity: 0;
    transform:translate${direction}(${start})
  }
  50%{
    opacity: 0.5;
    transform:translate${direction}(${point})
  }
  100%{
    opacity: 1;
    transform:translate${direction}(${end})
  }
  
  `
  return css ` animation:${animation} 3s ease-in-out; `;
}

export const setTransition = ({property='all', time='0.3s', timing='ease-in-out'}= {}) => {
    return `transition:${property} ${time} ${timing}`
}

export const setShadow = {
  light:'box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);',
  dark:'box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);',
  darkest:'box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);',
}

// window.sr = ScrollReveal();
// sr.reveal('.aim');