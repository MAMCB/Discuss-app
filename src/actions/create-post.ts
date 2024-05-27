"use server";
import { CreateFormState } from "@/utils/interfaces";

export async function createPost(
  formState: CreateFormState,
  formData: FormData
): Promise<CreateFormState> {
  //should revalidate topicShow page
  return {
    errors: {
      _form: ["Not implemented"],
    },
  };
}
