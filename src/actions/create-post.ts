"use server";
import { z } from "zod";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/db";
import paths from "@/utils/pathHelpers";
import { revalidatePath } from "next/cache";
import type { Post } from "@prisma/client";
import { CreateFormState } from "@/utils/interfaces";

const createPostSchema = z.object({
  name: z
    .string()
    .min(3)
    .max(100),
  description: z.string().min(10),
});

export async function createPost(
  formState: CreateFormState,
  formData: FormData
): Promise<CreateFormState> {
    const result = createPostSchema.safeParse({
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        });
    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        };
    }
     const session = await auth();
     if (!session || !session.user) {
       return {
         errors: {
           _form: ["You must be signed in to create a post"],
         },
       };
     }
     let post: Post;
    
  //should revalidate topicShow page
  return {
    errors: {
      _form: ["Not implemented"],
    },
  };
}
