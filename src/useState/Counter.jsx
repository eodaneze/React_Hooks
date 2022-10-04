import React, { useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => setCount(count - 1);

  let colors = "#000";
  if (count < 0) {
    colors = "#f00";
  }
  return (
    <React.Fragment>
      <div className="main">
        <button className="btn btn-success" onClick={incrementCount}>
          +
        </button>
        <span className="h4 mx-3" style={{ color: colors }}>
          {count}
        </span>
        <button className="btn btn-danger" onClick={decrementCount}>
          -
        </button>
        <br />
        <br />
        <Link
          to={"/state"}
          className="btn btn-outline-dark text-light text-decoration-none"
        >
          State
        </Link>
      </div>
    </React.Fragment>
  );
};
export default Counter;
