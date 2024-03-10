"use server";

import { Patient } from "@prisma/client";
import { db } from "./db";

export type { Patient }

export async function createPatient(
    { firstName, lastName, mobileNumber, age }: { firstName: string, lastName: string, mobileNumber: string, age: number }
): Promise<Patient> {
    // TODO: add validation
    return await db.patient.create({
        data: {
            firstName,
            lastName,
            mobileNumber,
            age
        }
    });
}

export async function getAllPatients(): Promise<Patient[]> {
    return await db.patient.findMany();
}