"use client";

import { H1 } from "./ui/typography";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
  VFlex,
} from "@ui";
import { signIn, signOut } from "next-auth/react";
import { SITE_NAME } from "~/globals";
import { useState } from "react";
import { PatientForm } from "./patient-form";

export function SiteHeader() {
  const [showCreatePatient, setShowCreatePatient] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <VFlex className="container h-20 max-w-screen-2xl items-center">
        <H1 className="mr-10">{SITE_NAME}</H1>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={() => setShowCreatePatient(true)}>
                New Patient
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem onClick={() => signOut()}>Sign Out</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </VFlex>
      <PatientForm
        formShow={showCreatePatient}
        setFormShow={setShowCreatePatient}
      />
    </header>
  );
}
