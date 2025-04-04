"use client";

import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { LoginSchema } from "@/schemas/login.schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { login } from "@/actions/auth/login.action";
import { CardWrapper } from "@/components/auth/card/card-wrapper";
import { FormError } from "@/components/notifications/form-error";
import { FormSuccess } from "@/components/notifications/form-success";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [showTwoFactor, setShowTwoFactor] = useState(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const callbackUrl = useSearchParams().get("callbackUrl");

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const data = await login(values, callbackUrl);

      if (data?.error) {
        form.reset();
        setError(data?.error);
      }

      if (data?.success) {
        form.reset();
        setSuccess(data?.success);
      }

      if (data?.twoFactor) {
        setShowTwoFactor(true);
      }
    });
  };

  // Manage "OAuthAccountNotLinked" error
  const urlError =
    useSearchParams().get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider."
      : "";

  // Manage password visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <CardWrapper
      headerTitle="Welcome back"
      headerLabel="Login with your Google or GitHub account"
      backButtonLabel="Don't have an account ?"
      backButtonLink="Sign up"
      backButtonHref="/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Two Factor Code</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="123456"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            disabled={isPending}
                            className="peer pe-9"
                            placeholder="jane.doe@example.com"
                            type="email"
                            id="email"
                          />
                          <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
                            <MailIcon size={16} aria-hidden="true" />
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid gap-2">
                        <div className="flex items-center">
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <Button
                            size="sm"
                            variant="link"
                            asChild
                            className="ml-auto px-0 font-normal"
                          >
                            <Link href="/reset">Forgot password ?</Link>
                          </Button>
                        </div>
                        <FormControl>
                          <div className="relative">
                            <Input
                              {...field}
                              disabled={isPending}
                              placeholder="******"
                              id="password"
                              type={isVisible ? "text" : "password"}
                            />

                            <button
                              className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                              type="button"
                              onClick={toggleVisibility}
                              aria-label={isVisible ? "Hide password" : "Show password"}
                              aria-pressed={isVisible}
                              aria-controls="password"
                            >
                              {isVisible ? (
                                <EyeOffIcon size={16} aria-hidden="true" />
                              ) : (
                                <EyeIcon size={16} aria-hidden="true" />
                              )}
                            </button>
                          </div>
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>

          <FormError message={error || urlError} />
          <FormSuccess message={success} />

          <Button disabled={isPending} type="submit" className="w-full">
            {showTwoFactor ? "Confirm" : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
