"use client";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { CreateFormProps } from "@/utils/interfaces";
import FormButton from "../common/form-button";

import { useFormState } from "react-dom";

export default function CreateForm({triggerText,ServerAction,inputPlaceholder="Name",textareaPlaceholder="Description",slug=""}: CreateFormProps) {
  const [formState, action] = useFormState(ServerAction, { errors: {} });


  return (
    <>
      <Popover placement="left">
        <PopoverTrigger>
          <Button color="primary">{triggerText}</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={action}>
            <div className="flex flex-col gap-4 p-4 w-80">
              <h3 className="text-lg">{triggerText}</h3>
              <Input
                name="name"
                label={inputPlaceholder}
                labelPlacement="outside"
                placeholder={inputPlaceholder}
                isInvalid={!!formState.errors.name}
                errorMessage={formState.errors.name?.join(", ")}
              />
              <input
                name="slug"
               type="hidden"
                value={slug}
              />
              <Textarea
                name="description"
                label={textareaPlaceholder}
                labelPlacement="outside"
                placeholder={textareaPlaceholder}
                isInvalid={!!formState.errors.description} //the double negation (!!) is used to convert the value to a boolean
                errorMessage={formState.errors.description?.join(", ")}
              />
              {formState.errors._form ? (
                <div className=" rounded p-2 bg-red-200 border-red-400">
                  {formState.errors._form.join(", ")}
                </div>
              ) : null}
              <FormButton>{triggerText}</FormButton>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </>
  );
}
