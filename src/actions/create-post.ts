"use server";
import { z } from "zod";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/db";
import paths from "@/utils/pathHelpers";
import { revalidatePath } from "next/cache";
import type { Post } from "@prisma/client";
import type { Topic } from "@prisma/client";
import { CreateFormState } from "@/utils/interfaces";

const createPostSchema = z.object({
  name: z
    .string()
    .min(3)
    .max(100),
  description: z.string().min(10),
  slug:z.string().min(1)
});

export async function createPost(
  formState: CreateFormState,
  formData: FormData
): Promise<CreateFormState> {
  const result = createPostSchema.safeParse({
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    slug: formData.get("slug") as string,
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
  console.log("result", result);
  let topic: Topic | null;

  try {
    topic = await db.topic.findFirst({
      where: {
        slug: result.data.slug,
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
      return {
        errors: {
          _form: ["Topic not found"],
        },
      };
    }
  }
  const topicId = topic!.id;
  console.log("topic", topic);
  console.log("topicId", topicId);

  let post: Post;
  try {
    post = await db.post.create({
      data: {
        title: result.data.name,
        content: result.data.description,
        userId: session.user.id,
        topicId: topicId,
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
  //should revalidate topicShow page
  revalidatePath(paths.topicShow(topic!.slug));
  redirect(paths.postShow(topic!.slug,post.id));
}
