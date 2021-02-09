import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../JS/Actions/counterActions";
const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);

  const dispatch = useDispatch();

  return (
    <div>
      <span
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </span>
      <span>{count}</span>
      <span onClick={() => count && dispatch(decrement())}>-</span>
    </div>
  );
};

export default Counter;
