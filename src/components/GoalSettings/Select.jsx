import styled from "styled-components";

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;

  select {
    display: none; /*hide original SELECT element:*/
  }
`;

const Select = ({ options, label, ...props}) => {
  return (
    <SelectWrapper>
      <select>
        {options.map(option => <option value={option.value}>{option.label}</option>)}
      </select>
      <label htmlFor="">{label}</label>
    </SelectWrapper>
  );
};

export default Select;
