"use client";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};
const Button = ({ children, onClick, disabled = false }: Props) => {
  const handleClick = () => {
    if (disabled) return;
    onClick();
  };

  return (
    <button className="h-12 rounded-lg font-bold px-5 inline-flex items-center" onClick={handleClick}>
      {children}
    </button>
  );
};
export default Button;
