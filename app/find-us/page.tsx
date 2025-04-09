import CalendarPage from "@/components/CalendarPage";
import MapWrapper from "@/components/MapWrapper";

const { MENU_API_URL = "" } = process.env;

async function getLocation() {
  const res = await fetch(`${MENU_API_URL}?type=location`, {
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
    <section className="grid md:grid-cols-2 gap-8 px-4 py-8">
      {/* Map Section */}
      <article className="text-center max-w-xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-2">Current Location</h1>
        <p className="text-xl mb-4">
          Find us today at{" "}
          <span className="font-semibold">
            {location_name ?? "our next stop"}
          </span>
        </p>

        <MapWrapper address={address} name={location_name} />

        <p className="mt-6 text-md italic text-muted-foreground">
          No frills, no fuss—just darn good BBQ, ready when you are!
        </p>

        <div className="mt-6">
          <p className="text-lg">{address}</p>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date(updated).toLocaleString()}
          </p>
        </div>
      </article>

      <CalendarPage />
    </section>
  );
}
