import { Component, createState } from "solid-js";

const Counter: Component<{ initial: number }> = (props) => {
  const [state, setState] = createState({ count: props.initial }),
    change = (n: number) => () => {
      setState((s) => ({
        count: s.count + n,
      }));
    };

  return (
    <div>
      <button onClick={change(1)}>+</button>
      <div>{state.count}</div>
      <button onClick={change(-1)}>-</button>
    </div>
  );
};

export default Counter;
