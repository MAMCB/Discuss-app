'use client'
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { createTopic } from "@/actions";
import { useSession } from "next-auth/react";
import { useFormState } from "react-dom";



export default function TopicCreateForm() {
    const session = useSession();
    const [formState,action]= useFormState(createTopic,{errors:{}});

  return (
    <>
      {session.data?.user && (
        <Popover placement="left">
          <PopoverTrigger>
            <Button color="primary">Create Topic</Button>
          </PopoverTrigger>
          <PopoverContent>
            <form action={action}>
              <div className="flex flex-col gap-4 p-4 w-80">
                <h3 className="text-lg">Create a topic</h3>
                <Input
                  name="name"
                  label="Name"
                  labelPlacement="outside"
                  placeholder="Name"
                  isInvalid={!!formState.errors.name}
                  errorMessage={formState.errors.name?.join(", ")}
                />
                <Textarea
                  name="description"
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Describe your topic"
                  isInvalid={!!formState.errors.description}//the double negation (!!) is used to convert the value to a boolean
                  errorMessage={formState.errors.description?.join(", ")}
                />
                <Button type="submit">Create</Button>
              </div>
            </form>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
}
