"use client";

import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/inputs/Input";
import clsx from "clsx";
type Variant = "LOGIN" | "REGISTER";
function Auth() {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIseLoading] = useState(false);

  const toogleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIseLoading(true);
    if (variant === "REGISTER") {
      //axios Register
    }
    if (variant === "LOGIN") {
      //NEXTAuth SignIN
    }
  };

  const socialAction = (action: string) => {
    setIseLoading(true);
    //NextAuth Social Login
  };
  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <Input label="email" register={register} id="email" errors={errors}/>
      </form>
    </div>
  );
}

export default Auth;
