export type HomePageProps = {
  banner: {
    heading: string;
    subheading: string;
    imageUrl: string;
    menuButton: string;
    orderButton: string;
  };
  about: {
    heading: string;
    description: string;
    imageUrl: string;
  };
  featured: {
    heading: string;
    menuButton: string;
  };
  findUs: {
    heading: string;
    subheading: string;
    button: string;
  };
};

export type MenuPageType = {
  banner: {
    heading: string;
    subheading: string;
    imageUrl: string;
  };
  orderCard: {
    heading: string;
    subheading: string;
    buttonText: string;
  };
};

export type CateringPageType = {
  banner: {
    heading: string;
    subheading: string;
    imageUrl: string;
  };
  cateringCard: {
    heading: string;
    description: string;
    buttonText: string;
  };
};

export type FindUsPageType = {
  location: {
    heading: string;
    subheading: string;
    tagline: string;
    updatedAt: string;
  };
  calendar: {
    heading: string;
    subheading: string;
    tagline: string;
  };
};

export type OrderPageType = {
  banner: {
    heading: string;
    subheading: string;
    imageUrl: string;
  };
  featuredMenuSection: {
    heading: string;
  };
  orderCard: {
    heading: string;
    subheading: string;
    buttonText: string;
  };
  order: {
    heading: string;
    steps: {
      heading: string;
      description: string;
    }[];
  };
};

export type ContactPageData = {
  hero: {
    heading: string;
    subheadings: string[];
  };
  formSection: {
    heading: string;
  };
  contactInfo: {
    email: string;
    phone: string;
    footerNote: string;
  };
};
