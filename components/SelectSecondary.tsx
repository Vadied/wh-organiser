"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { secondaryMissions } from "@/assets/mocks/missions";
import { secondary } from "@/assets/params";

import AccordionItem from "./AccordionItem";
import Button from "./Button";

const SelectSecondary = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState<string[]>(
    searchParams.get(secondary)?.split("-") || []
  );

  const [onlyFixed, setIsFixed] = useState(!!searchParams.get("fixed"));

  const toggleMission = (id: string) => (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    if (selected.length >= 2 && !selected.includes(id)) return;

    const newSelected = selected.includes(id)
      ? selected.filter((s) => s !== id)
      : [...selected, id];
    setSelected(newSelected);

    const params = new URLSearchParams(searchParams);
    params.set(secondary, newSelected.join("-"));
    replace(`${pathname}?${params}`);
  };

  const toggleFixed = () => {
    const params = new URLSearchParams(searchParams);

    if (!onlyFixed) params.set("fixed", "true");
    else params.delete("fixed");

    replace(`${pathname}?${params}`);
    setIsFixed(!onlyFixed);
  };

  const isSelected = (id: string) => (selected.includes(id) ? "border" : "");

  return (
    <>
      <div className="flex justify-end gap-4 items-center">
        <div>Selezionate : {selected.length}/2</div>
        <Button classes="mb-2" onClick={toggleFixed}>
          {onlyFixed ? "Fixed" : "Tactical"}
        </Button>
      </div>
      {secondaryMissions
        .filter(({ isFixed }) => !onlyFixed || isFixed)
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

export default SelectSecondary;
