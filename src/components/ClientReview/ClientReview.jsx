import React from 'react'
import styled from 'styled-components';

const ClientReview = () => {
    return (
    <Main className="container py-5 my-5 border-3 border-primary">
      <TopSection className="ms-3 d-flex flex-column align-items-center justify-content-center">
        <h3 className="fw-bold">Listing Categories</h3>
        <p>
          A great plateform to buy, sell and rent your properties without any
          agent or <br /> commisions.
        </p>
      </TopSection>
    </Main>
  );
}
const Main = styled.div``;
const TopSection = styled.div`
  p {
     color: var(--secondary-color);
    text-align: center;
  } 
`;
export default ClientReview