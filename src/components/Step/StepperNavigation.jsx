import React from 'react';
import { useState, useEffect } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
  margin: 0;
  height: 30px;
  align-items: center;

  li {
    text-transform: uppercase;
  }

  span {
    color: #3a3a3c;
    padding: 5px 0;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;

    &.active {
      color: #566a85;
      border-top: 2px solid #566a85;
    }
  }
`;

const StepperNavigation = ({ stepsLength, currentStep }) => {
  const [setGoalActive, setSetGoalActive] = useState(false);
  const [assessRiskActive, setAssessRiskActive] = useState(false);
  const [makePlanActive, setMakePlanActive] = useState(false);

  useEffect(() => {
    switch (currentStep) {
      case 1:
        setSetGoalActive(false);
        setAssessRiskActive(false);
        setMakePlanActive(false);
        break;
      case 2:
        setSetGoalActive(true);
        setAssessRiskActive(false);
        setMakePlanActive(false);
        break;
      case 3:
        setSetGoalActive(false);
        setAssessRiskActive(true);
        setMakePlanActive(false);
        break;
      case 4:
        setSetGoalActive(false);
        setAssessRiskActive(false);
        setMakePlanActive(true);
        break;
    };
    
  }, [currentStep]);

  return (
    <nav role="navigation">
      <Ul>
        <li>
          <span className={setGoalActive ? "active" : ""}>Set Goal</span>
        </li>
        <li>
          <span className={assessRiskActive ? "active" : ""}>Asess risk</span>
        </li>
        <li>
          <span className={makePlanActive ? "active" : ""}>Make Plan</span>
        </li>
      </Ul>
    </nav>
  );
};

export default StepperNavigation;
