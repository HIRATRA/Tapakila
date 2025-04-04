import { CardWrapper } from "@/components/auth/card/card-wrapper";
import { FaExclamationTriangle } from "react-icons/fa";
import React from "react";

const errorPage = () => {
  return (
    <CardWrapper
      headerTitle="Error"
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/login"
      backButtonLink="Back to login"
    >
      <div className="flex w-full items-center justify-center">
        <FaExclamationTriangle className="h-16 w-16 text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default errorPage;
