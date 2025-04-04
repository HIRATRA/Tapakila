"use client";

import { logout } from "@/actions/auth/logout.action";

type LogoutFormProps = {
  children: React.ReactNode;
};

export const LogoutForm = ({ children }: LogoutFormProps) => {
  const handleLogout = async () => {
    await logout();

    window.location.assign("/login");
  };

  return <form action={handleLogout}>{children}</form>;
};
