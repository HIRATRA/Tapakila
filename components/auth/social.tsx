"use client";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

export const Social = () => {
  const callbackUrl = useSearchParams().get("callbackUrl");
  const handleProviderSignIn = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <Button
        variant="outline"
        className="w-full"
        onClick={() => handleProviderSignIn("google")}
      >
        <FcGoogle className="h-5 w-5 mr-2" />
        Login with Google
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => handleProviderSignIn("github")}
      >
        <FaGithub className="h-5 w-5 mr-2" />
        Login with GitHub
      </Button>
    </div>
  );
};
