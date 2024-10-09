import "./App.css";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>

      <p>
        <span>{count === 0 ? "Today is " : ""}</span>
        <span>{date.toDateString()}</span>
        <span>
          {count > 0
            ? ` (${count} day${count > 1 ? "s" : ""} from today)`
            : count < 0
            ? ` (${Math.abs(count)} day${Math.abs(count) > 1 ? "s" : ""} ago)`
            : ""}
        </span>
      </p>
    </div>
  );
}
