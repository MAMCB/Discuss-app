'use server';

import { z } from "zod";
import { CreateTopicFormState } from "@/utils/interfaces";
const createTopicSchema = z.object({
  name: z
    .string()
    .min(1)
    .regex(/^[a-zA-Z][a-zA-Z0-9 -+#]+$/, {
      message:
        "Must start with a letter and contain only letters, numbers, spaces, and -+#",
    }),
  description: z.string().min(10),
});



export async function createTopic (formState: CreateTopicFormState,formData: FormData):Promise<CreateTopicFormState> {
    const result = createTopicSchema.safeParse({
        name: formData.get("name") as string,
        description: formData.get("description") as string,
    });
    if(!result.success){
        
        return {
            errors: result.error.flatten().fieldErrors
        };
    }
   
    
    //should revalidate home page
    return {
        errors:{}
    }
};