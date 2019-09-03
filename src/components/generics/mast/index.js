import React from "react";
import styled from "styled-components";
import { darken } from "polished";
const Mast = styled.section`
  position: fixed;
  width: 100%;
  background: ${props => props.theme.mast.background() || "#fff"};
  align-items: center;
  z-index: 1;
  .branding {
    padding: 1rem;
    flex: 1;
    color: ${props => props.theme.colors.light};
  }
  nav {
    flex: 6;
    ul {
      list-style: none;
      padding: 0;
      marign: 0;
      display: flex;
    }
  }
  display: flex;
  nav {
  }
  .mobile-control {
    padding: 1rem;
  }
  .branding {
    background: none;
  }
`;

const MastComponent = props => <Mast {...props}>{props.children}</Mast>;

export default MastComponent;
