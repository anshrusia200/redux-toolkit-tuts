import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
import React, { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incAmount, setIncAmount] = useState(0);
  const addValue = Number(incAmount) || 0;
  const resetAll = () => {
    setIncAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          type="number"
          value={incAmount}
          onChange={(e) => setIncAmount(e.target.value)}
        />
        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))}>
            Add Amount
          </button>
          <button onClick={resetAll}>Reset</button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
