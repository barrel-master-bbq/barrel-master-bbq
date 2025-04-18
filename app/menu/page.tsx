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

async function getCategoryDescriptions() {
  const res = await fetch(`${process.env.MENU_API_URL}?type=categories`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function MenuPage() {
  const menu = await getMenu();
  const tabKeys = Object.keys(menu).sort((a, b) => {
    if (a === "other") return 1;
    if (b === "other") return -1;

    return a.localeCompare(b);
  });

  const categoryDescriptions = await getCategoryDescriptions();

  if (!menu || !categoryDescriptions) {
    return <div>Error loading menu.</div>;
  }

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
      <Tabs defaultValue="beef" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-muted">
            {tabKeys.map((key) => {
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-bbq-flame data-[state=active]:text-white sm:text-xl capitalize"
                >
                  {key}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>
        <div className="sm:mt-4 mb-12">
          {tabKeys.map((key) => {
            const description =
              categoryDescriptions.find(
                (desc: { name: string; description: string }) =>
                  desc.name === key
              )?.description ?? "";

            return (
              <MenuTab
                key={key}
                value={key}
                description={description}
                menuItems={menu[key]}
              />
            );
          })}
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

  description,
  value,
}: {
  menuItems: {
    name: string;
    description: string;
    image: string;
    price: string;
  }[];

  description: string;
  value: string;
}) {
  return (
    <TabsContent value={value} className="mt-0">
      <div className="grid gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center capitalize">
            <span className="w-8 h-1 bg-bbq-flame mr-3"></span>
            {value}
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
