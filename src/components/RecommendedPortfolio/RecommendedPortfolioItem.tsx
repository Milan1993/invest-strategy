import React, { FC } from "react";
import styled from "styled-components";
import theme from "../../theme/theme";
import CircularProgressBar from "../CircularProgressBar";
import { BarChartIcon } from "../allSVG";
import Button from "../../components/Button";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  > svg { min-width: 70px; }
  span {
    font-weight: bold;
    margin: 0 25px;
  }

  button { margin-left: auto; }
`;

const ProgressBar = styled(CircularProgressBar)`
  min-width: 70px;
`;

interface IProps {
  percent: number;
  title: string;
}

const RecommendedPortfolioItem: FC<IProps> = ({ percent, title = "Title" }) => {
  return (
    <Wrapper>
      <ProgressBar progress={percent} />
      <span>{title}</span>
      <Button className="sm-onlyIcon" color={theme.colors.black} bg={theme.colors.gray} fontWeight="bold" fontSize="1.1em">
        <BarChartIcon width={35} height={35}/>
        View Model
      </Button>
    </Wrapper>
  );
};

export default RecommendedPortfolioItem;
