export async function getFeaturedMenu() {
  const res = await fetch(`${process.env.MENU_API_URL}?type=menu`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch menu data");
  }

  const menu = await res.json();

  // Flatten all items into one array
  const allItems = Object.values(menu).flat() as {
    image: string;
    name: string;
    description: string;
    featured: boolean;
  }[];

  // Filter for featured items
  const featured = allItems.filter((item) => item.featured === true);

  return featured;
}
