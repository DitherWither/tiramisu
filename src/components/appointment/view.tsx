"use server";

import { getAllAppointments } from "~/server/appointment";
import { AppointmentTable } from "./table";

export async function AppointmentView() {
  let appointments = await getAllAppointments();

  return <AppointmentTable appointments={appointments} />;
}
