import React, { FC } from 'react';
import RecommendedPortfolioItem from './RecommendedPortfolioItem';
import styled from "styled-components";
import theme from '../../theme/theme';

const UL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li:not(:last-child) { border-bottom: 1px solid ${theme.colors.gray}; }
`;

interface IProps {
  data: any[]
}
const RecommendedPortfolioList: FC<IProps> = ({ data }) => {
  return (
    <div>
      <UL>
        {data.map((item, idx) => (
          <li key={idx}>
            <RecommendedPortfolioItem isLoading={true} title="Market Gauge Nasdaq 100 All Stars" percent={(idx + 1) * 13.33} />
          </li>
        ))}
      </UL>
    </div>
  );
}

export default RecommendedPortfolioList;