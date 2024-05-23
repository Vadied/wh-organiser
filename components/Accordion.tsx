"use client";

import { ReactNode, useState } from "react";
import AccordionItem from "./AccordionItem";

type Props = {
  items: { title: string; content: ReactNode }[];
};
const Accordion = ({ items }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
