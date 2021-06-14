import type { Component } from "solid-js";
import Counter from "./Counter";

const App: Component = () => {
  return (
    <div>
      <p class="text-4xl text-green-700 text-center py-20">Hello ttailwind!</p>
      <Counter initial={0}></Counter>
    </div>
  );
};

export default App;
