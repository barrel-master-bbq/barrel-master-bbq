import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { revalidatingSanityFetch } from "@/lib/sanity";
import { cateringPageQuery, externalLinksQuery } from "@/lib/queries";
import { CateringPageType } from "@/types/pages";

export default async function CateringPage() {
  const cateringPage: CateringPageType =
    await revalidatingSanityFetch(cateringPageQuery);
  const externalLinks: { orderFormUrl: string } =
    await revalidatingSanityFetch(externalLinksQuery);

  if (!cateringPage || !externalLinks)
    return <div>Error Loading Catering Page.</div>;
  const { banner, cateringCard } = cateringPage;
  const CATERING_FORM_URL = externalLinks.orderFormUrl;

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-10">
        <Image
          src={banner.imageUrl}
          alt="BBQ catering spread"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-t from-bbq-black/90 to-transparent">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {banner.heading}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">{banner.subheading}</p>
        </div>
      </div>
      {/* CTA Section */}
      <div className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-muted rounded-xl mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">
          {cateringCard.heading}
        </h2>
        <div className="text-xl text-white/80 max-w-2xl mx-auto mb-8 flex flex-col gap-4">
          {cateringCard.description.split("\n").map((text) => (
            <p key={text}>{text}</p>
          ))}
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
            {cateringCard.buttonText} <ExternalLink className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
