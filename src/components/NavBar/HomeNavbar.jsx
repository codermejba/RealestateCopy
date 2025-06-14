import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileIcon from "../../icons/ProfileIcon";
import HeaderButton from "../../assets/buttonStyle/HeaderButton";
import { Link } from "react-router-dom";
import RightArrow from "../../icons/RightArrow";

const HomeNavbar = ({ user, handleSignUp, handleSignOut }) => {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [iconSignout, setIconSignout] = useState(false);

  const handleIconSignOut = () => {
    handleSignOut()
    setIconSignout(false)
  }
  /* handle scroll */
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 0);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    setClicked(false);
  };

  return (
    <NavSection className={scrolled ? "scrollEffect" : ""}>
      <div className="container d-flex justify-content-between align-items-center h-100">
        <a href="/" aria-label="Home">
          <div id="logo" className={`d-flex ${scrolled ? "blackLogo" : ""}`}>
            <img src="img/logo.ico" alt="logo" />
            <h4 className=" d-flex align-items-center justify-content-center">
              Realestate
            </h4>
          </div>
        </a>

        <NavigationBar className="d-flex align-items-center gap-3 gap-md-4 gap-lg-5">
          <ul
            id="navigation"
            className={`nav ${clicked ? "navShow" : ""} ${
              scrolled ? "blackNav" : "grayNav"
            }`}
          >
            <li className={scrolled ? "scrolledActiveColor" : "active"}>
              <a href="#home" onClick={handleNavLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#search" onClick={handleNavLinkClick}>
                Search
              </a>
            </li>
            <li>
              <a href="#houses" onClick={handleNavLinkClick}>
                Houses
              </a>
            </li>
            <li>
              <a href="#lands" onClick={handleNavLinkClick}>
                Lands
              </a>
            </li>
            <li>
              <Link to="/contact" onClick={handleNavLinkClick}>
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            <div className="logIn">
              <HeaderButton className="button icon" aria-label="Log in">
                {user ? (
                  <button onClick={() => setIconSignout(!iconSignout)}>
                    <img src={user.photoURL} alt={user.displayName} />
                  </button>
                ) : (
                  <button onClick={handleSignUp}>
                    <ProfileIcon />
                  </button>
                )}
              </HeaderButton>

              <div
                className={`loginPopup position-absolute ${
                  iconSignout ? "" : " d-none"
                }`}
              >
                <button className="d-flex signOutbtn" onClick={handleIconSignOut}>
                  <p>Sign Out </p>
                  <span className="">
                    <RightArrow />{" "}
                  </span>
                </button>
              </div>
            </div>
            <div className="signUp">
              {user ? (
                <button onClick={handleSignOut}>
                  <HeaderButton className="button">Sign Out</HeaderButton>
                </button>
              ) : (
                <button onClick={handleSignUp}>
                  <HeaderButton className="button">Sign Up</HeaderButton>
                </button>
              )}
            </div>
          </div>
          {/* hamburger menu */}
          <div
            id="hamburg"
            onClick={() => setClicked(!clicked)}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setClicked(!clicked)}
          >
            <div className={clicked ? "active" : ""}></div>
          </div>
        </NavigationBar>
      </div>
    </NavSection>
  );
};
const NavSection = styled.nav`
  height: 10vh;
  position: fixed;
  background: transparent;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid transparent;

  &.scrollEffect {
    background: white;
    border-bottom: 1px solid #ccc;
  }

  #logo {
    align-items: center;
    color: #ffffff;
    gap: 10px;
    cursor: pointer;
    img,
    h4 {
      height: 30px;
      margin: 0 !important;
    }
    h4 {
      margin-top: 5px !important;
    }
  }

  .blackLogo {
    color: black !important;
  }

  .button {
    border-radius: 9999px !important;
  }

  .icon {
    padding: 0 !important;
    margin-right: 10px;
    overflow: hidden;
    svg,
    img,
    button {
      height: 100%;
      width: 100%;
    }
    svg {
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

    li {
      padding: 0 20px;
      cursor: pointer;
      text-transform: capitalize;
      font-weight: 600;
      transition: color 0.3s;
    }
  }
  .loginPopup {
    background-color: white;
    margin-top: 15px;
    p {
      margin: 0;
    }
    span {
      height: 20px;
      width: 20px;
      margin-left: 10px;
      margin-bottom: 5px;
    }
    .signOutbtn {
      color: #000000;
      font-weight: 600;
      padding: 8px 15px;
      border-bottom: 1px solid var(--secondary-color);
      text-transform: capitalize !important;
      transition: all 0.3s;
      &:hover {
        color: var(--primary-color);
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

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background: #000;
        transition: top 0.3s 0.3s, transform 0.3s;
      }

      &::before {
        top: -10px;
      }

      &::after {
        top: 10px;
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
    }
  }

  @media (max-width: 640px) {
    .signUp {
      display: none;
    }
    #hamburg {
      margin-right: 1em;
    }
  }

  @media (max-width: 300px) {
    .logIn {
      display: none;
    }
  }
`;

export default HomeNavbar;
