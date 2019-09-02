import React from "react";
import styled from "styled-components";
import { lighten } from "polished";
const Table = styled.table`
  width: 100%;
  background: #fff;
  border-radius: 5px;
  border-collapse: collapse;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
  th,
  td {
    padding: 0.5rem 1rem;
    text-align: left;
    text-transform: capitalize;
  }

  tbody tr:hover {
    background: ${props => lighten(0.35, props.theme.colors.primary)};
    border-radius: 5px;
  }

  a {
    display: block;
    text-decoration: none;
    color: ${props => props.theme.colors.dark};
    &:hover {
      color: ${props => props.theme.colors.dark};
    }
  }
`;

export default Table;
