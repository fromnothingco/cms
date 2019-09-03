import React from "react";
import styled from "styled-components";
import { darken } from "polished";
const SideBar = styled.section`
  height: 100%;
  width: 100%;
  max-width: 200px;
  position: fixed;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.sidebar.background() || "#fff"};
  align-items: center;
  nav {
    ul {
      flex-direction: column;
    }
  }
  a {
    display: block;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.5srem 1rem;
    color: ${props => props.theme.sidebar.nav.color};
    &: hover {
      background: ${props => darken(0.04, props.theme.sidebar.background())};
      color: ${props => props.theme.sidebar.nav.color};
    }
  }
  @media (max-width: 500px) {
    display: none;
  }

  z-index: 0;
  .branding {
    padding: 1rem;
    color: ${props => props.theme.colors.light};
    background: ${props => darken(0.05, props.theme.colors.primary)};
  }
  nav ul {
    list-style: none;
    padding: 0;
    marign: 0;
    display: flex;
  }
`;

const SideBarComponent = props => (
  <SideBar className="sideBar" {...props}>
    {props.children}
  </SideBar>
);

export default SideBarComponent;
