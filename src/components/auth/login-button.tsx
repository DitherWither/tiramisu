"use client";

import { signIn } from "next-auth/react";
import { Button } from "@ui";

export function LoginButton() {
    return (
        <Button onClick={() => signIn()}>Sign In</Button>
    )
}