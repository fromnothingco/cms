import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { darken } from "polished";
const MobileControl = styled.span`
  font-size: 1.5rem;
  display: none;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    display: block;
  }
`;

const DeskTopNav = styled.nav`
  a {
    font-size: 1.2rem;
    color: ${props => darken(0.1, props.theme.primarynav.color())};
    text-decoration: none;
    &:hover {
      color: #f1f1f1;
      background: ${props => darken(0.1, props.theme.mast.background())};
    }
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const Container = styled(motion.div)`
  position: fixed;
  height: 100%;
  width: 90%;
  background: ${props => props.theme.mast.background()};
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  i {
    font-size: 1.5rem;
  }
  header {
    min-width: 100%;
    padding: 1rem;
    box-sizing: border-box;
  }
  nav {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  a {
    color: ${props => darken(0.1, props.theme.primarynav.color())};
    text-decoration: none;
    &:hover {
      color: #f1f1f1;
      background: ${props => darken(0.1, props.theme.mast.background())};
    }
  }
`;

const Overlay = styled(motion.div)`
  width: 100% !important;
  height: 100% !important;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
`;

const PrimaryNavigation = ({
  children,
  className,
  menuLabel = "Menu",
  closeLabel = "Close"
}) => {
  const [navState, setNavState] = useState(false);
  const toggleNav = () => setNavState(!navState);
  if (typeof window !== "undefined") {
    window.onresize = () => {
      setNavState(false);
    };
  }
  return (
    <>
      <DeskTopNav>
        {React.Children.map(children, (child, i) => {
          return React.cloneElement(
            child,
            { closeMenu: setNavState },
            children
          );
        })}
      </DeskTopNav>

      <MobileControl
        className={`${className} mobile-control`}
        onClick={toggleNav}
      >
        {!closeLabel ? <i className="fa fa-bars" /> : menuLabel}
      </MobileControl>
      <AnimatePresence>
        {navState == true && (
          <Overlay
            key="overlay-mob"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleNav}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {navState == true && (
          <Container
            key="container"
            className="nav-container"
            initial={{ x: "110%" }}
            animate={{ x: 0 }}
            exit={{ x: "110%" }}
            transition={{ duration: 0.3 }}
          >
            <header>
              <span onClick={toggleNav}>
                {!closeLabel ? <i className="fa fa-times" /> : "Close"}
              </span>
            </header>
            {React.Children.map(children, (child, i) => {
              return React.cloneElement(
                child,
                { closeMenu: setNavState },
                children
              );
            })}
          </Container>
        )}
      </AnimatePresence>
    </>
  );
};

export default PrimaryNavigation;
