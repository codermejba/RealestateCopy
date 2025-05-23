import React from 'react'
import styled from 'styled-components';
import ClientReviews from './ClientReviews';

const ClientReviewSec = () => {
    return (
    <Main className="container py-5 my-5 border-3 border-primary">
      <TopSection className="ms-3 d-flex flex-column align-items-center justify-content-center">
        <h2 className="fw-bold">Clients Reviews</h2>
       
      </TopSection>
      <ClientReviews />
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
export default ClientReviewSec