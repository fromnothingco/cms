import React from "react";
import config from "../../api.config";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const nav = Object.keys(config.endpoints).map(item => {
    return config.endpoints[item].endpoint;
  });
  return (
    <>
      <nav>
        {nav.map(item => (
          <li>
            <Link to={item}>{item.replace("/", "")}</Link>
          </li>
        ))}
      </nav>
      <div className="content">{children}</div>
    </>
  );
};

export default Layout;
