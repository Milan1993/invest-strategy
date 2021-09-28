import React, { FC } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { numberFormatter } from "../../utils";
import CustomizedXAxisTick from "./CustomizedXAxisTick";
import CustomLegend from "./CustomLegend";

const Wrapper = styled.div`
  .recharts-default-tooltip ul > li > span {
    font-weight: 300;
    color: black;
    font-size: 0.7em;
  }
`;

const data = [
  {
    name: "Today",
    "Strong Market": 1000,
    "Average Market": 1000,
    "Weak Market": 1000,
  },
  {
    "Strong Market": 100000,
    "Average Market": 75000,
    "Weak Market": 50000,
  },
  {
    "Strong Market": 180000,
    "Average Market": 135000,
    "Weak Market": 90000,
  },
  {
    "Strong Market": 300000,
    "Average Market": 225000,
    "Weak Market": 150000,
  },
  {
    name: "2041",
    "Strong Market": 450490,
    "Average Market": 375295,
    "Weak Market": 300100,
  },
];

interface IProps {}

const PortfolioChart: FC<IProps> = () => {
  return (
    <Wrapper style={{ paddingLeft: "50px" }}>
      <h1 className="text-heading">Line Chart Using Rechart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart width={730} height={250} data={data}>
          <XAxis
            tickLine={false}
            interval={0}
            tick={<CustomizedXAxisTick />}
            dataKey="name"
          />
          <YAxis
            tickLine={false}
            orientation="right"
            interval="preserveEnd"
            tickFormatter={(tickItem: any) => numberFormatter(tickItem, 1)}
          />
          <CartesianGrid />

          <Area
            id="strongMarket"
            dataKey={(data) => [data["Average Market"], data["Strong Market"]]}
            stroke="#D4EFC1"
            fill="#F5FDF0"
          />
          <Area
            id="weakMarket"
            dataKey={(data) => [data["Weak Market"], data["Average Market"]]}
            stroke="hsl(194, 57%, 75%)"
            fill="hsl(194, 57%, 85%)"
          />
          <Area
            id="avgMarket"
            dataKey="Average Market"
            stroke="#4BC300"
            strokeWidth={3}
            fill="transparent"
          />
          <Legend content={CustomLegend} verticalAlign="bottom" height={36} />
        </AreaChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default PortfolioChart;
