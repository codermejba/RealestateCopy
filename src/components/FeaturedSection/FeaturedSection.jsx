
import styled from "styled-components";
import FeateredCards from "./FeateredCards";

const FeaturedSection = () => {
  return (
    <Main className="container">
      <TopSection className="ms-3 d-flex flex-column align-items-center justify-content-center">
        <h3 className="fw-bold">Featured Properties</h3>
        <p>
          A great plateform to buy, sell and rent your properties without any
          agent or <br /> commisions.
        </p>
      </TopSection>
      <Features className="my-5 py-4">
        <FeateredCards />
      </Features>
    </Main>
  );
};
const Main = styled.div`
height: 200vh;

`;
const TopSection = styled.div`
  p {
    color: var(--secondary-color);
    text-align: center;
  }
`;
const Features = styled.div``;
export default FeaturedSection;
