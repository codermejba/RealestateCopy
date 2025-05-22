import React, { useState } from 'react';
import { ListingCardsData } from '../../assets/data/ListingCardsData';
import styled from 'styled-components';

const ListingCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleOverlay = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Main className="mt-5">
      <div className="row g-4">
        {ListingCardsData.map((card, index) => (
          <div className="col-md-4" key={index}>
            <div className="card listing-card position-relative" onClick={() => toggleOverlay(index)}>
              <img src={card.img} className="card-img-top" alt={card.title || 'img'} />
              
            

              {/* Overlay */}
              <div className={`overlay ${activeIndex === index ? 'show' : ''}`}>
                <div className="overlay-text text-white text-center">
                   
                  <h3>{card.title}</h3>
                  <p>{card.list} Listings</p>
                  <div className='mt-5'><a className='checkBtn'>Check Now</a></div>
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
.listing-card {
  cursor: pointer;
  overflow: hidden;
}

.listing-card .card-img-top {
  height: 250px;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.listing-card:hover .overlay,
.overlay.show {
  opacity: 1;
}

.overlay-text {
  color: white;
}

.icon-top-right {
  position: absolute;
  top: 10px;
  right: 15px;
  color: white;
  background: rgba(0,0,0,0.5);
  border-radius: 50%;
  padding: 6px 10px;
  z-index: 2;
  transition: background 0.3s;
}

.icon-top-right:hover {
  background: rgba(0,0,0,0.8);
}
.checkBtn{
  border:1px solid var(--primary-color);
  padding: 8px 20px;
  border-radius: 5px;
  transition: all 0.3s;
  :hover{
    color: var(--primary-hover-color) !important;
  }
}
`;
export default ListingCards;
