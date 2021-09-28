import React from "react";
import { increment, decrement, incrementByAmount, reset } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="increment value"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
      <button
        aria-label="increment value"
        onClick={() => dispatch(incrementByAmount(3))}
      >
        increment by 3
      </button>
      {count}
      <button
        aria-label="decrement value"
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
      <button aria-label="reset value" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
