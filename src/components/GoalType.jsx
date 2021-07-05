import styled from 'styled-components';
import { ReactComponent as RetirementIcon } from '../assets/retirement.svg';
import { ReactComponent as MajorPurchaseIcon } from '../assets/major-purchase.svg';
import { ReactComponent as EducationIcon } from '../assets/education.svg';
import { ReactComponent as BuildWealthIcon } from '../assets/build-wealth.svg';

const GoalTypeContainer = styled.a`
  outline: 1px solid #9cb1cd;
  width: 200px;
  height: 200px;
  padding: 8px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #9cb1cd;
  text-decoration: none;

  svg {
    width: 81px;
    height: 81px;
    vertical-align: middle;
  }

  .label {
    margin-top: 30px;
    font-size: 1.5em;
    color: #566A85;
    text-transform: capitalize;
  }

`;

const GoalType = ({ type }) => {

  const renderComponentIcon = (type) => {
    switch (type) {
      case 'retirement': return <RetirementIcon />
      case 'major-purchase': return <MajorPurchaseIcon />
      case 'education': return <EducationIcon />
      case 'build-wealth': return <BuildWealthIcon />
      default: return false
    }
  }

  return (
    <GoalTypeContainer href="" alia-label={type}>

      {renderComponentIcon(type)}

      <span class="label">{type.replace(/-/g, " ")}</span>

    </GoalTypeContainer>
  )
}

export default GoalType;