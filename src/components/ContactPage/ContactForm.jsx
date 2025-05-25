import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderButton from "../../assets/buttonStyle/HeaderButton";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
const ContactForm = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    if (!user) {
      alert("Please sign in to send a message.");
      return;
    }
    try {
      await addDoc(collection(db, "GetTouch"), data);
      alert("Message sent successfully!");
      reset(); //clear the form
    } catch (error) {
      console.error("Error sending message:", error.message); // show readable message
      console.error(error); // show the full object
      alert("Something went wrong!");
    }
  };
  useEffect(() => {
    if (user?.displayName) {
      setValue("name", user.displayName);
    }
    if (user?.email) {
      setValue("email", user.email);
    }
  }, [user, setValue]);
  return (
    <Main className="p-3 mt-5">
      <div className="">
        <div>
          <h3 className="fw-bold mb-5 ">Get in touch!</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className=" d-flex flex-column">
                <label htmlFor="name">Your Name:</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name :"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-danger">{errors.name.message}</p>
                )}
              </div>
              <div className=" d-flex flex-column">
                <label htmlFor="email">Your Email:</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email :"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|live\.com)$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div>
              <div className=" d-flex flex-column">
                <label htmlFor="subject">Your Question:</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject :"
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                />
                {errors.subject && (
                  <p className="text-danger">{errors.subject.message}</p>
                )}
              </div>
              <div className=" d-flex flex-column">
                <label htmlFor="comments">Your Comment:</label>
                <textarea
                  id="comments"
                  rows="5"
                  placeholder="Message :"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                ></textarea>
                {errors.message && (
                  <p className="text-danger">{errors.message.message}</p>
                )}
              </div>
            </div>
            <button type="submit">
              <HeaderButton className="mt-2">Send Message</HeaderButton>
            </button>
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
