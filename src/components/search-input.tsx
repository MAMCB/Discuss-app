"use client";

import { useSearchParams } from "next/navigation";
import { Input } from "@nextui-org/react";
import { search } from "@/actions";

export default function SearchInput() {
    const searchParams = useSearchParams();
  return (
    <form action={search}>
      <Input name="term" defaultValue={searchParams.get("term") || "Search"} />
    </form>
  );
  
}