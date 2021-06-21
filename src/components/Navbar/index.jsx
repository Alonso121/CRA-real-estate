import React from "react";

import {
  Nav,
  Logo,
  MenuBars,
  NavMenu,
  NavMenuLink,
  NavBtn,
} from "./NavbarElements";
import { menuData } from "../../data/MenuData";
import { Button } from "../Button/ButtonElements";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">Infinity</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item) => (
          <NavMenuLink to={item.link} key={item.title}>
            {item.title}
          </NavMenuLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact">Contact Us</Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
