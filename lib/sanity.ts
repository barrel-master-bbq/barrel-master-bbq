import { createClient } from "next-sanity";

export const sanity = createClient({
  projectId: "a5ugqam2",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
