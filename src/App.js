import GoalType from "./components/GoalType";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <GoalType type="retirement"/>
      <GoalType type="major-purchase"/>
      <GoalType type="education"/>
      <GoalType type="build-wealth"/>
    </div>
  );
}

export default App;
