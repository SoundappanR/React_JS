import React, { useState } from "react";
import { Button } from "../Button";
export function Counter() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h1>Count = {count}</h1>
      <div>
        <input
          type="number"
          name="count"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </div>

      <Button btnFn={increase} name="increase" bgColor="coral"></Button>
      <Button btnFn={decrease} name="decrease" bgColor="green"></Button>

      <button onClick={() => setCount(number)}>Set</button>

      {/* <button onClick={() => increase()}>increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>decrement</button> */}
    </div>
  );
}
