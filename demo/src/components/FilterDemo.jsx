import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export function FilterDemo() {
  const [names, setNames] = useState(["Wolf", "Devil", "Tiger", "Puma"]);
  const [filternames, setfilterNames] = useState([
    "Wolf",
    "Devil",
    "Tiger",
    "Puma",
  ]);

  const [search, setSearch] = useState("");

  // Either props or state changes useEffect will call
  useEffect(() => {
    let filteredData = names.filter((name) => name.includes(search));
    setfilterNames([...filteredData]);
  }, [search]);
  return (
    <div>
      <h1>FilterDemo</h1>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filternames.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
}
