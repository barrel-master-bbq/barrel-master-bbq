import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MenuPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="relative w-full h-[250px] rounded-xl overflow-hidden mb-10">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="BBQ spread"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-t from-bbq-black/90 to-transparent">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Authentic wood-fired BBQ with homemade rubs and sauces
          </p>
        </div>
      </div>

      {/* Menu Tabs */}
      <Tabs defaultValue="pork" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-muted">
            <TabsTrigger
              value="pork"
              className="data-[state=active]:bg-bbq-flame data-[state=active]:text-white"
            >
              Pork
            </TabsTrigger>
            <TabsTrigger
              value="brisket"
              className="data-[state=active]:bg-bbq-flame data-[state=active]:text-white"
            >
              Brisket
            </TabsTrigger>

            <TabsTrigger
              value="chicken"
              className="data-[state=active]:bg-bbq-flame data-[state=active]:text-white"
            >
              Chicken
            </TabsTrigger>

            <TabsTrigger
              value="sides"
              className="data-[state=active]:bg-bbq-flame data-[state=active]:text-white"
            >
              Sides
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="mt-16 mb-16">
          <MenuTab
            value="pork"
            title="Pork"
            description="All our meats are smoked low and slow over oak and hickory
                  wood. Served with your choice of sauce on the side."
            menuItems={[
              {
                name: "Full Rack Ribs",
                description: "",
                image: "",
                price: "$35.00",
              },
              {
                name: "Half Rack Ribs",
                description: "",
                image: "",
                price: "$17.50",
              },
              {
                name: "Pulled Pork",
                description: "",
                image: "",
                price: "$16.00/lb",
              },
            ]}
          />

          <MenuTab
            value="brisket"
            title="Brisket"
            description="All our meats are smoked low and slow over oak and hickory
                  wood. Served with your choice of sauce on the side."
            menuItems={[
              {
                name: "Brisket (Fatty)",
                description: "",
                image: "",
                price: "$25.00/lb",
              },
              {
                name: "Brisket (Lean)",
                description: "",
                image: "",
                price: "$25.00/lb",
              },
            ]}
          />

          <MenuTab
            value="chicken"
            title="Chicken"
            description="All our meats are smoked low and slow over oak and hickory
                  wood. Served with your choice of sauce on the side."
            menuItems={[
              {
                name: "Half Chicken",
                description: "",
                image: "",
                price: "$14.00",
              },
            ]}
          />

          <MenuTab
            value="sides"
            title="Sides"
            description="All sides are made fresh daily with traditional recipes."
            menuItems={[
              {
                name: "BBQ Beans",
                description: "",
                image: "",
                price: "$6.00",
              },
              {
                name: "Coleslaw",
                description: "",
                image: "",
                price: "$6.00",
              },
            ]}
          />
        </div>
      </Tabs>

      {/* CTA Section */}
      <div className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-muted rounded-xl">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Order?</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Place your order online for pickup or delivery.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-bbq-flame hover:bg-bbq-flame/80 text-white text-lg px-8 py-6 h-auto"
        >
          <Link href="/order" className="flex items-center gap-2">
            Order Now <ExternalLink className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function MenuTab({
  menuItems,
  title,
  description,
  value,
}: {
  menuItems: {
    name: string;
    description: string;
    image: string;
    price: string;
  }[];
  title: string;
  description: string;
  value: string;
}) {
  return (
    <TabsContent value={value} className="mt-0">
      <div className="grid gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-8 h-1 bg-bbq-flame mr-3"></span>
            {title}
          </h2>
          <p className="text-white/80 mb-8 max-w-3xl">{description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 bg-muted p-4 rounded-lg"
              >
                <div className="relative w-full sm:w-32 h-32 rounded-md overflow-hidden shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {item.name}
                    </h3>
                    <span className="text-bbq-flame font-bold">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TabsContent>
  );
}
