import React from "react";
import config from "../../api.config";
import { Link } from "react-router-dom";
import Mast from "../components/generics/mast";

const Layout = ({ children }) => {
  const nav = Object.keys(config.endpoints).map(item => {
    return config.endpoints[item].endpoint;
  });
  return (
    <>
      <Mast sidebar={true}>
        <nav>
          <div className="branding">StyleGuide</div>
          <ul>
            {nav.map(item => (
              <li>
                <Link to={item}>{item.replace("/", "")}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Mast>
      <div className="content">{children}</div>
    </>
  );
};

export default Layout;
