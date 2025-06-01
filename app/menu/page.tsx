import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { revalidatingSanityFetch } from "@/lib/sanity";
import {
  allMenuItemsQuery,
  categoryDescriptionsQuery,
  menuPageQuery,
} from "@/lib/queries";
import { MenuItem } from "@/types/menu";
import { MenuPageType } from "@/types/pages";

async function getMenu() {
  const items: MenuItem[] = await revalidatingSanityFetch(allMenuItemsQuery);

  const grouped = items.reduce(
    (acc, item) => {
      const category = item.category?.toLowerCase() || "other";
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    },
    {} as Record<string, typeof items>
  );

  return grouped;
}

export default async function MenuPage() {
  const menu = await getMenu();
  const tabKeys = Object.keys(menu).sort((a, b) => {
    if (a === "other") return 1;
    if (b === "other") return -1;
    return a.localeCompare(b);
  });

  const categoryDescriptions: { category: string; description: string }[] =
    await revalidatingSanityFetch(categoryDescriptionsQuery);
  const menuPage: MenuPageType = await revalidatingSanityFetch(menuPageQuery);

  if (!menu || !categoryDescriptions) {
    return <div>Error loading menu.</div>;
  }
  const { banner, orderCard } = menuPage;
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="relative w-full h-[250px] rounded-xl overflow-hidden mb-8">
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

      {/* Menu Tabs */}
      <Tabs defaultValue="beef" className="w-full">
        <div className="flex justify-center my-8">
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
              categoryDescriptions.find((desc) => desc.category === key)
                ?.description ?? "";

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
          <Link href="/order" className="flex items-center gap-2">
            {orderCard.buttonText} <ExternalLink className="h-5 w-5" />
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
  menuItems: MenuItem[];

  description: string;
  value: string;
}) {
  return (
    <TabsContent value={value} className="mt-0">
      <div className="grid gap-8">
        <div className="w-full flex justify-center mb-10 col-span-full">
          <div className="w-fit min-w-[380px] sm:min-w-[440px]">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="px-12">Item</TableHead>
                  <TableHead className="">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {menuItems.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell className="px-12">{item.name}</TableCell>
                    <TableCell className="">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
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
