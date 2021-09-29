import React, { FC } from "react";
import styled from "styled-components";
import GoalPicker from "./GoalPicker";
import { NavLink } from "react-router-dom";
import { LineChartIcon } from "../../assets/Icon";
import theme from '../../theme/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  span,
  a {
    text-align: center;
  }

  span { font-weight: 300; }

  .marketplaceLink {
    display: flex;
    align-items: center;
    margin-top: 30px;
    width: fit-content;
    background-color: black;
    color: white;
    border-radius: 40px;
    padding: 5px 5px 5px 30px;
    text-decoration: none;
    white-space: pre-wrap;
    letter-spacing: 3px;

    strong { text-transform: uppercase; }

    &__icon {
      border-radius: 50%;
      background-color: ${theme.colors.primary};
      margin-left: 30px;
      padding: 7px;
    }
  }
`;

const GoalPickerStep = () => {
  const goals = [
    { label: "I don't know yet", path: "/a" },
    { label: "Retirement", path: "/b" },
    { label: "Major Purchase", path: "/c" },
    { label: "Education", path: "/d" },
  ];
  return (
    <Wrapper>
      <h1>What are you saving for?</h1>
      <GoalPicker goals={goals} />
      <span>
        Choose one of the options above to get started. You can change your goal
        at any time.
      </span>
      <NavLink className="marketplaceLink" to="/marketplace">
        Go to <strong>markeplace</strong>
        <div className="marketplaceLink__icon">
          <LineChartIcon width={25} height={25} />
        </div>
      </NavLink>
    </Wrapper>
  );
};

export default GoalPickerStep;
