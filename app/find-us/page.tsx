import CalendarPage from "@/components/CalendarPage";
import MapWrapper from "@/components/MapWrapper";

const { LOCATION_API_URL = "" } = process.env;

async function getLocation() {
  const res = await fetch(LOCATION_API_URL, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch location");
  }

  return res.json();
}

export default async function HomePage() {
  const { address, location_name, updated } = await getLocation();

  return (
    <>
      <section className="max-w-2xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Current Location</h1>

        <p className="text-xl mb-4">
          Find us today at{" "}
          <span className="font-semibold">
            {location_name ?? "our next stop"}
          </span>
        </p>

        <MapWrapper address={address} name={location_name} />

        <div className="mt-6">
          <p className="text-lg">{address}</p>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date(updated).toLocaleString()}
          </p>
        </div>

        <p className="mt-6 text-md italic text-muted-foreground">
          No frills, no fuss—just darn good BBQ, ready when you are!
        </p>
      </section>

      <CalendarPage />
    </>
  );
}
