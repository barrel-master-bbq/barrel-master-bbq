"use client";

import { useState } from "react";
import MapLoading from "./Loading";

const CALENDAR_URL = process.env.NEXT_PUBLIC_CALENDAR_URL ?? "";

export default function CalendarEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden border shadow dark:border-muted bg-white">
      {!loaded && <MapLoading />}

      <iframe
        src={CALENDAR_URL}
        width="100%"
        height="100%"
        className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0 absolute top-0 left-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
