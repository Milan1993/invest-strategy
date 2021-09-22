import React, { FC } from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: gray;
  display: grid;
  padding: 20px;
  gap: 20px;
  box-sizing: border-box;
  grid-template-rows: auto;
  grid-template-areas: 
    "left center center right"
    "left center center right"
    ".... center center ......"
    ".... center center .....";

  .leftSide,
  .center,
  .rightSide {
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 100%;
  }

  .leftSide {
      grid-area: left;
  }
  .center {
    grid-area: center;
  }
  .rightSide {
    grid-area: right;
  }

  @media only screen and (max-width: 796px) {
    grid-template-areas: 
        "left right"
        "left right"
        "center center"
        "center center";
  }
  @media only screen and (max-width: 480px) {
    grid-template-areas: 
        "left"
        "right"
        "center";
  }
`;

interface IProps {}

const Dashboard: FC<IProps> = () => {
  return (
    <Main>
      {/* grid-template-areas: "left center right"
                     "left center right"
                     ". center ."; */}

      <div className="leftSide">Left</div>
      <div className="center landscape">Center</div>
      <div className="rightSide ">Right</div>
    </Main>
  );
};

export default Dashboard;
