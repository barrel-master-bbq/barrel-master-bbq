import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="BBQ hero image"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            Barrel Master BBQ
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            No frills, no fuss—just darn good BBQ, ready when you are!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-bbq-flame hover:bg-bbq-flame/80 text-white"
            >
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/order">Order Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Signature BBQ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Slow-Smoked Brisket",
                description:
                  "Smoked for 14 hours over oak wood for the perfect bark and tenderness",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                title: "St. Louis Ribs",
                description:
                  "Fall-off-the-bone tender with our signature dry rub and glaze",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                title: "Pulled Pork",
                description:
                  "Juicy, hand-pulled pork shoulder with a hint of smoke and spice",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-square relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bbq-black to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
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
                Explore Full Menu <ArrowRight className="h-4 w-4" />
              </Link>
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
                src="/placeholder.svg?height=800&width=800"
                alt="About Barrel Master BBQ"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Our BBQ Story
              </h2>
              <p className="text-white/80 mb-6">
                At Barrel Master BBQ, we keep it simple—bold flavors, quick
                service, and barbecue done right. With over a decade of
                experience, we&apos;ve mastered the art of real smoked meat,
                using Barrel Cookers to hook and hang our meat directly over the
                coals. This old-school method gives our barbecue a deep, smoky
                flavor that you won&apos;t find anywhere else.
              </p>
              <p className="text-white/80 mb-8">
                Whether you&apos;re grabbing a quick bite, feeding a crowd, or
                catering an event, we&apos;ve got you covered. Our menu is built
                for speed without sacrificing quality—fast, fresh, and packed
                with that straight-off-the-smoker goodness. From lunchtime
                cravings to full-blown feasts, we make it easy to get top-notch
                barbecue without the wait.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-bbq-flame text-bbq-flame hover:bg-bbq-flame/10"
              >
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Visit Us</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join us at our restaurant or find our food truck at events around
            town. Check our schedule for upcoming locations.
          </p>
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Barrel Master BBQ Location"
              fill
              className="object-cover"
            />
          </div>
          <Button
            asChild
            className="bg-bbq-flame hover:bg-bbq-flame/80 text-white"
          >
            <Link href="/location">Find Our Location</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
