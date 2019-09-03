import React from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";
const Mast = styled.section`
  position: fixed;
  width: 100%;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
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
  a {
    display: block;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    margin: 4px;
    text-decoration: none;
    color: ${props => props.theme.mast.nav.color};
    &: hover {
      border-radius: 5px;
      background: ${props => darken(0.04, props.theme.mast.background())};
      color: ${props => props.theme.mast.nav.color};
    }
    &.active {
      border-radius: 5px;
      background: ${props => lighten(0.04, props.theme.mast.background())};
      color: ${props => props.theme.mast.nav.color};
    }
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
