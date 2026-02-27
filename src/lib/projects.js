export const projects = [
  {
    slug: "yewon-education-centre",
    title: "Yewon Education Centre",
    category: "Web Products",
    thumbnail: "/assets/projects/yewon.png",
    description: "A comprehensive educational platform designed to help students unlock their future through accessible online learning. Features an intuitive course catalog, enrollment system, and progress tracking.",
    images: ["/assets/projects/yewon.png"],
    year: "2024",
    tools: ["Figma", "Adobe XD"],
    link: "#",
    featured: true,
    completion: 85,
  },
  {
    slug: "supadeurali-pet-industries",
    title: "SupaDeurali Pet Industries",
    category: "Web Products",
    thumbnail: "/assets/projects/supa.png",
    description: "Website design for Nepal's sustainable PET manufacturing company. Clean, eco-focused design highlighting sustainability practices and product catalogs.",
    images: ["/assets/projects/supa.png"],
    year: "2024",
    tools: ["Figma", "Photoshop"],
    link: "#",
    featured: true,
    completion: 92,
  },
  {
    slug: "dolpo-ice-cream",
    title: "Dolpo Ice Cream",
    category: "Web Products",
    thumbnail: "/assets/projects/dolpo.png",
    description: "Vibrant and playful website design for Dolpo Ice Cream, featuring their best-selling products with mouth-watering visuals and an easy-to-navigate menu.",
    images: ["/assets/projects/dolpo.png"],
    year: "2024",
    tools: ["Figma"],
    link: "#",
    featured: true,
    completion: 78,
  },
  {
    slug: "legal-links-consultancy",
    title: "Legal Links Consultancy",
    category: "Web Products",
    thumbnail: "/assets/projects/legal.png",
    description: "Professional website for a legal consultancy firm. Clean, trustworthy design with structured information hierarchy for services, team profiles, and client resources.",
    images: ["/assets/projects/legal.png"],
    year: "2024",
    tools: ["Figma", "Adobe XD"],
    link: "#",
    featured: true,
    completion: 100,
  },
  {
    slug: "nmc-pathology-blood-bank",
    title: "NMC Pathology & Blood Bank",
    category: "Web Products",
    thumbnail: "/assets/projects/nmc.png",
    description: "Healthcare-focused website design for NMC Pathology & Blood Bank. Emphasizes accessibility, clear medical information presentation, and easy appointment booking.",
    images: ["/assets/projects/nmc.png"],
    year: "2024",
    tools: ["Figma", "Photoshop"],
    link: "#",
    featured: true,
    completion: 88,
  },
  {
    slug: "release-publication",
    title: "Release Publication",
    category: "Web Products",
    thumbnail: "/assets/projects/release.png",
    description: "Modern publication website design focusing on content readability, clean layouts, and seamless reading experience across all devices.",
    images: ["/assets/projects/release.png"],
    year: "2024",
    tools: ["Figma"],
    link: "#",
    featured: true,
    completion: 95,
  },
];

export const categories = [
  "Web Products",
  "Mobile UX",
  "Dashboards",
  "Animations",
  "Experiments",
];

// All categories active now (for clickable state)
export const activeCategories = [
  "Web Products",
  "Mobile UX",
  "Dashboards",
  "Animations",
  "Experiments"
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category) {
  if (category === "All") return projects; // Fallback
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured).slice(0, 6);
}
