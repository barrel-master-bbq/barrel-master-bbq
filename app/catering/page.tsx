import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cateringOptions, sides } from "@/lib/menu";

const CATERING_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe4E5hVIDPS-KZapnDU6_rs4Hd9X93CA-Jwnu_Ue3UbTZckPA/viewform";

export default function CateringPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-10">
        <Image
          src="/placeholder.svg?height=600&width=1200"
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

      {/* How to Order Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          How to Order Catering
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-muted border-bbq-flame/20 text-white">
            <CardContent className="pt-6">
              <div className="rounded-full bg-bbq-flame w-12 h-12 flex items-center justify-center mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Fill Out Our Form</h3>
              <p className="text-white/80">
                Click the catering request button below to access our online
                order form. Select your items, quantities, and preferred pickup
                time.
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
              <h3 className="text-xl font-bold mb-2">Enjoy Your Event</h3>
              <p className="text-white/80">
                Pick up your order at the scheduled time or wait for delivery.
                Then you and your guests can enjoy the best BBQ in town!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Side Options Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Side Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sides.map((side) => (
            <SideCard card={side} key={side.name} />
          ))}
        </div>
      </div>

      {/* Meat Options Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Meat Options
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cateringOptions.map((item, index) => (
            <div key={index} className="bg-muted p-4 rounded-lg">
              <div className="relative w-full h-40 rounded-md overflow-hidden mb-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <span className="text-bbq-flame font-bold">{item.price}</span>
              </div>
              <p className="text-white/80 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-muted rounded-xl">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Book Your Catering?
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Click the button below to fill out our catering request form. Catering
          orders must be placed at least 72 hours in advance.
        </p>
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

const SideCard = ({
  card,
}: {
  card: {
    name: string;
    description: string;
    image: string;
    priceFull: string;
    priceHalf: string;
  };
}) => (
  <Card className="bg-muted border-bbq-flame/20 text-white">
    <CardContent className="pt-6">
      <div className="relative w-full h-48 rounded-md overflow-hidden mb-6">
        <Image src={card.image} alt={card.name} fill className="object-cover" />
      </div>
      <h3 className="text-2xl font-bold mb-2">{card.name}</h3>
      <p className="text-white/80 mb-4">{card.description}</p>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="font-medium">Half Pan</span>
          <span className="text-bbq-flame font-bold">{card.priceHalf}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Full Pan</span>
          <span className="text-bbq-flame font-bold">{card.priceFull}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);
