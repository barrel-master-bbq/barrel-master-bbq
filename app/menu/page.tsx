import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function getMenu() {
  const res = await fetch(`${process.env.MENU_API_URL}?type=menu`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function MenuPage() {
  const menu = await getMenu();
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="relative w-full h-[250px] rounded-xl overflow-hidden mb-10">
        <Image
          src="https://cdn.pixabay.com/photo/2015/06/15/20/20/bbq-810545_1280.jpg"
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
              className="data-[state=active]:bg-bbq-flame data-[state=active]:text-white text-xl"
            >
              Pork
            </TabsTrigger>
            <TabsTrigger
              value="brisket"
              className="data-[state=active]:bg-bbq-flame data-[state=active]:text-white text-xl"
            >
              Brisket
            </TabsTrigger>

            <TabsTrigger
              value="chicken"
              className="data-[state=active]:bg-bbq-flame data-[state=active]:text-white text-xl"
            >
              Chicken
            </TabsTrigger>

            <TabsTrigger
              value="sides"
              className="data-[state=active]:bg-bbq-flame data-[state=active]:text-white text-xl"
            >
              Sides
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="mt-16 mb-16">
          <MenuTab
            value="pork"
            title="Pork"
            description="From fall-off-the-bone ribs to smoky pulled pork, our pork offerings are slow-cooked to perfection and loaded with rich, savory flavor."
            menuItems={menu.pork}
          />

          <MenuTab
            value="brisket"
            title="Brisket"
            description="Smoked low and slow, our brisket is tender, juicy, and full of that deep, wood-fired flavor BBQ dreams are made of."
            menuItems={menu.brisket}
          />

          <MenuTab
            value="chicken"
            title="Chicken"
            description="Our BBQ chicken is flame-kissed and seasoned just right — juicy on the inside, crisp on the outside, and bursting with flavor in every bite."
            menuItems={menu.chicken}
          />

          <MenuTab
            value="sides"
            title="Sides"
            description="No plate is complete without the classics. From creamy coleslaw to smoky beans, our sides bring balance to every BBQ bite."
            menuItems={menu.sides}
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
            {menuItems?.map((item, index) => (
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
