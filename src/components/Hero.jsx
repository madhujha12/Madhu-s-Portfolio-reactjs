import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  background-color:black;
  color:white;
  background-image: url("/images/bg.jpg");
  background-size: cover;
  text-align: center;
  background-size: 50% 50%; /* or background-size: contain; */
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh; /* Set a height for the container */
  padding: 15px;
  text-align: center;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <h1>I am Madhu 👋</h1>
      <h1>Welcome to My Portfolio</h1>
      <p>Showcasing my skills and projects</p>
    </HeroContainer>
  );
};

export default Hero;
