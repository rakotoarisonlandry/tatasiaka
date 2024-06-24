"use client";

import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  fullwidth?: boolean;
  onclick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  fullwidth,
  onclick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onclick}
      type={type}
      disabled={disabled}
      className={clsx(
        `flex justify-center rounded-lg px-4 py-2 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
        disabled && "opacity-50 cursor-default",
        fullwidth && "w-full",
        secondary ? "text-gray-900" : "text-white",
        danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary && !danger && "bg-[#BB15CF] hover:bg-[#4b2050] focus-visible:outline-[#BB15CF]" 
      )}
    >
      {children}
    </button>
  );
};

export default Button;
