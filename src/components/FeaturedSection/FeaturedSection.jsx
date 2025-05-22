import styled from "styled-components";
import FeaturedCards from "./FeaturedCards";

const FeaturedSection = () => {
  return (
    <Main className="container py-5 my-5">

      <TopSection id="houses" className="ms-3 d-flex flex-column align-items-center justify-content-center">
        <h2 className="fw-bold">Featured Properties</h2>
        <p>
          A great plateform to buy, sell and rent your properties without any
          agent or <br /> commisions.
        </p>
      </TopSection>
      <Features className="">
        <FeaturedCards />
      </Features>
    </Main>
  );
};
const Main = styled.div`
`;
const TopSection = styled.div`
  p {
    color: var(--secondary-color);
    text-align: center;
  }
`;
const Features = styled.div``;
export default FeaturedSection;
