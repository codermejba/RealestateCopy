import React from "react";
import { reviews } from "../../assets/data/Review";
import styled from "styled-components";
import Slider from "react-slick";
const ClientReviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of cards visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <Section className="mt-5">
      <Slider {...settings}>
        {reviews.map((review, idx) => (
           <div className="" key={idx}>
             <div className=" d-flex justify-content-center mb-3">
                <div className="reviewCard" key={idx}>
              <p className="">"{review.text}"</p>
              <div>
              <img src={review.image} alt={review.name} className="" />
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  ))}
              </div>
              <div className="">{review.name}</div>
            </div>
             </div>
           </div>
        ))}
      </Slider>
    </Section>
  );
};
const Section = styled.section`
.reviewCard{
    max-width: 500px;
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    p{
        color: var(--secondary-color);
        text-align: center;
        font-size:1.25rem;
    }
}
  .star {
    color: #facc15;
  }
`;
export default ClientReviews;
