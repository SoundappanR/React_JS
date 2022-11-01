import React from "react";
import { useState } from "react";

export function ObjectDemo() {
  //   const [fName, setfName] = useState("");
  //   const [lName, setlName] = useState("");
  const [person, setPerson] = useState({
    fName: "",
    lName: "",
  });
  return (
    <div>
      <div>
        <label htmlFor="fName">FirstName: </label>
        <input
          type="text"
          id="fName"
          value={person.fName}
          onChange={(e) => setPerson({ ...person, fName: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="lName">LastName: </label>
        <input
          type="text"
          id="lName"
          value={person.lName}
          onChange={(e) => setPerson({ ...person, lName: e.target.value })}
        />
      </div>
      <h1>
        {person.fName} {person.lName}
      </h1>
    </div>
  );
}
