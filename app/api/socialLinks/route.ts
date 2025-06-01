import { socialLinksQuery } from "@/lib/queries";
import { revalidatingSanityFetch } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await revalidatingSanityFetch(socialLinksQuery);

  return NextResponse.json(data);
}
