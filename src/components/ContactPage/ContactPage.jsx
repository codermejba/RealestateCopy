import React from "react";
import styled from "styled-components";
import ContactFormSvg from "../../icons/ContactFormSvg";
import ContactForm from "./ContactForm";

const ContactPage = ({user}) => {
  return (
    <Main className="">
      <div className="header d-flex align-items-center justify-content-center">
        <div className="mt-5 pt-5 ">
          <h1 className="text-white text-center">Contact Us</h1>
        </div>
      </div>
      <div className="formSection container my-5">
        <div className="row">
          <div className="icon col-lg-6">
            <img
              src="https://hously-landing.vercel.app/assets/contact-DcieejIc.svg"
              alt="contact"
            />
          </div>
          <div className="form col-lg-6">
            <ContactForm user={user} />
          </div>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
  .header {
    min-height: 60vh;
    position: relative;
    border-bottom-right-radius: 15%;
    border-bottom-left-radius: 15%;
    overflow: hidden;

    @media (max-width: 992px) {
      border-bottom-right-radius: 10%;
      border-bottom-left-radius: 10%;
    }
    @media (max-width: 	576px) {
      border-bottom-right-radius: 5%;
      border-bottom-left-radius: 5%;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("img/hero.jpg") no-repeat center center/cover;
      z-index: -1;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(22, 28, 45, 0.5) !important;
      z-index: -1;
    }
  }
 
`;
export default ContactPage;
