export const allMenuItemsQuery = `*[_type == "menuItem"]{
  _id,
  name,
  description,
  price,
  "image": image.asset->url,
  category,
  featured
}`;

export const currentLocationQuery = `*[_type == "location"] | order(updated desc)[0] {
  locationName,
  address,
  _updatedAt
}`;

export const categoryDescriptionsQuery = `*[_type == "categoryDescription"]{
 category,
 description
}`;

export const homePageQuery = `*[_type == "homePage"][0]{
  banner{
    heading,
    subheading,
    menuButton,
    orderButton,
    "imageUrl": image.asset->url
  },
  about{
    heading,
    description,
    "imageUrl": image.asset->url
  },
  featured,
  findUs
}`;

export const menuPageQuery = `*[_type == "menuPage"][0]{
  banner{
    heading,
    subheading,
    "imageUrl": image.asset->url
  },
 orderCard
}`;

export const cateringPageQuery = `*[_type == "cateringPage"][0]{
  banner{
    heading,
    subheading,
    "imageUrl": image.asset->url
  },
  cateringCard
}`;

export const findUsPageQuery = `*[_type == "findUsPage"][0]{
  location,
  calendar
}`;

export const orderPageQuery = `*[_type == "orderPage"][0]{
  banner{
    heading,
    subheading,
    "imageUrl": image.asset->url
  },
  order, 
  orderCard,
  featuredMenuSection
}`;

export const socialLinksQuery = `*[_type == "socialLinks"][0]{
  instagram,
  twitter,
  tiktok,
  bluesky
}`;

export const contactPageQuery = `*[_type == "contactPage" && _id == "singleton-contactPage"][0]{
  hero,
  contactInfo,
  formSection
}`;

export const externalLinksQuery = `*[_type == "externalLinks"][0]{
  orderFormUrl,
  googleCalendarLink
}`;
