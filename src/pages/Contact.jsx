import React from "react";
import styled from "styled-components";
import ContactPage from "../components/ContactPage/ContactPage";
import FooterSection from "../components/FooterSection/FooterSection";
import Navbar from "../components/NavBar/Navbar";

const Contact = ({user,handleSignUp,handleSignOut}) => {
  return (
    <MainSection>
      <Navbar  user={user} handleSignUp={handleSignUp} handleSignOut={handleSignOut} />
      <ContactPage user={user} />
      <FooterSection />
    </MainSection>
  );
};
const MainSection = styled.section``;
export default Contact;
