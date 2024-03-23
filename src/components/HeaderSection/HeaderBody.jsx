import { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderButton from "../../assets/buttonStyle/HeaderButton";

const HeaderBody = () => {
  const [typing, setTyping] = useState('');
  const [arryindex, setarryindex] = useState(0);

  useEffect(() => {
    const text = ["home", "villa", "office"];
    let i = -1;

    const typeInterval = setInterval(() => {
      if (i < text[arryindex].length - 1) {
        i++;
        setTyping((prev) => prev + text[arryindex][i]);
      }
    }, 70);

    const resetTimeout = setTimeout(() => {
      clearInterval(typeInterval);
      deleteText();
    }, 2000);

    const deleteText = () => {
      const deleteInterval = setInterval(() => {
        if (i >= 0) {
          setTyping((prev) => prev.slice(0, -1));
          i--;
        } else {
          clearInterval(deleteInterval);
          setarryindex((prevIndex) => (prevIndex + 1) % text.length);
        }
      }, 10);
    };

    // Cleanup the intervals and timeout when the component unmounts
    return () => {
      clearInterval(typeInterval);
      clearTimeout(resetTimeout);
    };
  }, [arryindex]);
  
  return (
    <Main className="container">
      <h1 style={{ marginTop: '100px'}}>Find the perfect </h1>
      <h1 >
        <span>{typing}</span> for you
      </h1>
      <p>
        A great plateform to buy, sell and rent your properties without any
        agent or commisions.
      </p>
      <HeaderButton className="button">Learn more</HeaderButton>
    </Main>
  );
};
const Main = styled.div`
  color: white;
  height: calc(120vh - 0vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  h1 {
    font-size: calc(1.375rem + 2.5vw) !important;
    font-weight: 600;
    cursor: default;
  }
  p {
    font-size: calc(14px + .5vw) !important;
    color: hsla(0, 0%, 100%, 0.7) !important;
    //line-height: 1.75rem !important;
  }
  .button {
    width: fit-content;
    border-radius: 0.375rem !important;
  }
  @media (min-width: 1050px) {
    p{
      max-width: 60%;
    }
  }
`;
export default HeaderBody;
