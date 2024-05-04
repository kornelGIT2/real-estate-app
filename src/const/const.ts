export const LeftNavRoutes = [
  { route: "Home" },
  { route: "About" },
  { route: "Contact" },
  { route: "Agents" },
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
    title: "A New Apartment in the City",
    adress: "Wiejska 24",
    city: "Warsaw",
    image: "/assets/apartments/ap1.jpg",
    bedroom: 3,
    bathroom: 2,
    price: 3000,
    position: [52.2111, 21.03],
    info: { type: 1, desc: "Added 1 hour ago" },
    dimensions: 74,
  },
  {
    id: 2,
    title: "A New Apartment in the City",
    adress: "Słoneczna 10",
    city: "Warsaw",
    image: "/assets/apartments/ap2.jpg",
    bedroom: 3,
    bathroom: 2,
    price: 444,
    position: [52.223, 21.02],
    info: { type: 0, desc: "It's under offer" },
    dimensions: 60,
  },
  {
    id: 3,
    title: "A New Apartment in the City",
    adress: "Wiejska 24",
    city: "Warsaw",
    image: "/assets/apartments/ap3.jpg",
    bedroom: 3,
    bathroom: 2,
    price: 55555,
    position: [52.23, 21.04],
    info: { type: 1, desc: "Added 5 hours ago" },
    dimensions: 35,
  },
  {
    id: 4,
    title: "A New Apartment in the City",
    adress: "Wiejska 24",
    city: "Warsaw",
    image: "/assets/apartments/ap4.jpg",
    bedroom: 3,
    bathroom: 2,
    price: 1200,
    info: null,
    position: [52.21, 21.05],
    dimensions: 40,
  },
  {
    id: 5,
    title: "A New Apartment in the City",
    adress: "Wiejska 24",
    city: "Warsaw",
    image: "/assets/apartments/ap5.jpg",
    bedroom: 3,
    bathroom: 2,
    price: 1200,
    info: null,
    position: [52.21, 21.004],
    dimensions: 40,
  },
  {
    id: 6,
    title: "A New Apartment in the City",
    adress: "Wiejska 24",
    city: "Warsaw",
    image: "/assets/apartments/ap6.jpg",
    bedroom: 3,
    bathroom: 2,
    price: 1200,
    position: [52.22, 21.0],
    info: { type: 1, desc: "Added 1 hour ago" },
    dimensions: 42,
  },
  {
    id: 7,
    title: "A New Apartment in the City",
    adress: "Wiejska 24",
    city: "Warsaw",
    image: "/assets/apartments/ap7.jpg",
    bedroom: 3,
    bathroom: 2,
    price: 1200,
    info: null,
    position: [52.22, 21.02],
    dimensions: 55,
  },
];

export const filterOptions = [
  {
    label: "Type",
    options: ["TypeOption1", "TypeOption2"],
  },
  {
    label: "Property",
    options: ["PropertyOp1", "PropertyOp2"],
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
