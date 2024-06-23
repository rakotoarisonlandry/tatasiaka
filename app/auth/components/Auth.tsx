"use client";
import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

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

  const onSubmit:SubmitHandler<FieldValues> =(data) =>{
    setIseLoading(true)
    if (variant==='REGISTER') {
        //axios Register
    }
    if(variant ==="LOGIN"){
        //NEXTAuth SignIN
    }
  }
  return <div>Auth</div>;
}

export default Auth;
