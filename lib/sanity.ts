import { createClient } from "next-sanity";

export const sanity = createClient({
  projectId: "a5ugqam2",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
export function revalidatingSanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  revalidate: number = 60
): Promise<T> {
  return sanity.fetch<T>(query, params, {
    next: { revalidate },
  });
}
