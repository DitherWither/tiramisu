"use server";

import { getAllPatients } from "~/server/patient";
import { PatientTable } from "./table";

export async function PatientsView() {
  const patients = await getAllPatients();

  return <PatientTable patients={patients} />;
}
