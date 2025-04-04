import { NewVerificationForm } from "@/components/auth/new-verification-form";
import Spinner from "@/components/svg/spinner";
import React, { Suspense } from "react";

const NewVerificationPage = () => {
  return (
    <Suspense
      fallback={
        <div className="text-white">
          <Spinner />
        </div>
      }
    >
      <NewVerificationForm />
    </Suspense>
  );
};

export default NewVerificationPage;
