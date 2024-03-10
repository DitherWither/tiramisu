"use server";

import { db } from "./db";


export async function createPatient(
    { firstName, lastName, mobileNumber, age }: { firstName: string, lastName: string, mobileNumber: string, age: number }
): Promise<{ id: string, firstName: string, lastName: string, mobileNumber: string, age: number }> {
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