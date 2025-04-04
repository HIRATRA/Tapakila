"use client";

import React, { useCallback, useEffect, useState } from "react";
import { CardWrapper } from "./card/card-wrapper";
import Spinner from "../svg/spinner";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/auth/new-verification.action";
import { FormError } from "../notifications/form-error";
import { FormSuccess } from "../notifications/form-success";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(async () => {
    if (!token) {
      setError("Token not found !");
      return;
    }

    try {
      const data = await newVerification(token);
      setError(data?.error);
      setSuccess(data?.success);
    } catch {
      setError("Something went wrong !");
    }
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerTitle="Verification email"
      headerLabel="Confirming your email"
      backButtonLink="Back to login"
      backButtonHref="/login"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        {!success && !error && <Spinner />}
        <FormError message={error} />
        <FormSuccess message={success} />
      </div>
    </CardWrapper>
  );
};
