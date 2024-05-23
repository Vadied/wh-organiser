"use client";

import { primaryMissions } from "@/assets/mocks/missions";
import MissionCard from "./MissionCard";
import AccordionItem from "../AccordionItem";
import { useState } from "react";

const PrimaryMissions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {primaryMissions.map((mission, index) => (
        <AccordionItem
          key={index}
          title={mission.name}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        >
          <MissionCard {...mission} />
        </AccordionItem>
      ))}
    </>
  );
};

export default PrimaryMissions;
