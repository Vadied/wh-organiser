"use client";

import { useState } from "react";

const minusIcon = "-";
const plusIcon = "+";

type Props = {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  classes?: string;
  onClick?: () => void;
};
const AccordionItem = ({
  classes = "",
  title,
  children,
  isOpen = false,
  onClick,
}: Props) => {
  const [extended, setIsExtended] = useState(isOpen);

  const handleClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (onClick) return onClick();
    setIsExtended(!extended);
  };
  return (
    <div
      className={`p-4 shadow-sm cursor-pointer bg-background rounded ${classes}`}
      onClick={handleClick}
    >
      <div className="text-left items-center select-none flex justify-between flex-row">
        <h5 className="flex-1">{title}</h5>
        <div className="flex-none">{extended ? minusIcon : plusIcon}</div>
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
