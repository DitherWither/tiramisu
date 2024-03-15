"use client";

import { H1 } from "./ui/typography";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
  HFlex,
} from "@ui";
import { signIn, signOut } from "next-auth/react";
import { SITE_NAME } from "~/globals";
import { useEffect, useState } from "react";
import { PatientForm } from "./patient/form";
import { AppointmentForm } from "./appointment/form";

export function SiteHeader() {
  const [showCreatePatient, setShowCreatePatient] = useState(false);
  const [showCreateAppointment, setShowCreateAppointment] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        switch (e.key) {
          case "p":
            setShowCreatePatient(true);
            break;
          case "r":
            setShowCreateAppointment(true);
            break;
          default:
            return;
        }
        e.preventDefault()
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <HFlex className="container h-20 max-w-screen-2xl items-center">
        <h1 className="mr-10 text-4xl font-bold">{SITE_NAME}</h1>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={() => setShowCreatePatient(true)}>
                New Patient
              </MenubarItem>
              <MenubarItem onClick={() => setShowCreateAppointment(true)}>
                New Appointment
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem onClick={() => signOut()}>Sign Out</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </HFlex>
      <PatientForm
        formShow={showCreatePatient}
        setFormShow={setShowCreatePatient}
      />
      <AppointmentForm
        formShow={showCreateAppointment}
        setFormShow={setShowCreateAppointment}
      />
    </header>
  );
}
