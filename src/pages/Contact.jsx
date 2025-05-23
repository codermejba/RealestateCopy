import React from "react";
import styled from "styled-components";
import ContactPage from "../components/ContactPage/ContactPage";
import FooterSection from "../components/FooterSection/FooterSection";
import Navbar from "../components/NavBar/Navbar";

const Contact = () => {
  return (
    <MainSection>
      <Navbar />
      <ContactPage />
      <FooterSection />
    </MainSection>
  );
};
const MainSection = styled.section``;
export default Contact;
