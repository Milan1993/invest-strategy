import React, { FC } from "react";
import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 50px;
  justify-content: center;
  gap: 10px;

  div {
    width: 100px;
    height: 5px;
    background-color: black;
  }
`;

const LI = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  font-weight: 300;

  div {
    background-color: ${(p) => p.color || "black"};
  }
`;

const CustomLegend = (props: any) =>
  (
    <UL>
      {props?.payload.map((entry: any, index: any) => (
        <LI key={`item-${index}`} color={entry.color}>
          {entry.payload.id === "strongMarket"
            ? "Strong Market"
            : entry.payload.id === "weakMarket"
            ? "Weak Market"
            : entry.value}
          <div></div>
        </LI>
      ))}
    </UL>
  );

export default CustomLegend;
