"use client";

import { ReactNode, useState } from "react";
import AccordionItem from "./AccordionItem";

type Props = {
  title?: string;
  items: { title: string; content: ReactNode }[];
};
const Accordion = ({ items, title = "" }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => () => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <h2>{title}</h2>
      {items.map(({ title, content }, index) => (
        <AccordionItem
          key={index}
          classes="mb-2"
          title={title}
          isOpen={openIndex === index}
          onClick={handleClick(index)}
        >
          {content}
        </AccordionItem>
      ))}
    </>
  );
};

export default Accordion;
