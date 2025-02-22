import React from "react";
interface PageProps {
  params: {
    videoId: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { videoId } = await params;
  return <div>Page Feed: {videoId}</div>;
}
