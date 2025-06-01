import CalendarEmbed from "@/components/CalendarEmbed";
import MapWrapper from "@/components/MapWrapper";
import { currentLocationQuery, findUsPageQuery } from "@/lib/queries";
import { revalidatingSanityFetch } from "@/lib/sanity";
import { FindUsPageType } from "@/types/pages";

export default async function HomePage() {
  const location: {
    address: string;
    locationName: string;
    _updatedAt: number;
  } = await revalidatingSanityFetch(currentLocationQuery);
  const findUsPage: FindUsPageType =
    await revalidatingSanityFetch(findUsPageQuery);

  if (!location || !findUsPage) return <div>Error Loading Find Us.</div>;

  const { address, locationName, _updatedAt } = location;
  const { location: locationCard, calendar } = findUsPage;

  return (
    <section className="grid md:grid-cols-2 gap-8 px-4 py-8">
      {/* Map Section */}
      <article className="text-center max-w-xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-2">{locationCard.heading}</h1>
        <p className="text-xl mb-4">
          {locationCard.subheading}{" "}
          <span className="font-semibold">
            {locationName ?? "our next stop"}
          </span>
        </p>

        <MapWrapper address={address} name={locationName} />

        <p className="mt-6 text-md italic text-muted-foreground">
          {locationCard.tagline}
        </p>

        <div className="mt-6">
          <p className="text-lg">{address}</p>
          <p className="text-sm text-muted-foreground">
            {locationCard.updatedAt} {new Date(_updatedAt).toLocaleString()}
          </p>
        </div>
      </article>

      <article className="text-center max-w-xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-2">{calendar.heading}</h2>
        <p className="text-xl mb-4">{calendar.subheading}</p>
        <CalendarEmbed />
        <p className="mt-6 text-md italic text-muted-foreground">
          {calendar.tagline}
        </p>
      </article>
    </section>
  );
}
