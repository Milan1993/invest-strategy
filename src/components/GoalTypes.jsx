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

const GoalTypes = ({ types, goNextStep }) => {
  return (
    <GoalTypesWrapper>
      <H1>Please select a goal.</H1>
      <div>
        {types.map((type, i) => (
          <GoalType key={i} type={type} goNextStep={goNextStep}/>
        ))}
      </div>
    </GoalTypesWrapper>
  )
}

export default GoalTypes;