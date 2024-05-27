'use client';

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";
import {FormButtonProps} from "@/utils/interfaces";

export default function FormButton({children}: FormButtonProps){
    const {pending} = useFormStatus();
    return (
        <Button type="submit" isLoading={pending}>
            {children}
        </Button>
    );
}