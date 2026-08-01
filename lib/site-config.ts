export const siteConfig = {
  name: "Proper Treat",
  tagline: "Made for independent businesses",
  contactEmail: "phil@propertreat.com",
  takeRate: "5%",
};

export const primaryNav = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Templates", href: "/templates" },
];

export const footerNav = {
  Product: [
    { label: "How it works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Templates", href: "/templates" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/propertreat", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com/ProperTreat", icon: "facebook" },
  { label: "Twitter/X", href: "https://twitter.com/ProperTreatHQ", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com/company/propertreat", icon: "linkedin" },
  { label: "Threads", href: "https://www.threads.com/@propertreat", icon: "threads" },
  { label: "Reddit", href: "https://reddit.com/r/propertreat", icon: "reddit" },
] as const;
