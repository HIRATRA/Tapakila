import { Suspense } from "react";
import Spinner from "@/components/svg/spinner";
import { NewPasswordForm } from "@/components/auth/new-password-form";

const NewPasswordPage = () => {
  return (
    <Suspense
      fallback={
        <div className="text-white">
          <Spinner />
        </div>
      }
    >
      <NewPasswordForm />
    </Suspense>
  );
};

export default NewPasswordPage;
