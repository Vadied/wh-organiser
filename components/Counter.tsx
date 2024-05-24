"use client";

import { useState } from "react";
import Button from "./Button";

type Props = {
  name: string;
  value?: number;
  classes?: string;
};
const Counter = ({ name, value = 0, classes = "" }: Props) => {
  const [count, setCount] = useState(value);
  return (
    <div className={`${classes}`}>
      <div className="text-center mb-4">{name}</div>
      <div className="flex items-center justify-center gap-2">
        <Button onClick={() => setCount(count - 1)}>-</Button>
        <div className="w-8 flex items-center justify-center">{count}</div>
        <Button onClick={() => setCount(count + 1)}>+</Button>
      </div>
    </div>
  );
};

export default Counter;
