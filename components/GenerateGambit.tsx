"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";
import { gambits } from "@/assets/mocks/missions";
import { generateRandomNumbers } from "@/js/utils";
import { useState } from "react";
import { Gambit } from "@/types/missions";
import { gambit } from "@/assets/params";

const GenerateGambit = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const [showed, setShowed] = useState<Gambit[]>([]);
  const [selected, setSelected] = useState("");

  const generate = () => {
    const filtered = gambits.filter(({ id }) => id !== "1");
    const [index1, index2] = generateRandomNumbers(filtered.length, 2);

    if (filtered.length < 2) return;

    setShowed([filtered[index1], filtered[index2]]);
  };

  const setGambit = (id: string) => () => {
    const params = new URLSearchParams(searchParams);

    params.set(gambit, id);

    replace(`${pathname}?${params}`);
    setSelected(id);
  };

  return (
    <>
      <div className="flex gap-5 mb-4 w-full justify-between">
        <Button onClick={generate}>Genera</Button>
      </div>
      <div className="flex flex-col gap-4">
        {showed.map(({ id, name, rule }) => (
          <div
            key={id}
            className={`p-4 shadow-sm cursor-pointer bg-background rounded mb-4 ${
              (id === selected &&
                "border border-color-danger rounded-md ") ||
              ""
            }`}
            onClick={setGambit(id)}
          >
            <div className="text-left items-center select-none flex justify-between flex-row">
              <h5 className="flex-1">{name}</h5>
              <div className="flex-none">Seleziona</div>
            </div>
            <div
              className={`rounded overflow-auto max-h-80 p-2 mt-2 bg-background-lighter`}
            >
              {rule}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenerateGambit;
