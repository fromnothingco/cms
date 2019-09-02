import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateEdit from "./pages/editCreate";
import List from "./pages/list";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./style/theme";
import { darken } from "polished";

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    height:100%;
  }
  body {
    background: #fff;
    font-family: ${props => props.theme.main.font || "sans-serif"};
    color: ${props => props.theme.main.color || "#333"};
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
    padding: 2rem;
    width:80%;
    margin: 0 auto;
    overflow-x: auto;
  }

  .sidebar {
    padding: 2rem;
    background: #000;
  }

  .main {
    height:100%;
    .content {
      flex:5;
    }
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Route path="/" exact component={CreateEdit} />
        <Route path="/:type" exact component={List} />
        <Route path="/:type/new" exact component={CreateEdit} />
        <Route path="/:type/edit/:id" exact component={CreateEdit} />
      </Router>
    </div>
  );
};

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
