"use server";

import { z } from "zod";
import { auth } from "@/auth";
import { CreateFormState } from "@/utils/interfaces";
import type { Topic } from "@prisma/client";
import { redirect } from "next/navigation";
import { db } from "@/db";
import paths from "@/utils/pathHelpers";
import { revalidatePath } from "next/cache";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(1)
    .regex(/^[a-z-]+$/, {
      message:
        "Must be lowercase letters and hyphens only (no spaces or special characters)",
    }),
  description: z.string().min(10),
});

export async function createTopic(
  formState: CreateFormState,
  formData: FormData
): Promise<CreateFormState> {
  const result = createTopicSchema.safeParse({
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
        _form: ["You must be signed in to create a topic"],
      },
    };
  }

  let topic: Topic;

  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return { errors: { _form: ["An unknown error occurred"] } };
    }
  }
  //should revalidate home page
  revalidatePath(paths.home());

  redirect(paths.topicShow(topic.slug));
}
