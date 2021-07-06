import React from 'react';
import styled from 'styled-components';
import GoalType from './GoalType';

const GoalTypesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  font-weight: 300;
  font-size: 28px;
  color: #161A25;
`;

const UL = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 10px;
`;

const GoalTypes = ({ types, goNextStep }) => {
  return (
    <GoalTypesWrapper>
      <H1>Please select a goal.</H1>
      <UL>
        {types.map((type, i) => (
          <li key={i}>
            <GoalType type={type} goNextStep={goNextStep}/>
          </li>
        ))}
      </UL>
    </GoalTypesWrapper>
  )
}

export default GoalTypes;