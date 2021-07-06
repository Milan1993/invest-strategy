import React from 'react';
import GoalType from './GoalType';

const GoalTypes = ({ types, goNextStep }) => {
  return (
    <div>
      {types.map((type, i) => (
        <GoalType key={i} type={type} goNextStep={goNextStep}/>
      ))}
    </div>
  )
}

export default GoalTypes;