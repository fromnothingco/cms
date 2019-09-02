import React from "react";
import styled from "styled-components";

const Mast = styled.section`
  position: fixed;
  background: ${props => props.theme.mast.background() || "#fff"};
  justify-content: center;
  align-items: center;
  z-index: 1;
  nav ul {
    list-style: none;
    padding: 0;
    marign: 0;
    display: flex;

    li {
      margin: 0 0.5rem;
    }
  }
  ${props => {
    console.log(props);
    return props.sidebar
      ? `
      height: 100%;
      nav {
        padding: 2rem;
        ul {
          flex-direction: column;
        }
      }
      @media(max-width:500px){
        height: auto;
        width: 100%;
        nav {
          padding: 0;
          ul {
            flex-direction: row;
          }
        }
      }
   `
      : null;
  }}
`;

const MastComponent = props => <Mast {...props}>{props.children}</Mast>;

export default MastComponent;
