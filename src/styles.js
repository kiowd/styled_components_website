import styled, { css, keyframes } from "styled-components";

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `
    display: flex;
    justify-content: ${x};
    align-items: ${y};
`;
};

export const setBackground = ({
  img = "https://images.unsplash.com/photo-1470016342826-876ea880d0be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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