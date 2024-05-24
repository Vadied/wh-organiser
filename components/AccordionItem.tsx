"use client";

import { useState } from "react";
import Button from "./Button";

const minusIcon = "-";
const plusIcon = "+";

type Props = {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  classes?: string;
  onToggle?: () => void;
  onAction?: (e: Event) => void;
  actionLabel?: string;
};
const AccordionItem = ({
  classes = "",
  title,
  children,
  isOpen = false,
  onToggle,
  onAction,
  actionLabel = "Azione",
}: Props) => {
  const [extended, setIsExtended] = useState(isOpen);

  const handleClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    setIsExtended(!extended);
    if (onToggle) onToggle();
  };

  return (
    <div
      className={`p-4 shadow-sm cursor-pointer bg-background rounded ${classes}`}
      onClick={handleClick}
    >
      <div className="text-left items-center select-none flex justify-between flex-row">
        <h5 className="flex-1">{title}</h5>

        <div className="flex gap-2 items-center">
          <div className="flex-none">{extended ? minusIcon : plusIcon}</div>
          {onAction && <Button onClick={onAction}>{actionLabel}</Button>}
        </div>
      </div>
      <div
        className={`rounded h-full overflow-auto transition-all duration-500 ease-in ${
          extended ? "max-h-80 p-2 mt-2" : "max-h-0 p-0 mt-0"
        } bg-background-lighter`}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
