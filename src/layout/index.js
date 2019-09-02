import React from "react";
import config from "../../api.config";
import { Link } from "react-router-dom";
import Mast from "../components/generics/mast";
import Menu from "../components/generics/navigation";

const nav = Object.keys(config.endpoints).map(item => {
  return config.endpoints[item].endpoint;
});

const NavigationItems = props => {
  const menuToggle = e => {
    if (typeof props.closeMenu === "function") {
      props.closeMenu(false);
      return true;
    }
  };
  return (
    <nav className={props.className}>
      <ul>
        {nav.map(item => (
          <li>
            <Link to={item} onClick={menuToggle}>
              {item.replace("/", "")}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <Mast sidebar={true}>
        <div className="branding">StyleGuide</div>

        <Menu>
          <NavigationItems />
        </Menu>
      </Mast>
      <div className="content">{children}</div>
    </>
  );
};

export default Layout;
