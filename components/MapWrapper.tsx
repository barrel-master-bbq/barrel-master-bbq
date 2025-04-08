"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./Loading";

// Dynamically import your OSMMap with SSR disabled
const OSMMap = dynamic(() => import("./Map"), { ssr: false });

export default function MapWrapper({
  address,
  name,
}: {
  address: string;
  name?: string;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <OSMMap address={address} name={name} />
    </Suspense>
  );
}
