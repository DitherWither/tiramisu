"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Patient } from "~/server/patient";
import { DataTable, DataTableColumnHeader, createColumn } from "@ui";

export function PatientTable({ patients }: { patients: Patient[] }) {
  const columns: ColumnDef<Patient>[] = [
    createColumn("id", "Id"),
    {
      id: "fullName",
      accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Full Name" />
      ),
    },
    createColumn("mobileNumber", "Mobile Number"),
    createColumn("age", "Age"),
  ];

  return (
    <div className="p-3">
      <DataTable columns={columns} data={patients} />
    </div>
  );
}
