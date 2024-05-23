"use client";

const minusIcon = "-";
const plusIcon = "+";

type Props = {
  title: string;
  content: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
};
const AccordionItem = ({ title, content, isOpen, onClick }: Props) => {

  return (
    <div
      className="p-4 shadow-sm cursor-pointer bg-white bg-background mb-4 rounded"
      onClick={onClick}
    >
      <div className="mb-2 text-left items-center select-none flex justify-between flex-row">
        <h5 className="flex-1">{title}</h5>
        <div className="flex-none">{isOpen ? minusIcon : plusIcon}</div>
      </div>
      <div
        className={`rounded p-2 overflow-hidden transition-[max-height] duration-500 ease-in ${
          isOpen ? "max-h-80" : "max-h-0"
        } bg-background-lighter`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
