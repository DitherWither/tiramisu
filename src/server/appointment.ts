"use server";

import { type Appointment, type Patient } from "@prisma/client";
import { db } from "./db";

export type { Appointment };

export type AppointmentWithPatient = Appointment & {
    patient: Patient
}

export async function getAllAppointments(): Promise<AppointmentWithPatient[]> {
    return await db.appointment.findMany({
        select: {
            id: true,
            patientId: true,
            patient: true,

            startTime: true,
            endTime: true,
        },
    });
}

export async function createAppointment({ patientId, startTime, endTime }: {patientId: number, startTime: Date, endTime: Date}): Promise<Appointment> {
    // TODO: add validation
    return await db.appointment.create({
        data: {
            patientId,
            startTime,
            endTime
        }
    });
}