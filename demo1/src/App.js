// import { Counter } from "./Components/Counter";
// import { SignUp } from "./Components/SignUp";
// import { Skills } from "./Components/Skills/Skills";
// import { Counter } from "./Components/Counter/Counter";
import { Counter2 } from "./Components/Counter2/Counter2";
import React, { useState } from "react";

export function App() {
  // const skills = ["HTML", "CSS", "Javascript"];
  const [count, setCount] = useState(0);
  const handlecount = () => {
    setCount((prev) => prev + 1);
  };
  const handleDec = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <SignUp /> */}
      {/* <Skills skills={skills} /> */}
      <Counter2 count={count} handlecount={handlecount} handleDec={handleDec} />
      <button onClick={handlecount}>Parent</button>
    </div>
  );
}
