/* eslint-disable react/no-unescaped-entities */
"use client"

/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/no-contradicting-classname */
import React from "react"
import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { Input as NextuiInput } from "@nextui-org/react"
import { Eye, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"
import FrameComponent from "@/components/signup/frame-component"
import { AspectRatio } from "@/registry/default/ui/aspect-ratio"
import { Button, buttonVariants } from "@/registry/default/ui/button"
import { Checkbox } from "@/registry/default/ui/checkbox"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

import { UserAuthForm } from "../examples/authentication/components/user-auth-form"

const ForgotPasswordStepOne: NextPage = () => {
  const [isVisiblePassword, setIsVisiblePassword] = React.useState(true)
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    React.useState(true)
  const togglePasswordVisibility = () =>
    setIsVisiblePassword(!isVisiblePassword)
  const toggleConfirmPasswordVisibility = () =>
    setIsVisibleConfirmPassword(!isVisibleConfirmPassword)

  return (
    <div className="flex h-auto w-full flex-col-reverse items-start justify-start space-y-10 lg:mb-0 lg:h-[69vh] lg:flex-row lg:items-start lg:items-center lg:justify-start lg:justify-center">
      <div className="relative mt-10 flex size-full h-auto items-center justify-center lg:m-0 lg:w-3/5 lg:rounded-sm">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/rectangle-12911.png"
            alt="Image"
            fill={true}
            className="object-cover"
          />
        </AspectRatio>
        <div className="absolute bottom-0 left-0 flex h-[30%] max-h-[150px] w-full items-center justify-center bg-purple-800 bg-opacity-0 bg-clip-padding text-3xl font-bold backdrop-blur-3xl">
          Ustudy For All
        </div>
      </div>
      <div className="flex h-auto w-full items-center justify-center lg:m-0 lg:h-full lg:flex-1">
        <div className="mx-auto grid w-4/5 min-w-[300px] max-w-[550px] gap-5">
          <h1 className="text-center text-26xl font-bold">Check you Inbox!</h1>
          <div className="my-10 grid min-w-full gap-2 text-center">
            <h1 className="flex flex-col items-center justify-center font-bold">
              We’ve sent recover password link to
              <span className="text-[#804DFE]">*****zov01@gmail.com</span>
            </h1>
            <p className="text-balance text-muted-foreground">
              Check your email to recover the password
            </p>
          </div>
          <div className="flex w-full items-center justify-center">
            <Link href="/forgot-password-step-two">
              <Button
                variant={"outline"}
                type="submit"
                className="mx-auto w-64"
              >
                Go to Login page
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordStepOne
