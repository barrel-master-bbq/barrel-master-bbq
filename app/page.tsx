import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { revalidatingSanityFetch } from "@/lib/sanity";
import { allMenuItemsQuery, homePageQuery } from "@/lib/queries";
import { MenuItem } from "@/types/menu";
import { HomePageProps } from "@/types/pages";

async function getFeaturedMenu() {
  const menu: MenuItem[] = await revalidatingSanityFetch(allMenuItemsQuery);

  const featured = menu.filter((item) => item.featured === true);

  return featured;
}

export default async function HomePage() {
  const featured = await getFeaturedMenu();
  const homePage: HomePageProps = await revalidatingSanityFetch(homePageQuery);

  if (!homePage) return null;

  const { banner, about, featured: featuredSection, findUs } = homePage;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <Image
          src={banner.imageUrl}
          alt="BBQ hero image"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            {banner.heading}
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            {banner.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-bbq-flame hover:bg-bbq-flame/80 text-white"
            >
              <Link href="/menu">{banner.menuButton}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/order">{banner.orderButton}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={`${about.imageUrl}?height=800&width=800`}
                alt="About Barrel Master BBQ"
                fill
                className="object-fit"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                {about.heading}
              </h2>
              {homePage.about.description
                .split(/\n{2,}/)
                .map((paragraph, index, arr) => (
                  <p
                    key={index}
                    className={`text-white/80 mb-${index === arr.length - 1 ? "8" : "6"}`}
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="sm:py-16 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {featuredSection.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="absolute inset-0 bg-gradient-to-t from-bbq-black to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-white/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-bbq-flame text-bbq-flame hover:bg-bbq-flame/10"
            >
              <Link href="/menu" className="flex items-center gap-2">
                {featuredSection.menuButton} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {findUs.heading}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            {findUs.subheading}
          </p>

          <Button
            asChild
            className="bg-bbq-flame hover:bg-bbq-flame/80 text-white"
          >
            <Link href="/find-us">{findUs.button}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
