import React, { FC } from "react";
import { RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";
import styled from "styled-components";
import theme from "../../theme/theme";
import CircularProgressBar from "../CircularProgressBar";
import { ReactComponent as BarChartIcon } from "../../assets/stats.svg";
import Button from "../../components/Button";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  max-height: 100px;

  span {
    font-weight: bold;
    margin: 0 25px;
  }

  button { margin-left: auto; }
`;

interface Props {
  percent: number;
  title: string;
}

const RecommendedPortfolioItem: FC<Props> = ({ percent, title = "Title" }) => {
  return (
    <Wrapper>
      <CircularProgressBar progress={percent} />
      <span>{title}</span>
      <Button color={theme.colors.black} bg={theme.colors.gray} fontWeight="bold" fontSize="1.1em">
        <BarChartIcon />
        View Model
      </Button>
    </Wrapper>
  );
};

export default RecommendedPortfolioItem;
