import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

const CATERING_FORM_URL = process.env.NEXT_PUBLIC_ORDER_FORM_URL ?? "";

export default function CateringPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-10">
        <Image
          src="https://cdn.pixabay.com/photo/2015/06/15/20/20/bbq-810545_1280.jpg"
          alt="BBQ catering spread"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-t from-bbq-black/90 to-transparent">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Catering Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Delicious, barrel smoked BBQ for your events, parties, and
            gatherings
          </p>
        </div>
      </div>
      {/* CTA Section */}
      <div className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-muted rounded-xl mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Book Your Next Events?
        </h2>
        <div className="text-xl text-white/80 max-w-2xl mx-auto mb-8 flex flex-col gap-4">
          <p>
            We specialize in Weddings, Family Gatherings, Graduation Parties &
            Corporate Events.
          </p>
          <p>
            Click the button below to fill out our catering request form.
            Catering orders must be placed at least 72 hours in advance.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-bbq-flame hover:bg-bbq-flame/80 text-white text-lg px-8 py-6 h-auto"
        >
          <Link
            href={CATERING_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Request Catering <ExternalLink className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
