import React from 'react'
import styled from 'styled-components';
import ClientReviews from './ClientReviews';

const ClientReview = () => {
    return (
    <Main className="container py-5 my-5 border-3 border-primary">
      <TopSection className="ms-3 d-flex flex-column align-items-center justify-content-center">
        <h3 className="fw-bold">Clients Reviews</h3>
       
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
export default ClientReview