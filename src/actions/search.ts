"use server";
import { redirect } from "next/navigation";

export async function search(formData: FormData): Promise<void> {
  const term = formData.get("term");
  if(typeof term !== "string" || !term || term === "Search") {
    redirect("/");
  }
  redirect(`/search?term=${term}`);
}