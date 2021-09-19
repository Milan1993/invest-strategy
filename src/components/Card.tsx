import React, { FC } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 300px;
  padding: 25px;
  border-radius: 5px;
  box-shadow: var(--box-shadow-card);
  -webkit-box-shadow: var(--box-shadow-card);
  -moz-box-shadow: var(--box-shadow-card);
  background-color: var(--color-white);
`;

interface Props { 
  children: any,
  className: string 
}

const Card: FC<Props> = ({ children, className }) => {
  return  <Wrapper className={className}>{children}</Wrapper>;
};

export default Card;
