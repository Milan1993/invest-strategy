import styled from 'styled-components';

const Button = styled.button`
  width: 150px;
  padding: 0;
  display: table-cell;
  vertical-align: middle;
  line-height: 2;
  font-size: 1em;
  border-radius: 40px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

const SelectButton = ({ ...props }) => {
    return (
        <Button {...props}></Button>
    )
};

export default SelectButton;