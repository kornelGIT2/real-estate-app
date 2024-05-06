export const LeftNavRoutes = [
  { route: "Contact" },
  { route: "About" },
  { route: "Browse Properties" },
];
export const RightNavRoutes = [{ route: "Sign In" }, { route: "Join" }];

export const searchButtonTypes = ["Buy", "Rent", "Adress"] as const;
export const info = [
  { number: 10, title: "Years of Experience" },
  { number: 100, title: "Award Gained" },
  { number: 1500, title: "Property Ready" },
] as const;

export const estateDummyData = [
  {
    id: 1,
    title: "Luxury Studio in the Heart of Warsaw",
    address: "Wiejska 24",
    city: "Warsaw",
    image: "/assets/apartments/ap1.jpg",
    bedroom: 2,
    bathroom: 2,
    price: 3000,
    type: "Studio",
    position: [52.2111, 21.03],
    info: { type: 1, desc: "Added 1 hour ago" },
    dimensions: 74,
  },
  {
    id: 2,
    title: "A New Apartment in the City",
    address: "Słoneczna 10",
    city: "Warsaw",
    image: "/assets/apartments/ap2.jpg",
    bedroom: 2,
    bathroom: 2,
    type: "Apartment",
    price: 600,
    position: [52.223, 21.02],
    info: null,
    dimensions: 60,
  },
  {
    id: 3,
    title: "Modern 2-Bedroom Apartment",
    address: "Wiejska 24",
    city: "Warsaw",
    image: "/assets/apartments/ap3.jpg",
    bedroom: 2,
    bathroom: 2,
    type: "Apartment",
    price: 2000,
    position: [52.23, 21.04],
    info: null,
    dimensions: 35,
  },
  {
    id: 17,
    title: "Seaside Studio in Warsaw",
    address: "Beach Avenue 123",
    city: "Sopot",
    image: "/assets/apartments/ap4.jpg",
    bedroom: 6,
    bathroom: 4,
    type: "Studio",
    price: 3000,
    info: { type: 0, desc: "It's under offer" },
    position: [54.4416, 18.5601],
    dimensions: 400,
  },
  {
    id: 20,
    title: "Historic Apartment in Warsaw Old Town",
    address: "Piwna Street 10",
    city: "Warsaw",
    image: "/assets/apartments/ap5.jpg",
    bedroom: 4,
    bathroom: 2,
    type: "Apartment",
    price: 1500,
    info: { type: 1, desc: "Added 5 hour ago" },
    position: [52.2497, 21.0122],
    dimensions: 180,
  },
  {
    id: 6,
    title: "Rustic Penthouse",
    address: "Mountain View 20",
    city: "Warsaw",
    image: "/assets/apartments/ap6.jpg",
    bedroom: 2,
    bathroom: 2,
    price: 4000,
    type: "Penthouse",
    position: [49.2992, 19.941],
    info: { type: 1, desc: "Added 1 hour ago" },
    dimensions: 42,
  },
  {
    id: 16,
    title: "Charming Studio Apartment in Historic Wroclaw",
    address: "Mountain View 5",
    city: "Wroclaw",
    image: "/assets/apartments/ap7.jpg",
    bedroom: 3,
    bathroom: 2,
    type: "Studio",
    price: 2300,
    info: null,
    position: [51.1079, 17.0385],
    dimensions: 120,
  },
  {
    id: 15,
    title: "New Penthouse in the city",
    address: "Mountain View 5",
    city: "Zakopane",
    image: "/assets/apartments/ap3.jpg",
    bedroom: 3,
    bathroom: 2,
    type: "Penthouse",
    price: 3500,
    info: null,
    position: [49.2992, 19.9496],
    dimensions: 120,
  },
  {
    id: 14,
    title: "Cozy Loft in Historic Gdansk",
    address: "Dluga Street 20",
    city: "Gdansk",
    image: "/assets/apartments/ap8.jpg",
    bedroom: 1,
    bathroom: 1,
    type: "Apartment",
    price: 1800,
    info: null,
    position: [54.352, 18.6466],
    dimensions: 50,
  },
  {
    id: 13,
    title: "Modern Apartment in the Heart of Krakow",
    address: "Main Square 1",
    city: "Krakow",
    image: "/assets/apartments/ap4.jpg",
    bedroom: 2,
    bathroom: 1,
    type: "Apartment",
    price: 2500,
    info: { type: 1, desc: "Added 1 hour ago" },
    position: [50.0614, 19.9372],
    dimensions: 75,
  },
];

export const filterOptions = [
  {
    label: "Type",
    options: ["Apartment", "Penthouse", "Studio"],
  },
];
export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];
