import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MenuItem } from "@/types/menu";
import { sanity } from "@/lib/sanity";
import {
  allMenuItemsQuery,
  externalLinksQuery,
  orderPageQuery,
} from "@/lib/queries";
import { OrderPageType } from "@/types/pages";

async function getFeaturedMenu() {
  const menu: MenuItem[] = await sanity.fetch(allMenuItemsQuery);

  const featured = menu.filter((item) => item.featured === true);

  return featured;
}

export default async function OrderPage() {
  const featured = await getFeaturedMenu();
  const orderPage: OrderPageType = await sanity.fetch(orderPageQuery);
  const externalLinks = await sanity.fetch(externalLinksQuery);
  if (!featured || !orderPage || !externalLinks)
    return <div>An error has occurred.</div>;

  const { banner, order, orderCard, featuredMenuSection } = orderPage;
  const GOOGLE_FORM_URL = externalLinks.orderFormUrl;

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-10">
        <Image
          src={banner.imageUrl}
          alt="BBQ spread"
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

      {/* How to Order Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          {order.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {order.steps.map((step, i) => {
            return (
              <Card
                className="bg-muted border-bbq-flame/20 text-white"
                key={step.heading}
              >
                <CardContent className="pt-6">
                  <div className="rounded-full bg-bbq-flame w-12 h-12 flex items-center justify-center mb-4 text-white font-bold text-xl">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.heading}</h3>
                  <p className="text-white/80">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      {/* CTA Section */}
      <div className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-muted rounded-xl mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">
          {orderCard.heading}
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          {orderCard.subheading}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-bbq-flame hover:bg-bbq-flame/80 text-white text-lg px-8 py-6 h-auto"
        >
          <Link
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            {orderCard.buttonText} <ExternalLink className="h-5 w-5" />
          </Link>
        </Button>
      </div>
      {/* Popular Items Section */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          {featuredMenuSection.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bbq-black to-transparent flex items-end p-4">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
