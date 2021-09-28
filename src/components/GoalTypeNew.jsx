import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import theme from "../theme/theme";
import styled from "styled-components";

const Wrapper = styled.div`
  ul {
    margin: 0 auto;
    list-style: none;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 40px;
    width: fit-content;
    box-shadow: 0px 3px 6px #9298a863;
    gap: 50px;
    padding: 3px;
    position: relative;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #000000;
    border-radius: 40px;
    padding: 10px 30px;
    white-space: nowrap;

    &:hover {
      background-color: #EBEEF7;
      transform: scale(0.95);
    }
  }

  .selector {
    border: 2px solid ${theme.colors.primary};
    width: 50px;
    position: absolute;
    top: 5px;
    bottom: 5px;
    left: -100;
    transition: all .5s ease-in-out;
    border-radius: 40px;
    width: 0;
    box-sizing: border-box;
    border-width: 0;
  }
`;

const GoalTypeNew = ({ linkText }) => {
  const [leftOffset, setLeftOffset] = useState(0);
  const [offWidth, setOffWidth] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);

  const handleClick = (e) => {
    
    if (e.target.tagName !== 'A') return;
    setLeftOffset(e.target.offsetLeft);
    setOffWidth(e.target.offsetWidth - 5);
    setBorderWidth(2);
  };

  return (
    <Wrapper>
      <ul onClick={handleClick}>
        <NavLink to="/a">I don't know yet</NavLink>
        <NavLink to="/b">Retirement</NavLink>
        <NavLink to="/c">Major Purchase</NavLink>
        <NavLink to="/d">Education</NavLink>
        <div
          className="selector"
          style={{
            transform: `translateX(${leftOffset}px)`,
            width: `${offWidth}px`,
            borderWidth: `${borderWidth}px`,
          }}
        ></div>
      </ul>
    </Wrapper>
  );
};

export default GoalTypeNew;
