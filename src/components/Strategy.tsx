import React, { useState }  from 'react';
import styled from "styled-components";
import useToggle from '../hooks/useToggle';
import SelectButton from './SelectButton';
import Card from './Card';

const Wrapper = styled(Card)`
  border: 2px solid transparent;
  
  &.selected {
    border-color: ${({ theme }) => theme.colors.primary};

    button {
      background-color: ${({ theme }) => theme.colors.gray};
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > h3 { margin-top: 5px; }

  > p { padding-right: 40px; }

  a {
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Span = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

interface Props {
  isRecommended?: boolean,
  blendedStrategies?: string[]
}

const Strategy = ({ isRecommended, blendedStrategies }: Props) => {
  const [ toggle, toggleValue ] = useToggle(false);

  return (
    <Wrapper className={toggle ? "selected" : ''}>
      {isRecommended && <Span>Recommended:</Span>}
      <h3>CMS Institutional <br/>Featuring Fact-Based Strategies</h3>
      {blendedStrategies?.map(stgy => <p>Icon {stgy}</p>)}
      <p>Strategies featuring tactical and monumentum based strategist William Sherman.</p>
      <div>
        <a href="">Learn more</a>
        <SelectButton onClick={toggleValue}>{ toggle ? 'Selected' : 'Select'}</SelectButton>
      </div>
    </Wrapper>
  );
};

export default Strategy;
