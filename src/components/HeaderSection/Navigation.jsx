import React, { useState } from "react";
import styled from "styled-components";
import ProfileIcon from "../../../public/icons/ProfileIcon";
import HeaderButton from "../../assets/buttonStyle/HeaderButton";

const Navigation = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <NavSection>
      <div className="container d-flex justify-content-between align-items-center h-100">
        <div id="logo" className=" d-flex ">
          <img src="img/logo.ico" alt="logo" />
          <h4>Realestate</h4>
        </div>
        <NavigationBar className="d-flex align-items-center gap-3 gap-md-4 gap-lg-5">
          <ul id="navigation" className={"nav " + (clicked ? "navShow" : "")}>
            <li className="active">Home</li>
            <li>Buy</li>
            <li>sell</li>
            <li>pages</li>
            <li>contact</li>
          </ul>
          <div className="d-flex">
            <div className="logIn">
            <HeaderButton className="button icon">
              <ProfileIcon />
            </HeaderButton>
            </div>
            <div className="signUp">

            <HeaderButton className="button">sign up</HeaderButton>
            </div>
          </div>
          <div id="hamburg" className="" onClick={() => setClicked(!clicked)}>
            <div className={clicked ? "active" : ""}></div>
          </div>
        </NavigationBar>
      </div>
    </NavSection>
  );
};

const NavSection = styled.nav`
  height: 10vh;
  position: relative;
  #logo {
    align-items: center;
    color: white;
    gap: 10px;
    cursor: pointer;
    img,
    h4 {
      height: 24px;
      margin: 0 !important;
    }
  }

  .button {
    border-radius: 9999px !important;
  }
  .icon {
    padding: 0 !important;
    margin-right: 10px;
    svg {
      height: 100%;
      padding: 10px;
    }
  }
  @media (max-width: 1050px) {
    background: white;
    #logo {
      color: black;
    }
    
    #hamburg {
      display: flex !important;
    }
  }
`;
const NavigationBar = styled.div`
  #navigation {
    align-items: center;
    font-size: 16px;
    letter-spacing: 1px;
    color: rgb(161 165 175);
.active{
        color: white;
      }
    li {
      padding: 0 20px;
      cursor: pointer;
      text-transform: capitalize;
      font-weight: 600;
      transition: color 0.3s;
      
      &:hover {
        color: white;
      }
    }
  }
  #hamburg {
    display: none;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    div {
      width: 100%;
      height: 2px;
      background: #000;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background: #000;
        top: -10px;
        transform: rotate(0deg);
        transition: top 0.3s 0.3s, transform 0.3s 0s;
      }
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background: #000;
        top: 10px;
        transform: rotate(0deg);
        transition: top 0.3s 0.3s, transform 0.3s 0s;
      }
    }

    .active {
      background: transparent !important;
      &::before {
        top: 0 !important;
        transform: rotate(45deg) !important;
        transition: top 0.3s, transform 0.3s 0.3s !important;
      }
      &::after {
        top: 0 !important;
        transform: rotate(-45deg) !important;
        transition: top 0.3s, transform 0.3s 0.3s !important;
      }
    }
  }
  .navShow {
    display: flex !important;
    align-items: flex-start !important;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 5%;
    width: 90%;
    background: white;
    color: black !important;
    padding: 10px;
    animation: slideDown 0.3s ease;
  }

  @keyframes slideDown {
    0% {
      top: 50%;
      opacity: 0;
    }
    80% {
      opacity: 1;
      top: 120%;
    }
    100% {
      top: 100%;
    }
  }
  @media (max-width: 1050px) {
    #navigation {
      display: none;
      gap: 1em;
      .active{
        color: unset ;
      }
      li{
        &:hover{
          color: rgb(161 165 175);

        }
      }
    }
    
  }
  @media (max-width: 640px) {
    .signUp{
      display: none;
    }
    #hamburg {
      margin-right: 1em;
    }
    
  }
  @media (max-width: 300px) {
    .logIn{
      display: none;
    }
  }
`;
export default Navigation;
