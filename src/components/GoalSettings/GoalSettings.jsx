import styled from 'styled-components';
import Input from './Input';
import Select from './Select';
import Card from '../Card';

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px 15px;
  margin: 40px;
  background-color: ${({ theme }) => theme.colors.white};
`;


const GoalSettings = ({ initialDeposit, monthlyContribution, riskProfile, yearsShown }) => {
  const options = [
    { label: 'One', value: 'One'},
    { label: 'Two', value: 'Two'},
    { label: 'Three', value: 'Three'}
  ]
  return (
    <Wrapper>
      <Input value={initialDeposit} label="Initial Deposit" />
      <Input value={monthlyContribution} label="Monthly contribution" />
      <Select options={options} label="Risk Profile"/>
      <Input value={yearsShown} label="Year Shown" />
    </Wrapper>
  );
};

export default GoalSettings;
