"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "@ui";

export function LogoutButton() {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
}
