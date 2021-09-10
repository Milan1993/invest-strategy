import { useState } from 'react';
import styled from 'styled-components';

const GoalTypes = ['I dont know yet', 'Retirement', 'Major purchase', 'Education']

const GoalTypePicker = () => {
  const [goalTypes, setGoalTypes] = useState(GoalTypes);

  return (
    <div>
      {goalTypes.map(() => {
        return <div>aaa</div>
      })}
    </div>
  )
};

export default GoalTypePicker;