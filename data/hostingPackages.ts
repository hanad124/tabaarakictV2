import { THostingPackages } from "@/types/hostingPackagesTypes";

// Hosting packages
export const hostingPackages: THostingPackages[] = [
  // package 1
  {
    id: 1,
    type: "standard",
    isRecommended: false,
    iconBackgroundColor: "#FEEDFA",
    money: "$30",
    description:
      "Perfect for small businesses and startups looking for a reliable and affordable hosting solution.",
    buttonText: "Get Started",
    buttonIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3.75 12H20.25" stroke="#0B63E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#0B63E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    features: [
      "10 GB Disk Storage",

      "2 Database",

      "Unlimited Bandwidth",

      "5 Email Addresses",

      "SSL Certificate (NO)",

      "Full Support",

      "Backup",

      "Free WordPress",
    ],
  },

  // package 2
  {
    id: 2,
    type: "premium",
    isRecommended: true,
    iconBackgroundColor: "#FEEDFA",
    money: "$50",
    description:
      "Ideal for growing businesses and e-commerce sites looking for more resources and flexibility.",
    buttonText: "Get Started",
    buttonIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3.75 12H20.25" stroke="#0B63E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#0B63E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    features: [
      "30 GB Disk Storage",

      "5 Database",

      "Unlimited Bandwidth",

      "25 Email Addresses",

      "SSL Certificate (NO)",

      "Full Support",

      "Backup",

      "Free WordPress",
    ],
  },

  // package 3
  {
    id: 3,
    type: "business",
    isRecommended: false,
    iconBackgroundColor: "#fcba03",
    money: "$80",
    description:
      "Designed for large businesses and enterprises with high traffic and resource-intensive websites.",
    buttonText: "Get Started",
    buttonIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3.75 12H20.25" stroke="#0B63E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#0B63E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    features: [
      "Unlimited Disk Storage",

      "Unlimited Database",

      "Unlimited Bandwidth",

      "Unlimited Emails",

      "Free SSL Certificate",

      "Full Support",

      "Backup",

      "Free WordPress",
    ],
  },
];
