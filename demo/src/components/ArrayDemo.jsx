import React from "react";

export function ArrayDemo() {
  const names = ["Wolf", "Devil", "Tiger", "Puma"];
  return (
    <div>
      {names.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
}
