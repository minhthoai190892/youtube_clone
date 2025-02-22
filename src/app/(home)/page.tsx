import { HydrateClient, trpc } from "@/trpc/server";
import ClientPage from "./client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function Home() {
  void trpc.hello.prefetch({ text: "qweqweqwe" });

  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading ....</p>}>
        <ErrorBoundary fallback={<p>Error ....</p>}>
          <ClientPage />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
