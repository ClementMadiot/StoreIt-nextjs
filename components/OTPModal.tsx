"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { sendEmailOTP, verifySecret } from "@/lib/actions/user.actions";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const OTPModal = ({
  email,
  accountId,
}: {
  email: string;
  accountId: string;
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // call the API to verify the OTP
      const sessionId = await verifySecret({ accountId, password });
      if (sessionId) router.push("/");
    } catch (error) {
      console.log("failed to verify OTP", error);
    }
    setIsLoading(false);
  };

  const handleResentOTP = async () => {
    // resend OTP
    await sendEmailOTP({ email });
  };
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent
        className="shad-alert-dialog"
        aria-describedby="otp-description"
      >
        <AlertDialogHeader className="relative flex justify-center">
          <AlertDialogTitle className="h2 text-center">
            Enter your OTP
          </AlertDialogTitle>
          <Image
            src="/assets/icons/close-dark.svg"
            alt="close"
            width={20}
            height={20}
            className="otp-close-button"
            onClick={() => setIsOpen(false)}
          />
          <AlertDialogDescription
            id="otp-description"
            className="subtitle-2 text-center text-light-100"
          >
            We&apos;ve sent a code to{" "}
            <span className="p-1 text-brand">{email}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <InputOTP maxLength={6} value={password} onChange={setPassword}>
          <InputOTPGroup className="shad-otp">
            <InputOTPSlot index={0} className="shad-otp-slot" />
            <InputOTPSlot index={1} className="shad-otp-slot" />
            <InputOTPSlot index={2} className="shad-otp-slot" />
            <InputOTPSlot index={3} className="shad-otp-slot" />
            <InputOTPSlot index={4} className="shad-otp-slot" />
            <InputOTPSlot index={5} className="shad-otp-slot" />
          </InputOTPGroup>
        </InputOTP>

        <AlertDialogFooter>
          <div className="flex w-full flex-col gap-4">
            <AlertDialogAction
              onClick={handleSubmit}
              className="shad-submit-btn h-12"
              type="button"
            >
              Submit
              {isLoading && (
                <Image
                  src={"/assets/icons/loader.svg"}
                  alt="loading"
                  width={24}
                  height={24}
                  className="ml-2 animate-spin"
                />
              )}
            </AlertDialogAction>
            <div className="subtitle-2 text-center text-light-100 mt-2">
              Didn&apos;t get the code?
              <Button
                type="button"
                variant={"link"}
                onClick={handleResentOTP}
                className="pl-1 text-brand"
              >
                Click to resend
              </Button>
            </div>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OTPModal;
