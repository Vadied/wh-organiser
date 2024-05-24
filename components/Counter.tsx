import { useState } from "react";

type Props = {
  name: string;
  startingValues?: number[];
};
const Counter = ({ name, startingValues = [0, 0] }: Props) => {
  const [count1, setCount1] = useState(startingValues[0]);
  const [count2, setCount2] = useState(startingValues[1]);
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
