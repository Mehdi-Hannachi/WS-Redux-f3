import React from "react";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addition } from "../JS/Actions/sumActions";

const Sum = () => {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const sum = useSelector((state) => state.sumReducer.sum);

  const dispatch = useDispatch();

  return (
    <div>
      <input type="number" onChange={(e) => setVal1(e.target.value)} />
      <input type="number" onChange={(e) => setVal2(e.target.value)} />
      <button onClick={() => dispatch(addition(+val1, +val2))}>
        calculate
      </button>
      <span>{sum}</span>
    </div>
  );
};

export default Sum;
