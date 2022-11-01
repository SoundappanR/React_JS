import React, { useState } from "react";
import { Button } from "./Button";
export function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h1>Count = {count}</h1>
      <Button btnFn={increase} name="increase" bgColor="coral"></Button>
      <Button btnFn={decrease} name="decrease" bgColor="green"></Button>
      {/* <button onClick={() => increase()}>increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>decrement</button> */}
    </div>
  );
}
