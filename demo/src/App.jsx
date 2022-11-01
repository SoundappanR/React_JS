import React, { useState } from "react";
import "./App.css";
import { Props } from "./Props";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Wolf");

  const decrement = () => {
    setCount(count - 1);
  };
  const increment = (value) => {
    if (count < 10) setCount(count + value);
  };

  // if (count < 10) {
  //   return (
  //     <div className="App">
  //       <h1>count={count}</h1>
  //     </div>
  //   );
  // }
  return (
    <div className="App">
      {count < 10 ? (
        <h1>count={count}</h1>
      ) : (
        <h1>count=Maximum Value reached</h1>
      )}
      <h1>Name={name}</h1>
      <Props
        increament={increment}
        decrement={decrement}
        color={"red"}
        color1={"blue"}
        count={count}
        name={"Wolf"}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => increment(2)}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
