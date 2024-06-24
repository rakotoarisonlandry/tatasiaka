"use client";

import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/inputs/Input";
import Button from "../../components/Button";
import { BsGithub, BsGoogle } from "react-icons/bs";
import clsx from "clsx";
import AuthSocialButton from "./AuthSocialButton";
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
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        {variant === "REGISTER" && (
          <Input label="name" register={register} id="name" errors={errors} />
        )}
        <Input
          label="Email"
          type="email"
          register={register}
          id="email"
          errors={errors}
          disabled={isLoading}
        />
        <Input
          label="Password"
          type="password"
          register={register}
          id="password"
          errors={errors}
          disabled={isLoading}
        />
        <Button disabled={isLoading} fullwidth type="submit">
          {variant === "LOGIN" ? "Sign in " : "Register"}
        </Button>
      </form>
      <div className="mt-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-400" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white p-2 text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <AuthSocialButton
            icon={BsGithub}
            onclick={() => socialAction("github")}
          />
          <AuthSocialButton
            icon={BsGoogle}
            onclick={() => socialAction("github")}
          />
        </div>
      </div>
      <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
        <div>
          {variant === "LOGIN"
            ? "New to TATASIAKA?"
            : "already have an account?"}
        </div>
        <div onClick={toogleVariant} className="underline cursor-pointer">
          {variant === "LOGIN" ? "Create an account" : "Login"}
        </div>
      </div>
    </div>
  );
}

export default Auth;
