import GoalType from "./components/GoalType";
import GoalTypes from "./components/GoalTypes";
import GoalTypeNew from "./components/GoalTypeNew";
import { Stepper } from "./components/Step/Stepper";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <GoalTypeNew linkText="Retirement"/>
      <Header />
      <Stepper
        showNavigation
        showPrevNext
        steps={[
          { element: (stepProps) => <GoalTypes types={["retirement", "major-purchase", "education", "build-wealth"]} {...stepProps} /> },
          { element: (stepProps) => <GoalType type="major-purchase" {...stepProps} /> },
          { element: (stepProps) => <GoalType type="education" {...stepProps} /> },
          { element: (stepProps) => <GoalType type="education" {...stepProps} /> },
        ]}
      />
    </div>
  );
}



export default App;
