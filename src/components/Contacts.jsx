import React from "react";
import styled from "styled-components";

const ContactsContainer = styled.section`
  background-color: brown;
  color:white;
  padding: 80px 0;
  text-align: center;
`;

const Contacts = () => {
  return (
    <ContactsContainer>
      <h2>Contact Me</h2>
      <p>
        Have a project in mind? Feel free to reach out to me for
        collaboration and inquiries.
      </p>
      <p>Email: madhu22@navgurukul.org</p>
    </ContactsContainer>
  );
};

export default Contacts;
