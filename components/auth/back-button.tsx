"use client";

import Link from "next/link";
import { Button } from "../ui/button";

type BackButtonProps = {
  label?: string | undefined;
  link: string;
  href: string;
};

export const BackButton = ({ label, link, href }: BackButtonProps) => {
  return (
    <>
      {label ? (
        <div className="flex gap-1 items-center justify-center w-full">
          <div className="text-xs">{label}</div>
          <Button size="sm" variant="link" className="px-0" asChild>
            <Link href={href}>{link}</Link>
          </Button>
        </div>
      ) : (
        <Button size="sm" variant="link" className="w-full font-normal" asChild>
          <Link href={href}>{link}</Link>
        </Button>
      )}
    </>
  );
};
