import { sanity } from "@/lib/sanity";
import { contactPageQuery } from "@/lib/queries";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await sanity.fetch(contactPageQuery);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch contact page:", error);
    return NextResponse.json({ error: "Failed to load" }, { status: 500 });
  }
}
