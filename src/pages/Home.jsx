import React, { useState } from "react";
import "./styles.css";

function Home() {
  // let count = 0;

  let [count, setCount] = useState(0);
  function increase() {
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
  }

  function decrease() {
    setCount((preCount) => preCount - 1);
  }

  function reset() {
    setCount((count = 0));
  }

  let p = `count is ${count}`;

  if (count > 10) {
    p = "more then 10";
  }

  return (
    <div>
      <div className="div">Counter App</div>
      <h3>{count}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrease</button>
      <p>{p}</p>
    </div>
  );
}

export default Home;
