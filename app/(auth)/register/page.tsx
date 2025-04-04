import { RegisterForm } from "@/components/auth/register-form";
import Spinner from "@/components/svg/spinner";
import { Suspense } from "react";

const RegisterPage = () => {
  return (
    <Suspense
      fallback={
        <div className="text-white">
          <Spinner />
        </div>
      }
    >
      <RegisterForm />
    </Suspense>
  );
};

export default RegisterPage;
