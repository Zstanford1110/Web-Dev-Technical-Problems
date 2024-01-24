
// PRACTICE FORMS, INPUTS, AND TRIGGERING REFRESHES IN HOOKS

import './App.css';
import useStateWithHistory from './hooks/useStateWithHistory';

function App() {
  const [
    value, // current value
    setValue, // function to update the value
    goBack, // function to go back to the previous state
    goForward, // function to go forward to the next state
    history, // array of historical values
  ] = useStateWithHistory(10);

  setValue(30);



  return (
    <div className="App">
      <header className="App-header">
        [{history.join(", ")}]
        <br />
        Current Value: {value}
      </header>
    </div>
  );
}

export default App;
