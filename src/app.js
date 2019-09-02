import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateEdit from "./pages/editCreate";
import List from "./pages/list";
import Home from "./pages/home";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./style/theme";
import { darken } from "polished";

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    height:100%;
  }
  body {
    background: ${props => props.theme.colors.light};
    font-family: ${props => props.theme.main.font || "sans-serif"};
    color: ${props => props.theme.main.color || "#333"};
    padding:0;
    margin: 0;
    line-height: 160%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    font-size: ${props => props.theme.main.baseFontSize || "16px"};
  }

  * {
    box-sizing:border-box;
  }

  a {
    color: ${props => props.theme.links.color || "999"};
    &:hover {
      color: ${props => darken(0.2, props.theme.links.color())};
    }
  }

  .content {
    margin-left: 200px;
    padding:2rem;
  }

  @media(max-width: 500px){
    .content {
      padding-top:80px;
      width: 100%;
      margin:0;
    }
  } 
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/:type" exact component={List} />
        <Route path="/:type/new" exact component={CreateEdit} />
        <Route path="/:type/edit/:id" exact component={CreateEdit} />
      </Router>
    </>
  );
};

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
