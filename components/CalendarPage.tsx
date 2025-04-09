import CalendarEmbed from "../components/CalendarEmbed";

export default function CalendarPage() {
  return (
    <article className="text-center max-w-xl mx-auto w-full">
      <h2 className="text-4xl font-bold mb-2">Upcoming Stops</h2>
      <p className="text-xl mb-4">
        Where we’re heading next — and when the BBQ drops.
      </p>
      <CalendarEmbed />
      <p className="mt-6 text-md italic text-muted-foreground">
        Pair the perfect pint with smoked perfection.
      </p>
    </article>
  );
}
