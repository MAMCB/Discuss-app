"use client";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { createTopic } from "@/actions";
import FormButton from "../common/form-button";

import { useFormState } from "react-dom";

export default function TopicCreateForm() {
  const [formState, action] = useFormState(createTopic, { errors: {} });

  return (
    <>
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
                isInvalid={!!formState.errors.description} //the double negation (!!) is used to convert the value to a boolean
                errorMessage={formState.errors.description?.join(", ")}
              />
              {formState.errors._form ? (
                <div className=" rounded p-2 bg-red-200 border-red-400">
                  {formState.errors._form.join(", ")}
                </div>
              ) : null}
             <FormButton>Create Topic</FormButton>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </>
  );
}
