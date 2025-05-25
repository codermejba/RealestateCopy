import React from "react";
import styled from "styled-components";
import HeaderButton from "../../assets/buttonStyle/HeaderButton";
import Call from "../../icons/Call";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <Main className="container py-5 my-5 border-3 border-primary">
      <TopSection className="ms-3 d-flex flex-column align-items-center justify-content-center">
        <h2 className="fw-bold">Have Question ? Get in touch!</h2>
        <p>
          A great plateform to buy, sell and rent your properties without any
          agent or <br />
          commisions.
        </p>
      </TopSection>
      <div className="d-flex align-items-center justify-content-center my-3">
        <HeaderButton>
          <Link to="/contact">
            <div className=" d-flex">
              <Call/>
              <span className="ms-2">Contact Us</span>
            </div>
          </Link>
        </HeaderButton>
      </div>
    </Main>
  );
};
const Main = styled.div``;
const TopSection = styled.div`
  p {
    color: var(--secondary-color);
    text-align: center;
  }
`;
export default ContactSection;
