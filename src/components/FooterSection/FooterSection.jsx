import React from "react";
import styled from "styled-components";

const FooterSection = () => {
  return (
    <FooterContainerSec>
      <div className="container">
        <div className=" text-center">
          <p>© 2025 <a href="https://mejba-hasan-portfolio.vercel.app/" className="author">Mejba Hasan</a>. Design & Develop with React-JS.</p>
        </div>
      </div>
    </FooterContainerSec>
  );
};
const FooterContainerSec = styled.div`
  padding: 50px 0;
  background: var(--secondary-body-color);
 color: white;
 .author{
  color: var(--primary-color) !important;
  font-weight: 600;
 }
`;
export default FooterSection;
