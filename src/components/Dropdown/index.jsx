import React from "react";

import {
  DropdownContainer,
  Icon,
  BtnWrap,
  CloseIcon,
  DropdownLink,
  DropdownMenu,
  DropdownWrapper,
} from "./DropdownElements";
import { Button } from "../Button/ButtonElements";
import { menuData } from "../../data/MenuData";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item) => (
            <DropdownLink to={item.link} key={item.title} onClick={toggle}>
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button
            primary="true"
            round="true"
            big="true"
            to="/contact"
            onClick={toggle}
          >
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
