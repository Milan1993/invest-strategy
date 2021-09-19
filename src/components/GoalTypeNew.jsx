import React from 'react'
import styled from "styled-components";

const GoalLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: #000000;
`;

const GoalTypeNew = ({ linkText }) => {
  return <GoalLink href="">{linkText}</GoalLink>;
};

export default GoalTypeNew;
