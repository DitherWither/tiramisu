"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  HFlex,
  Input,
  VFlex,
} from "@ui";
import { useEffect, useState } from "react";
import { createPatient } from "~/server/patient";

export function PatientForm({ formShow, setFormShow }: { formShow: boolean, setFormShow: (show: boolean) => void }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [age, setAge] = useState(0);

  async function create() {
    let patient = await createPatient({ firstName, lastName, mobileNumber, age });
    console.log(patient);
    setFormShow(false);
  }

  return (
    <Dialog open={formShow} onOpenChange={setFormShow}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Patient</DialogTitle>
        </DialogHeader>
        <HFlex className="gap-4">
          <VFlex className="gap-4">
            <Input
              placeholder="First Name"
              onKeyDown={(e) =>
                setFirstName((e.target as HTMLInputElement).value)
              }
            />
            <Input
              placeholder="Last Name"
              onKeyDown={(e) =>
                setLastName((e.target as HTMLInputElement).value)
              }
            />
          </VFlex>
          <Input
            placeholder="Mobile Number"
            type="tel"
            onKeyDown={(e) =>
              setMobileNumber((e.target as HTMLInputElement).value)
            }
          />
          <Input
            placeholder="Age"
            type="number"
            onKeyDown={(e) =>
              setAge(+(e.target as HTMLInputElement).value)
            }
          />
        </HFlex>
        <DialogFooter>
          <Button onClick={create}>New Patient</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
