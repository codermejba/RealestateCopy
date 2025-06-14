import styled from "styled-components";

const HeaderButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
  background: #16a34a;
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize !important;
  height: 2.5rem;
  line-height: 24px;
  padding-left: 1.5rem;
  padding-right: 1.85rem;
  border-radius: 0.5rem;
  transition: background .3s;
 &:active, &:focus {
    cursor: pointer;
    background: rgb(21 128 61);
    border: none;
    outline: none;
    text-transform: capitalize !important;
}
  &:hover {
      background: rgb(21 128 61);
  }
`;

export default HeaderButton;
