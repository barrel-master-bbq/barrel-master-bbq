import { externalLinksQuery } from "@/lib/queries";
import { revalidatingSanityFetch } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const externalLinks = await revalidatingSanityFetch<{
    googleCalendarLink: string;
  }>(externalLinksQuery);

  return NextResponse.json(externalLinks.googleCalendarLink);
}
