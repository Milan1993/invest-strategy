import GoalType from "./components/GoalType";
import GoalTypes from "./components/GoalTypes";
import React from 'react';
import GoalTypeNew from "./components/GoalTypeNew";
import GoalSettings from "./components/GoalSettings/GoalSettings";
import Strategy from "./components/Strategy";
import { Stepper } from "./components/Step/Stepper";
import Header from "./components/Header";
import GlobalStyle from './theme/globalStyles';
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import Backdrop from './components/Backdrop';
import RecommendedPortfolio from './components/RecommendedPortfolio/RecommendedPortfolio'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <header className="App-header"></header>
        {/* <GoalTypeNew linkText="Retirement"/> */}
        {/* <GoalSettings /> */}
        {/* <Strategy isRecommended blendedStrategies={['Fact-Based Strategies','Market Gaude Strategies']}/> */}
        <RecommendedPortfolio />
        {/* <Backdrop>
        </Backdrop> */}
        {/* <Header /> */}
        {/* <Stepper
        showNavigation
        showPrevNext
        steps={[
          { element: (stepProps) => <GoalTypes types={["retirement", "major-purchase", "education", "build-wealth"]} {...stepProps} /> },
          { element: (stepProps) => <GoalType type="major-purchase" {...stepProps} /> },
          { element: (stepProps) => <GoalType type="education" {...stepProps} /> },
          { element: (stepProps) => <GoalType type="education" {...stepProps} /> },
        ]} */}
        {/* /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
