import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import theme from "../../theme/theme";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 40px 0;
  
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
      background-color: #ebeef7;
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
    transition: all 0.5s ease-in-out;
    border-radius: 40px;
    width: 0;
    box-sizing: border-box;
    border-width: 0;
  }
`;

interface IProps {
  goals: { label: string; path: string }[];
}
const GoalPicker: FC<IProps> = ({ goals }) => {
  const [leftOffset, setLeftOffset] = useState(0);
  const [offWidth, setOffWidth] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);

  const handleClick = (e: any) => {
    if (e.target.tagName !== "A") return;
    setLeftOffset(e.target.offsetLeft);
    setOffWidth(e.target.offsetWidth - 5);
    setBorderWidth(2);
  };

  return (
    <Wrapper>
      <ul onClick={handleClick}>
        {goals.map((goal, i) => (
          <NavLink key={i} to={goal.path}>
            {goal.label}
          </NavLink>
        ))}
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

export default GoalPicker;
