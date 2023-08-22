import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Contacts />
      <Footer />
    </AppContainer>
  );
};

export default App;
