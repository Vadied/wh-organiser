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
      className="p-4 shadow-sm cursor-pointer bg-background mb-4 rounded"
      onClick={onClick}
    >
      <div className="text-left items-center select-none flex justify-between flex-row">
        <h5 className="flex-1">{title}</h5>
        <div className="flex-none">{isOpen ? minusIcon : plusIcon}</div>
      </div>
      <div
        className={`rounded p-2 overflow-hidden transition-all duration-500 ease-in ${
          isOpen ? "max-h-80 p-2 mt-2" : "max-h-0 p-0 mt-0"
        } bg-background-lighter`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
