import React, { FC } from 'react';
import RecommendedPortfolioList from './RecommendedPortfolioList';
import Button from '../Button';
import styled from 'styled-components';
import { SettingsIcon } from "../allSVG";

const Wrapper = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface IProps {
  data?: any
}

const RecommendedPortfolio: FC<IProps> = () => {
  return (
    <Wrapper>
      <Header>
        <span>Recommended Portfolio:</span>
        <Button primary className="sm-onlyIcon" fontWeight="bold">
          <SettingsIcon width={20} height={20}/>
          Customize Portfolio
        </Button>
      </Header>
      <RecommendedPortfolioList data={[0, 1, 2, 3, 4]} />
    </Wrapper>
  )
};

export default RecommendedPortfolio;