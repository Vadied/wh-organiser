"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";
import { gambits } from "@/assets/mocks/missions";
import { generateRandomNumbers } from "@/js/utils";
import AccordionItem from "./AccordionItem";
import { useState } from "react";
import { Gambit } from "@/types/missions";

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

    params.set("gm", id);

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
            className={
              (id === selected &&
                "border border-color-danger p-2 rounded-md ") ||
              ""
            }
          >
            <AccordionItem title={name} isOpen={true} onClick={setGambit(id)}>
              {rule}
            </AccordionItem>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenerateGambit;
