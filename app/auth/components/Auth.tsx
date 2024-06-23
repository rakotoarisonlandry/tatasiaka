"use client";
import React, { useState } from "react";

type Variant = "LOGIN" | "REGISTER";
function Auth() {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  return <div>Auth</div>;
}

export default Auth;
