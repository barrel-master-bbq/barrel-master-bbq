import { socialLinksQuery } from "@/lib/queries";
import { sanity } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await sanity.fetch(socialLinksQuery);

  return NextResponse.json(data);
}
