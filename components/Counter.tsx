"use client";

import { useState, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Button from "./Button";

type Props = {
  name: string;
  search: string;
  classes?: string;
};
const Counter = ({ name, search, classes = "" }: Props) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const [count, setCount] = useState(Number(searchParams.get(search)) || 0);

  const handleCount = (value: number) => () => {
    const newCount = count + value;
    setCount(newCount);

    const params = new URLSearchParams(searchParams);
    params.set(search, newCount.toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <Suspense>
      <div className={`${classes}`}>
        <div className="text-center mb-4">{name}</div>
        <div className="flex items-center justify-center gap-2">
          <Button onClick={handleCount(-1)}>-</Button>
          <div className="w-8 flex items-center justify-center">{count}</div>
          <Button onClick={handleCount(1)}>+</Button>
        </div>
      </div>
    </Suspense>
  );
};

export default Counter;
