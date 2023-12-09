"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const baseUrl = "http://localhost:3000/api";

export type DestinationState = {
  errors?: {
    country?: string[];
    city?: string[];
    price?: string[];
    description?: string[];
    score?: string[];
  };
  message?: string | null;
};

const DestinationFormSchema = z.object({
  id: z.string(),
  country: z
    .string({
      invalid_type_error: "Please enter a country",
    })
    .min(3, { message: "Must be 3 or more characters long" }),
  city: z
    .string({
      invalid_type_error: "Please enter a city",
    })
    .min(3, { message: "Must be 2 or more characters long" }),
  price: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." }),
  description: z
    .string({
      invalid_type_error: "Please enter a description",
    })
    .min(5, { message: "Must be 5 or more characters long" }),
  score: z.coerce
    .number()
    .gte(0, { message: "Please enter a score greater or equal than 0." })
    .lte(10, { message: "Please enter a score less or equal than 10." }),
});

const CreateDestination = DestinationFormSchema.omit({ id: true });

export async function createDestination(
  prevState: DestinationState,
  formData: FormData
) {
  const validatedFields = CreateDestination.safeParse({
    country: formData.get("country"),
    city: formData.get("city"),
    price: formData.get("price"),
    description: formData.get("description"),
    score: formData.get("score"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Destination.",
    };
  }

  try {
    await fetch(`${baseUrl}/destination`, {
      method: "POST",
      body: JSON.stringify(validatedFields.data),
      headers: {
        "Content-type": "application/json",
      },
      cache: 'no-store'
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Destination.",
    };
  }
  revalidatePath("/admin/destinations");
  redirect("/admin/destinations");
}

const UpdateDestination = DestinationFormSchema.omit({ id: true });

export async function editDestination(
  id: string,
  prevState: DestinationState,
  formData: FormData
) {
  const validatedFields = UpdateDestination.safeParse({
    country: formData.get("country"),
    city: formData.get("city"),
    price: formData.get("price"),
    description: formData.get("description"),
    score: formData.get("score"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Destination.",
    };
  }

  try {
    await fetch(`${baseUrl}/destination/${id}`, {
      method: "PATCH",
      body: JSON.stringify(validatedFields.data),
      headers: {
        "Content-type": "application/json",
      },
      cache: 'no-store'
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Update Destination.",
    };
  }

  revalidatePath("/admin/destinations");
  redirect("/admin/destinations");
}
