"use server";

import { H1 } from "@ui";
import { PatientTable } from "~/components/patient/table";
import { getAllPatients } from "~/server/patient";

export default async function PatientsPage() {
  const patients = await getAllPatients();
  return (
    <>
      <H1>Patients</H1>
      <PatientTable patients={patients} />
    </>
  );
}
