"use client";

import { useEffect, useState } from "react";
import MapLoading from "./Loading";

export default function CalendarEmbed() {
  const [loaded, setLoaded] = useState(false);
  const [calendarUrl, setCalendarUrl] = useState("");

  useEffect(() => {
    fetch("/api/calendarUrl")
      .then((res) => res.json())
      .then(setCalendarUrl);
  }, []);

  if (!calendarUrl.length) return <MapLoading />;

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden border shadow dark:border-muted bg-white">
      {!loaded && <MapLoading />}

      <iframe
        src={calendarUrl}
        width="100%"
        height="100%"
        className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0 absolute top-0 left-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
