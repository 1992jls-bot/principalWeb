"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data" };
  }

  try {
    // Here you would typically send an email, save to a database, etc.
    // For this example, we'll just log the data to the console.
    console.log("Form submission received:");
    console.log(parsed.data);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate a successful submission
    return { success: true };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
