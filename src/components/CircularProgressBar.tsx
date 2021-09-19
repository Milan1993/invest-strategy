import React, { FC, useState, useEffect } from "react";
import theme from "../theme/theme";
import styled from "styled-components";

const SVG = styled.svg`
  .svg-bg {
    fill: none;
  }

  .svg-circle {
    fill: none;
  }

  text {
    font-size: 1rem;
    text-anchor: middle;
    fill: ${theme.colors.black};
    font-weight: bold;
  }
`;

interface Props {
  size?: number;
  progress: number;
  strokeWidth?: number;
  circleOneStroke?: string;
  circleTwoStroke?: string;
}

const CircularProgressBar: FC<Props> = ({
  progress,
  circleOneStroke = theme.colors.gray,
  circleTwoStroke = theme.colors.primary,
  size = 100,
  strokeWidth = 20,
}) => {
  const [offset, setOffset] = useState(0);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const viewBox = `0 0 ${size} ${size}`;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, progress, circumference, offset]);

  return (
    <SVG width={size} height="auto" viewBox={viewBox}>
      <circle
        className="svg-bg"
        stroke={circleOneStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <circle
        className="svg-circle"
        stroke={circleTwoStroke}
        cx={center}
        cy={center}
        r={radius}
        transform={`rotate(-90 ${center} ${center})`}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <text x="50%" y="50%" dominantBaseline="middle">
        {progress}%
      </text>
    </SVG>
  );
};

export default CircularProgressBar;
