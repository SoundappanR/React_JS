import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export function APIDemo() {
  const [post, setPost] = useState([]);
  const [count, setCount] = useState(1);

  const [filterData, setfilterData] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/posts/${count}`)
    //   .then((data) => setPost(data.data));
    axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
      setPost([...data.data]);
      setfilterData([...data.data]);
    });
  }, []);

  useEffect(() => {
    let filteredData = post.filter((name) => name.title.includes(search));
    setfilterData([...filteredData]);
  }, [search]);

  const sorting = () => {
    let sortData = post.sort((a, b) => a.title.localeCompare(b.title));
    setfilterData([...sortData]);
  };

  return (
    <div>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={sorting}>Sort</button>
      {filterData.map((post) => (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}

      {/* <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <h1>{post.title}</h1>
      <p>{post.body}</p> */}
    </div>
  );
}
