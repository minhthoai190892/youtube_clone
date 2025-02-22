"use client";
import { trpc } from "@/trpc/client";
import React from "react";

export default function ClientPage() {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "qweqweqwe",
  });
  return <div>ClientPage {data.greeting}</div>;
}
