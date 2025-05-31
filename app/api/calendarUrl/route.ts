import { externalLinksQuery } from "@/lib/queries";
import { sanity } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const externalLinks = await sanity.fetch(externalLinksQuery);

  return NextResponse.json(externalLinks.googleCalendarLink);
}
