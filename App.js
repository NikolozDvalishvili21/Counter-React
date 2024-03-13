import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  };

  const decreaseAge = () => {
    setAge(age - 1);
  };

  return (
    <div className="App">
      <span
        className="age"
        style={{ color: age > 0 ? "green" : age === 0 ? "black" : "red" }}
      >
        {age}
      </span>
      <div className="buttons">
        <button onClick={increaseAge}>increase Age</button>
        <button onClick={decreaseAge}>decrease Age</button>
      </div>
    </div>
  );
}

export default App;
