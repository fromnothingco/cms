import React from "react";
import styled from "styled-components";
import { darken } from "polished";

const DeskTopNav = styled.nav`
  a {
    display: block;
    padding: 0.5rem 2.4rem;
    color: ${props => props.theme.primarynav.color()};
    text-decoration: none;
    text-transform: capitalize;
    &:hover {
      color: ${props => darken(0.1, props.theme.primarynav.color())};
      background: ${props => darken(0.1, props.theme.mast.background())};
    }
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const Navigation = ({ children }) => <DeskTopNav>{children}</DeskTopNav>;

export default Navigation;
