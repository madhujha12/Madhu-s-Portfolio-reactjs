import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  background-color: #333;
  color: white;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <ul>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Navbar;
