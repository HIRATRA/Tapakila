import { LoginForm } from "@/components/auth/login-form";
import Spinner from "@/components/svg/spinner";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <Suspense
      fallback={
        <div className="text-white">
          <Spinner />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
