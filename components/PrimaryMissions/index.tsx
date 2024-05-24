"use client";

import { useState, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { primaryMissions } from "@/assets/mocks/missions";
import { primary } from "@/assets/params";

import MissionCard from "./MissionCard";
import AccordionItem from "../AccordionItem";

const PrimaryMissions = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState(searchParams.get(primary) || "");

  const toggleMission = (id: string) => (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    const newSelected = selected === id ? "" : id;

    setSelected(newSelected);

    const params = new URLSearchParams(searchParams);
    if (newSelected) params.set(primary, newSelected);
    else params.delete(primary);

    replace(`${pathname}?${params}`);
  };

  const isSelected = (id: string) => (selected.includes(id) ? "border" : "");

  return (
    <Suspense>
      {primaryMissions.map((mission, index) => (
        <AccordionItem
          key={index}
          classes={`mb-2 ${isSelected(mission.id)}`}
          title={mission.name}
          onAction={toggleMission(mission.id)}
          actionLabel={isSelected(mission.id) ? "Disattiva" : "Attiva"}
        >
          <MissionCard {...mission} />
        </AccordionItem>
      ))}
    </Suspense>
  );
};

export default PrimaryMissions;
