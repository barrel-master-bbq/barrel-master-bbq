"use client";

import { useRef, useState } from "react";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (formRef.current) {
      setIsSubmitting(true);
      formRef.current.submit();
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get in Touch
        </h1>
        <div className="text-xl text-white/90 max-w-2xl mx-auto flex flex-col gap-2">
          <p>
            Barrel Master BBQ also offers private BBQ classes! We specialize in
            Weddings, Family Gatherings, Graduation Parties & Corporate Events.
          </p>
          <p>Get in touch today and we&apos;ll handle the rest!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="bg-muted border-bbq-flame/20 text-white">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <form
                ref={formRef}
                className="space-y-6"
                action="https://formsubmit.co/2e866497013f2b67999b0fe513a38d1f"
                method="POST"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-bbq-black/50 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-bbq-black/50 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      required
                      className="bg-bbq-black/50 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      className="bg-bbq-black/50 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what you're thinking..."
                    required
                    className="min-h-[150px] bg-bbq-black/50 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                <Button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-1">
          <Card className="bg-muted border-bbq-flame/20 text-white h-full">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-bbq-flame shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a
                      href="mailto:tom@barrelmasterbbq.com"
                      className="text-white/80 hover:text-bbq-flame transition-colors"
                    >
                      tom@barrelmasterbbq.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-bbq-flame shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <a
                      href="tel:3037208821"
                      className="text-white/80 hover:text-bbq-flame transition-colors"
                    >
                      (303) 720-8821
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-white/10">
                <p className="text-white/80 italic">
                  No frills, no fuss—just darn good BBQ, ready when you are!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
