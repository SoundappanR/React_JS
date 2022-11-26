import React, { useState, useEffect } from "react";

export function Skills({ skills }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 800);
  });
  return (
    <div>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>LoggedIn</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
}
