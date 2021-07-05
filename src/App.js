import GoalType from "./components/GoalType";
import { Stepper } from "./components/Step/Stepper";
import "./App.css";

const Step = ({
  goNextStep,
  goPreviousStep,
  isFirst,
  isLast,
  step,
}) => {
  return (
    <div className="step">
      <div className="step-body">IM THE STEP {step}</div>
      <div className="step-actions">
        {/* If we are in the Step 1, we cannot go back, so we disable this */}
        <button
          className="step-button"
          disabled={isFirst}
          onClick={goPreviousStep}
        >
          GO PREVIOUS
        </button>
        {/* Same but with the last step */}
        <button className="step-button" disabled={isLast} onClick={goNextStep}>
          GO NEXT
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      {/* <GoalType type="retirement"/>
      <GoalType type="major-purchase"/>
      <GoalType type="education"/>
      <GoalType type="build-wealth"/> */}
      <Stepper
        steps={[
          {
            title: "I'm the step 1",
            // Render whatever you want here, we will improve this later
            element: stepProps => <Step {...stepProps} />,
          },
          {
            title: "I'm the step 2",
            element: stepProps => <Step {...stepProps} />,
          },
          {
            title: "I'm the step 3",
            element: stepProps => <Step {...stepProps} />,
          },
        ]}
      />
    </div>
  );
}



export default App;
