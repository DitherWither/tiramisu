"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Appointment } from "@prisma/client";
import { DataTable, DataTableColumnHeader, createColumn } from "@ui";
import { AppointmentWithPatient } from "~/server/appointment";

export function AppointmentTable({
  appointments,
}: {
  appointments: AppointmentWithPatient[];
}) {
  const columns: ColumnDef<AppointmentWithPatient>[] = [
    createColumn("id", "ID"),
    createColumn("startTime", "Start Time"),
    createColumn("endTime", "End Time"),
    {
      id: "patientName",
      accessorFn: (row) => `${row.patient?.firstName} ${row.patient?.lastName}`,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Patient Name" />
      ),
    },
  ];

  return (
    <div className="p-3">
      <DataTable columns={columns} data={appointments} />
    </div>
  );
}
