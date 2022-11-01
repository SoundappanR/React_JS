import React from "react";

//Named export
export function Props(props) {
  return (
    <div style={{ color: props.color }}>
      Props Demo = {props.count} {props.name}
      <button onClick={() => props.increament(2)}>Increment</button>
      <button onClick={props.decrement} style={{ color: props.color1 }}>
        Decrement
      </button>
    </div>
  );
}
