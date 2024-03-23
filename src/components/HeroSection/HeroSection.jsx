import styled from "styled-components";
import HeaderButton from "../../assets/buttonStyle/HeaderButton";

const HeroSection = () => {
  return (
    <Main className="container py-lg-5 ">
      <div className=" my-5">
        <div className="row">
          <div className="col-lg-5">
            <img src="img/hero.intro.jpg" alt="" />
          </div>
          <div className="col-lg-7">
            <div className=" h-100 d-flex flex-column justify-content-center ps-md-4">
              <h3 className=" fw-bold">
                Efficiency. Transparency.
                <br /> Control.
              </h3>
              <p>
                Hously developed a platform for the Real Estate marketplace that
                allows buyers and sellers to easily execute a transaction on
                their own. The platform drives efficiency, cost transparency and
                control into the hands of the consumers. Hously is Real Estate
                Redefined.
              </p>
              <div>
                <HeaderButton>Learn More</HeaderButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  img {
    width: 100%;
    max-width: 100%;
    border: 3vh solid white;
    border-radius: 9999px 9999px 0 0;
    box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
  }
  h3 {
    line-height: 1.5;
  }
  p {
    line-height: 1.62;
    max-width: 36rem;
    color: rgb(148 163 184/ 1);
    font-family: League Spartan, sans-serif;
  }
`;
export default HeroSection;
