import styled from "styled-components";
import SearchIcon from "../../icons/SearchIcon";
import HomeIcon from "../../icons/HomeIcon";
import CurrencyIcon from "../../icons/CurrencyIcon";
import { useState } from "react";

const SearchForm = () => {
    const [selectedValue, setSelectedValue] = useState('Apartment');
  
  return (
    <div className="container" id="search">
      <Main className=" p-4 position-relative z-1">
        <form action="">
          <div className="row">
            <div className=" col-sm-12 col-md-6 col-xl my-3 my-xl-0">
              <div className="row gap-2">
                <label >Search : </label>
                <div className="input-icon-group">
                  <span className="group-icon"><SearchIcon/></span>
                  <input type="text" className="group-input" placeholder="Search your keyword" />
                </div>
              </div>
            </div>
            <div className=" col-sm-12 col-md-6 col-xl my-3 my-xl-0">
              <div className="row gap-2">
                <label>Select Categories : </label>
                <div className="input-icon-group">
                  <span className="group-icon"><HomeIcon/></span>
                  <select name="" id="" className="group-input" value={selectedValue} onChange={(event)=>setSelectedValue(event.target.value)}>
                    <option value="Apartment">Apartment</option>
                    <option value="Offices">Offices</option>
                    <option value="Townhome">Townhome</option>
                  </select>
                </div>
              </div>
            </div>
            <div className=" col-sm-12 col-md-6 col-xl my-3 my-xl-0">
              <div className="row gap-2">
                <label>Min Price : </label>
                <div className="input-icon-group">
                  <span className="group-icon">
                    <CurrencyIcon/>
                  </span>
                  <select name="" id="" className="group-input" value={selectedValue} onChange={(event)=>setSelectedValue(event.target.value)}>
                    <option value="1000">1000</option>
                    <option value="2000">2000</option>
                    <option value="3000">3000</option>
                  </select>
                </div>
              </div>
            </div>
            <div className=" col-sm-12 col-md-6 col-xl my-3 my-xl-0">
              <div className="row gap-2">
                <label>Max Price : </label>
                <div className="input-icon-group">
                  <span className="group-icon">
                    <CurrencyIcon/>
                  </span>
                  <select name="" id="" className="group-input" value={selectedValue} onChange={(event)=>setSelectedValue(event.target.value)}>
                    <option value="1000">1000</option>
                    <option value="2000">2000</option>
                    <option value="3000">3000</option>
                  </select>
                </div>
              </div>
            </div>
            <div className=" col-sm-12 col-md-6 col-xl mx-lg-1 d-flex align-items-end p-0">
              <button type="submit">Search</button>
            </div>
          </div>
        </form>
      </Main>
    </div>
  );
};

const Main = styled.div`
  margin: 0 auto;
  margin-top: -5rem !important;
  border-radius: 0.5rem;
  box-shadow: 0px -2px 20px rgba(0, 0, 0, 0.5);
  background: #ffffff;

  label {
    font-weight: 500;
  }
  input, select, option {
    border: none;
    outline: none;
    background: #f9fafb;
    font-size: 15px;
    height: 60px;
    width: 100%;
    max-width: 100%;
    border-right: 1px solid #e5e7eb;
  }
  button {
    background: rgb(21 128 61);
    color: white;
    width: 100%;
    height: 60px;
  }
  .input-icon-group {
    position: relative;
    padding: 0;
    .group-icon {
      position: absolute;
      height: 100%;
      margin-left: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        height: 18px;
      }
    }
    .group-input {
      padding-left: 35px;
    }
  }
`;

export default SearchForm;
