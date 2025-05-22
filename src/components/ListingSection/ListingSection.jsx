import React from "react";
import styled from "styled-components";
import ListingCards from "./ListingCards";

const ListingSection = () => {
  return (
    <Main className="container py-5 my-5 border-3 border-primary">
      <TopSection id="lands" className="ms-3 d-flex flex-column align-items-center justify-content-center">
        <h2 className="fw-bold">Listing Categories</h2>
        <p>
          A great plateform to buy, sell and rent your properties without any
          agent or <br /> commisions.
        </p>
      </TopSection>
      <ListingCards />
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
export default ListingSection;
