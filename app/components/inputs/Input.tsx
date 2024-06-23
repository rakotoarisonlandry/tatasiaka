"use client";
import clsx from "clsx";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import React from "react";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldError;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900 "
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(`form-input block w-full rounded-lg py-1.5 text-gray-900 shqdow-sm focus:ring-[#BB15CF] focus:border-[#BB15CF] sm:text-sm sm:leading-6`,errors[id] && "border-red-500",disabled && "opacity-50 cursor-default")}
        />
      </div>
    </div>
  );
};

export default Input;
