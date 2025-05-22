import styled from "styled-components";
import Colaps from "../../icons/Colaps";
import Bed from "../../icons/Bed";
import Bath from "../../icons/Bath";
import RatingStar from "../../icons/RatingStar";
import { Houses } from "../../assets/data/Houses";
import Slider from "react-slick";

const FeaturedCards = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,       // Number of cards visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,   // tablet breakpoint
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,   // mobile breakpoint
        settings: { slidesToShow: 1 }
      }
    ],
  };
  return (
    <Main className="mt-5">
      <Slider {...settings}>
        {Houses.map((item, index) => (
          <div key={index} className="px-2">
            <div className="featered-card ">
              <div className="img">
                <img style={{width:"100%",height:"100%"}} src={item.img} alt={item.title} />
              </div>
              <div className="content m-4 overflow-hidden">
                <div className="title">
                  <h6 className="pb-4">{item.title}</h6>
                </div>
                <div className="details row p-0 py-3">
                  <div className="col-4 d-flex justify-content-center align-items-center textWrap">
                    <Colaps /> 8000sqf
                  </div>
                  <div className="col-4 d-flex justify-content-center align-items-center textWrap">
                    <Bed /> 4 Beds
                  </div>
                  <div className="col-4 d-flex justify-content-center align-items-center textWrap">
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
      </Slider>
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
        white-space: nowrap;

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
      .textWrap{

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
    /* mini screen */
    
     @media (max-width: 380px) {
    svg {
      margin-right: 0;
    }
  }
  }
  
`;
export default FeaturedCards;
