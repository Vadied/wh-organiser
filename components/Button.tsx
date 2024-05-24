"use client";

const getColor = (color: string) => {
  if (color == "danger") return "bg-red-500 text-white";

  if (color == "success") return "bg-teal-500 text-white";

  if (color == "secondary") return "bg-background-light text-white";

  return "bg-background-lighter text-white";
};

type Props = {
  children: React.ReactNode;
  onClick?: (e: Event) => void;
  disabled?: boolean;
  type?: "primary" | "secondary";
  classes?: string;
};
const Button = ({
  children,
  onClick,
  disabled = false,
  type = "primary",
  classes = "",
}: Props) => {
  const handleClick = (e: any) => {
    if (disabled || !onClick) return;
    
    e.preventDefault();
    e.stopPropagation();
    onClick(e);
  };

  return (
    <button
      className={`h-12 rounded-lg px-5 flex justify-center items-center ${classes} ${getColor(
        type
      )}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
export default Button;
