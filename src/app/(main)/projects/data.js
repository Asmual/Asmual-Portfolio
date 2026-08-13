// app/projects/data.js

export const projectsData = {
  arthub: {
    id: "arthub",
    title: "ArtHub: Full-Stack Art Marketplace",
    subtitle: "A scalable full-stack marketplace for digital & physical artwork",
    description:
      "ArtHub is a full-featured online marketplace where artists can list, present, and monetize their creation. The app offers distinct dynamic user workflows for Buyers, Creators, and Administrators, with seamless order processing and membership controls.",
    images: [
      "/images/ArtHub.png",
      "/images/ArtHub.png", // আপনার অন্য ছবিগুলো এখানে দিন (যেমন: /images/arthub-2.png)
      "/images/ArtHub.png",
    ],
    tags: ["Next.js", "Better Auth", "JWT", "MongoDB", "Stripe", "Tailwind CSS"],
    features: [
      "Secure Stripe payment gateway integration for buying artwork",
      "Role-based control dashboard for Admins, Artists, and Buyers",
      "Artist membership tier subscription management",
      "Interactive artist portfolio setup and real-time transaction history",
    ],
    github: "https://github.com/Asmual/arthub-client",
    demo: "https://arthub-three.vercel.app",
  },

  docappoint: {
    id: "docappoint",
    title: "DocAppoint: Advanced Healthcare Platform",
    subtitle: "Doctor appointment scheduling and healthcare management system",
    description:
      "DocAppoint connects patients directly with certified healthcare professionals. Patients can browse available doctor profiles, check live available time slots, and securely reserve consultations with seamless session verification.",
    images: [
      "/images/DocAppoints.png",
      "/images/DocAppoints.png",
      "/images/DocAppoints.png",
    ],
    tags: ["Next.js 15", "Express.js", "BetterAuth", "MongoDB", "JWT", "Tailwind CSS"],
    features: [
      "Dynamic doctor search and specialty slot filtering",
      "HTTP-only cookie auth & security powered by JWT and BetterAuth",
      "Patient appointment management dashboard with status updates",
      "Responsive and intuitive interface tailored for medical scheduling",
    ],
    github: "https://github.com/Asmual/Assignment-9",
    demo: "https://assignment-9-eight-drab.vercel.app/",
  },

  suncart: {
    id: "suncart",
    title: "SunCart: Premium eCommerce Store",
    subtitle: "Seasonal e-commerce store with modern shopping flows",
    description:
      "SunCart provides a high-performance, dark-themed e-commerce experience designed for seasonal apparel and accessories. Offers secure multi-provider authentication and real-time shopping cart state persistence.",
    images: [
      "/images/SunCart.png",
      "/images/SunCart.png",
      "/images/SunCart.png",
    ],
    tags: ["Next.js 15", "BetterAuth", "MongoDB", "Tailwind CSS", "DaisyUI"],
    features: [
      "Google OAuth and Email authentication powered by BetterAuth",
      "Dynamic cart operations, wishlist management, and checkout process",
      "Protected consumer pages and session management",
      "High-performance responsive design built with Tailwind CSS",
    ],
    github: "https://github.com/Asmual/Assignment-8",
    demo: "https://assignment-8-woad-three.vercel.app/",
  },
};