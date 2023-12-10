"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const baseUrl = "http://localhost:3000/api";

export type ReservationState = {
  errors?: {
    date?: string[];
    completed?: string[];
    employee?: string[];
  };
  message?: string | null;
};

const ReservationFormSchema = z.object({
  id: z.string(),
  date: z
    .string({
      invalid_type_error: "Please enter a date",
    })
    .min(3, { message: "Please enter a date" }),
  destination: z.string({
    invalid_type_error: "Please enter a destination",
  }),
});

const CreateReservation = ReservationFormSchema.omit({ id: true });

export async function createReservation(
  prevState: ReservationState,
  formData: FormData
) {
  const validatedFields = CreateReservation.safeParse({
    date: formData.get("date"),
    destination: formData.get("destination"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Destination.",
    };
  }

  try {
    await fetch(`${baseUrl}/reservation/${validatedFields.data.destination}`, {
      method: "POST",
      body: JSON.stringify({
        date: validatedFields.data.date,
        employee: "currentEmployee",
        completed: false,
      }),
      headers: {
        "Content-type": "application/json",
      },
      cache: "no-store",
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Reservation.",
    };
  }
  revalidatePath("/admin/reservations");
  redirect("/admin/reservations");
}

const UpdateReservation = ReservationFormSchema.omit({ id: true });

export async function editReservation(
  id: string,
  prevState: ReservationState,
  formData: FormData
) {
  const validatedFields = UpdateReservation.safeParse({
    date: formData.get("date"),
    destination: formData.get("destination"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Destination.",
    };
  }

  
  
  try {
    await fetch(`${baseUrl}/reservation/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        ...validatedFields.data,
        employee: "currentEmployee",
        completed: false,
      }),
      headers: {
        "Content-type": "application/json",
      },
      cache: "no-store",
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Update Reservation.",
    };
  }

  revalidatePath("/admin/reservations");
  redirect("/admin/reservations");
}

export async function deleteReservation(id: string) {
  try {
    await fetch(`${baseUrl}/reservation/${id}`, {
      method: "DELETE",
    });
    revalidatePath("/admin/reservations");
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Reservatioin.",
    };
  }
}
