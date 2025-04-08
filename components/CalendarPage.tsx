import CalendarEmbed from "../components/CalendarEmbed";

export default function CalendarPage() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-8 text-center">
      <h2 className="text-4xl font-bold mb-2">Upcoming Stops</h2>

      <p className="text-xl mb-4">
        Where we’re heading next — and when the BBQ drops.
      </p>

      <CalendarEmbed />

      <p className="mt-6 text-md italic text-gray-600 dark:text-gray-400">
        Pair the perfect pint with smoked perfection.
      </p>
    </article>
  );
}
