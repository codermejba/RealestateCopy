import styled from "styled-components";
import Colaps from "../../../public/icons/Colaps";
import Bed from "../../../public/icons/bed";
import Bath from "../../../public/icons/bath";
import RatingStar from "../../../public/icons/RatingStar";
import { Houses } from "../../assets/cardData/Houses";

const FeateredCards = () => {
  return (
    <Main><div className="row">
      {Houses.map((item, index) => (
        <div key={index} className="col-4">
        
          <div className="featered-card ">
            <div className="img">
              <img src={item.img} alt="img" />
            </div>
            <div className="content m-4 overflow-hidden">
              <div className="title">
                <h6 className="pb-4">
                  {item.title}
                </h6>
              </div>
              <div className="details row p-0 py-3">
                <div className="col-4 d-flex justify-content-center">
                  <Colaps /> 8000sqf
                </div>
                <div className="col-4 d-flex justify-content-center">
                  <Bed /> 4 Beds
                </div>
                <div className="col-4 d-flex justify-content-center">
                  <Bath /> 4 Bath
                </div>
              </div>
              <div className="pricing row py-4">
                <div className="col-5">
                  <p className="tag">price</p>
                  <h6>$5000</h6>
                </div>
                <div className="col-7">
                  <p className="tag">Rating</p>
                  <div className="d-flex align-items-center">
                    <div className=" d-flex">
                      <span className=" d-flex align-items-center">
                        <RatingStar />
                      </span>
                      <span className=" d-flex align-items-center">
                        <RatingStar />
                      </span>
                      <span className=" d-flex align-items-center">
                        <RatingStar />
                      </span>
                      <span className=" d-flex align-items-center">
                        <RatingStar />
                      </span>
                      <span className=" d-flex align-items-center">
                        <RatingStar />
                      </span>
                    </div>
                    <h6 className="m-0 ">
                      5.0 <span>(30)</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
       </div>
      ))}
      </div>
    </Main>
  );
};
const Main = styled.div`
  svg {
    height: 20px;
  }
  .featered-card {
    height: 500px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 3px #3c485826 !important;
    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 0 5px 10px #3c485826 !important;
      cursor: pointer;
      .title {
        color: var(--primary-color) !important;
      }
    }
  }
  .img {
    height: 45%;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .content {
    .title {
      transition: color 0.3s;
      border-bottom: 1px solid #3c485826;
    }
    .details {
      border-bottom: 1px solid #3c485826;
      svg {
        margin-right: 5px;
      }
    }
  }
  .pricing {
    .tag {
      color: var(--secondary-color);
    }
    svg {
      height: 1rem;
      margin-right: 5px;
    }
  }
`;
export default FeateredCards;
