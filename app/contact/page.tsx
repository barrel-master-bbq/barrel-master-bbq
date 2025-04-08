export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>

      <p className="text-lg mb-6">
        Barrel Master BBQ delivers smoked meats straight to your favorite
        brewery taproom. Want to talk BBQ? Drop us a line.
      </p>

      <div className="flex flex-col items-center gap-4 text-lg">
        <a
          href="mailto:tom@barrelmasterbbq.com"
          className="text-blue-600 underline hover:text-blue-800"
        >
          tom@barrelmasterbbq.com
        </a>

        <a
          href="tel:3037208821"
          className="text-blue-600 underline hover:text-blue-800"
        >
          (303) 720-8821
        </a>
      </div>

      <p className="mt-10 text-md text-gray-600 italic">
        No frills, no fuss—just darn good BBQ, ready when you are!
      </p>
    </section>
  );
}
