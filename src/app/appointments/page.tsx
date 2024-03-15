"use server";

import { H1 } from "@ui";
import { AppointmentTable } from "~/components/appointment/table";
import { PatientTable } from "~/components/patient/table";
import { getAllAppointments } from "~/server/appointment";

export default async function PatientsPage() {
  const appointments = await getAllAppointments();
  return (
    <>
      <H1>Appointments</H1>
      <AppointmentTable appointments={appointments} />
    </>
  );
}