import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import theme from "../../theme/theme";
import CircularProgressBar from "../CircularProgressBar";
import { BarChartIcon } from "../allSVG";
import Button from "../../components/Button";

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 70%);
  }

  100% {
    background-color: hsl(200, 20%, 90%);
  }
`;

const skeletonLoadingText = keyframes`
  0% {
    background-color: hsl(200, 20%, 70%);
  }

  100% {
    background-color: hsl(200, 20%, 90%);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  > svg {
    min-width: 70px;
    max-width: 150px;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  span {
    font-weight: bold;
    margin: 0 25px;
  }

  button {
    margin-left: auto;
  }

  &.skeleton {

    & > * {
      opacity: 0.7;
      animation: ${skeletonLoading} 1s linear infinite alternate; 
    }

    .skeleton-text {
      border-radius: 5px;
      width: 100%;
      height: 1em;
    }

    .skeleton-button {
      border-radius: 5px;
      min-width: 150px;
      height: 50px;
    }
  }

  .progressBar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

interface IProps {
  percent: number;
  isLoading: boolean;
  title: string;
}

const RecommendedPortfolioItem: FC<IProps> = ({
  percent,
  isLoading,
  title = "Title",
}) => {
  if (isLoading) {
    return (
      <Wrapper className="skeleton">
        <svg className="skeleton-progressBar"></svg>
        <span className="skeleton-text"></span>
        <button className="skeleton-button"></button>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="skeleton">
        <CircularProgressBar progress={percent} />
      </div>
      <span className="skeleton">{title}</span>
      <Button
        className="sm-onlyIcon"
        color={theme.colors.black}
        bg={theme.colors.gray}
        fontWeight="bold"
        fontSize="1.1em"
      >
        <BarChartIcon width={35} height={35} />
        View Model
      </Button>
    </Wrapper>
  );
};

export default RecommendedPortfolioItem;
