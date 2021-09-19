import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  input {
    font-size: 1.2em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  input:focus {
    border-color: ${({ theme }) => theme.colors.primary};

    & + label { color: ${({ theme }) => theme.colors.primary}; }
  }

  label {
		color: ${({ theme }) => theme.colors.gray};
    font-size: 0.8em;
    margin-top: 5px;
  }
`;

const Input = ({ value, label, ...props }) => {
  return (
    <Wrapper>
      <input
        type="text"
        value={value ? `$ ${value}` : null}
				{...props}
      />
      <label htmlFor="">{label}</label>
    </Wrapper>
  );
};

export default Input;
