import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

const AuthForm = () => {
  return (
    <div className="bg-my-base">
      <Link href="/auth/login">
        <Button className="text-lg w-52">Login</Button>
      </Link>
      <Link href="/auth/register">
        <Button className="text-lg w-52">register</Button>
      </Link>
    </div>
  );
};

export default AuthForm;
