import React, { FC } from 'react';

const CustomizedXAxisTick = (props: any) => {
    const { x, y, payload } = props;
  
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={20}
          textAnchor={payload.value === "Today" ? "start" : "end"}
          fill="#666"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  export default CustomizedXAxisTick;