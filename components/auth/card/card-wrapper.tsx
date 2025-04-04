"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Header } from "@/components/auth/card/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

type CardWrapperProps = {
  children: React.ReactNode;
  headerTitle: string;
  headerLabel: string;
  backButtonLabel?: string;
  backButtonLink: string;
  backButtonHref: string;
  showSocial?: boolean;
};

export const CardWrapper = ({
  children,
  headerTitle,
  headerLabel,
  backButtonLabel,
  backButtonLink,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header title={headerTitle} label={headerLabel} />
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-6">
          {showSocial && (
            <>
              <Social />
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-[#18181B] px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </>
          )}

          {children}
        </div>
      </CardContent>

      <CardFooter>
        <BackButton
          link={backButtonLink}
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
};
