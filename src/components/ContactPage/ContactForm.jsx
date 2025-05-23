import React from "react";
import styled from "styled-components";
import HeaderButton from "../../assets/buttonStyle/HeaderButton";

const ContactForm = () => {
  return (
    <Main className="p-3 mt-5">
      <div className="">
        <div>
          <h3 className="fw-bold mb-5 ">Get in touch!</h3>
          <form method="post" name="myForm" id="myForm">
            <p id="error-msg"></p>
            <div id="simple-msg"></div>
            <div>
              <div className=" d-flex flex-column">
                <label htmlFor="name">Your Name:</label>
                <input id="name" type="text" name="name" placeholder="Name :" />
              </div>
              <div className=" d-flex flex-column">
                <label htmlFor="email">Your Email:</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email :"
                />
              </div>
            </div>
            <div>
              <div className=" d-flex flex-column">
                <label htmlFor="subject">Your Question:</label>
                <input id="subject" name="subject" placeholder="Subject :" />
              </div>
              <div className=" d-flex flex-column">
                <label htmlFor="comments">Your Comment:</label>
                <textarea
                  name="comments"
                  id="comments"
                  rows="5"
                  placeholder="Message :"
                ></textarea>
              </div>
            </div>
            <HeaderButton className="mt-2">Send Message</HeaderButton>
          </form>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
  border: 1px solid var(--secondary-color);
  border-radius: 10px;
  label {
    font-weight: 600;
    margin-bottom: 10px;
  }
  input,
  textarea {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid var(--secondary-color);
    padding-left: 15px;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: normal !important;
    outline: none;
    &:focus {
      border: 1px solid var(--primary-color);
    }
  }
`;
export default ContactForm;
