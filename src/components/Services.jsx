import React from "react";
import styled from "styled-components";

const ServicesContainer = styled.section`
  background-color: green;
  color:white;
  padding: 80px 0;
  text-align: center;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <h2>Services</h2>
      <ul>
        <li>Responsive Web Design</li>
        <li>Front-end Development</li>
        <li>User Experience (UX) Design</li>
        <li>Website Optimization</li>
      </ul>
    </ServicesContainer>
  );
};

export default Services;
