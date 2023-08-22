import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  background-color: blue;
  color:white;
  padding: 80px 0;
  text-align: center;
`;

const About = () => {
  return (
    <AboutContainer>
      <h2>About Me</h2>
      <p>
        I am a passionate web developer with expertise in front-end
        technologies. With a keen eye for detail and a love for creating
        user-friendly experiences, I am dedicated to delivering high-quality
        websites.
      </p>
    </AboutContainer>
  );
};

export default About;
