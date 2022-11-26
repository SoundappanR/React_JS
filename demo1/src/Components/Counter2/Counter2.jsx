import React from "react";

export function Counter2(props) {
  return (
    <div>
      <h1>Counter2</h1>
      <p>{props.count}</p>
      {props.handlecount && (
        <button onClick={props.handlecount}>ChildPlus</button>
      )}
      {props.handleDec && <button onClick={props.handleDec}>ChildMinus</button>}
    </div>
  );
}
