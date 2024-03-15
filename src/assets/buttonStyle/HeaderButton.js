import styled from "styled-components";

const HeaderButton = styled.button`
  background: #16a34a;
  color: white;
  font-size: 16px;
  font-weight: 500;
  height: 2.5rem;
  line-height: 24px;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  border-radius: 0.5rem;
  transition: background .3s;
  &:hover {
      background: rgb(21 128 61);
  }
`;

export default HeaderButton;
