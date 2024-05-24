"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { gambits } from "@/assets/mocks/missions";
import { gambit } from "@/assets/params";

import AccordionItem from "./AccordionItem";
import Button from "./Button";

const SelectGambit = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState(searchParams.get(gambit) || "");
  const [hidden, setHidden] = useState("");

  const toggleMission = (id: string) => (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    const newSelected = selected === id ? "" : id;

    setSelected(newSelected);

    const params = new URLSearchParams(searchParams);
    if (newSelected) params.set(gambit, newSelected);
    else params.delete(gambit);

    replace(`${pathname}?${params}`);
  };

  const isSelected = (id: string) => (selected.includes(id) ? "border" : "");

  const hideRandom = () => {
    const index = Math.floor(Math.random() * (gambits.length - 1) + 1);
    const id = gambits[index].id;
    setHidden(id);
  };

  const reset = () => {
    setHidden("");
    setSelected("");
    const params = new URLSearchParams(searchParams);
    params.delete(gambit);
    replace(`${pathname}?${params}`);
  };

  return (
    <>
      {!hidden && (
        <Button classes="mb-2 w-full" onClick={hideRandom}>
          Nascondi Random
        </Button>
      )}
      {hidden && (
        <Button classes="mb-2 w-full" onClick={reset}>
          Reset
        </Button>
      )}

      {gambits
        .filter(({ id }) => !hidden || id !== hidden)
        .map(({ id, name, rule }) => (
          <AccordionItem
            key={id}
            classes={`mb-2 ${isSelected(id)}`}
            title={name}
            onAction={toggleMission(id)}
            actionLabel={isSelected(id) ? "Disattiva" : "Attiva"}
          >
            {rule}
          </AccordionItem>
        ))}
    </>
  );
};

export default SelectGambit;
