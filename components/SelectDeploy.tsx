"use client";

import { useState, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { deployments } from "@/assets/mocks/missions";
import { deploy } from "@/assets/params";

import AccordionItem from "./AccordionItem";
import Button from "./Button";
import Image from "next/image";

const SelectDeploy = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState(searchParams.get(deploy) || "");
  const [hidden, setHidden] = useState("");

  const toggleMission = (id: string) => (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    const newSelected = selected === id ? "" : id;

    setSelected(newSelected);

    const params = new URLSearchParams(searchParams);
    if (newSelected) params.set(deploy, newSelected);
    else params.delete(deploy);

    replace(`${pathname}?${params}`);
  };

  const isSelected = (id: string) => (selected.includes(id) ? "border" : "");

  const selectRandom = () => {
    const index = Math.floor(Math.random() * deployments.length);
    const id = deployments[index].id;
    setSelected(id);
    const params = new URLSearchParams(searchParams);
    params.set(deploy, id);
    replace(`${pathname}?${params}`);
  };

  return (
    <Suspense>
      <Button classes="mb-2 w-full" onClick={selectRandom}>
        Seleziona Random
      </Button>

      {deployments
        .filter(({ id }) => !hidden || id !== hidden)
        .map(({ id, name, field }) => (
          <AccordionItem
            key={id}
            classes={`mb-2 ${isSelected(id)}`}
            title={name}
            onAction={toggleMission(id)}
            actionLabel={isSelected(id) ? "Disattiva" : "Attiva"}
          >
            <Image
              key={id}
              alt={field}
              src={`/img/fields/${field}`}
              width={400}
              height={400}
            />
          </AccordionItem>
        ))}
    </Suspense>
  );
};

export default SelectDeploy;
