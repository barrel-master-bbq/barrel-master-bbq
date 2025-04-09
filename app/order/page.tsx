import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getFeaturedMenu } from "@/lib/actions";

// Replace this with your actual Google Form URL
const GOOGLE_FORM_URL = process.env.NEXT_PUBLIC_ORDER_FORM_URL ?? "";

export default async function OrderPage() {
  const featured = await getFeaturedMenu();
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-10">
        <Image
          src="https://cdn.pixabay.com/photo/2015/06/15/20/20/bbq-810545_1280.jpg"
          alt="BBQ spread"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-t from-bbq-black/90 to-transparent">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Order Now
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Delicious, barrel smoked BBQ ready for pickup or delivered to your
            door
          </p>
        </div>
      </div>

      {/* How to Order Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          How to Order
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-muted border-bbq-flame/20 text-white">
            <CardContent className="pt-6">
              <div className="rounded-full bg-bbq-flame w-12 h-12 flex items-center justify-center mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Fill Out Our Form</h3>
              <p className="text-white/80">
                Click the order button below to access our online order form.
                Select your items, quantities, and preferred pickup time.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-muted border-bbq-flame/20 text-white">
            <CardContent className="pt-6">
              <div className="rounded-full bg-bbq-flame w-12 h-12 flex items-center justify-center mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Confirmation</h3>
              <p className="text-white/80">
                We&apos;ll send you a confirmation call/text to verify your
                order. Full payment is required at the time of ordering.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-muted border-bbq-flame/20 text-white">
            <CardContent className="pt-6">
              <div className="rounded-full bg-bbq-flame w-12 h-12 flex items-center justify-center mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Enjoy Your BBQ</h3>
              <p className="text-white/80">
                Pick up your order at the scheduled time or wait for delivery.
                Then enjoy the best BBQ in town!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* CTA Section */}
      <div className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-muted rounded-xl mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Order?</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Click the button below to fill out our order form. Orders must be
          placed at least 72 hours in advance.
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
            Place Your Order <ExternalLink className="h-5 w-5" />
          </Link>
        </Button>
      </div>
      {/* Popular Items Section */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Popular Items
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
