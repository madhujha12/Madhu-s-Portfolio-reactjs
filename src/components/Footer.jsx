import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 My Portfolio. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
