export const projects = [
  {
    slug: "yewon-education-centre",
    title: "Yewon Education Centre",
    category: "Web Products",
    thumbnail: "/assets/projects/yewon.png",
    description: "A results-driven website designed for one of Nepal's premier Korean-language training and EPS-TOPIK preparation institutes. We crafted a sleek, engaging digital platform that highlights their exam-success record, course offerings, and student-success stories — all optimized for mobile and SEO.",
    about: "Yewon Education Centre is a leading Korean-language and EPS-TOPIK preparation school in Nepal, dedicated to helping students succeed in Korea through expert instruction and tailored courses.",
    challenge: "Their digital presence needed to clearly showcase their unique value — high visa-success rate, experienced instructors, tailored EPS-TOPIK curriculum, and student success stories.",
    solution: "We designed a modern, conversion-focused website with a clear hero message, key differentiators like '95% visa success rate', structured course breakdowns, real student success stories, and mobile-first responsive design with SEO best practices.",
    images: ["/assets/projects/yewon.png"],
    year: "2024",
    client: "Yewon Education Centre",
    industry: "Education / Language Training",
    duration: "3 weeks",
    tools: ["Figma"],
    link: "#",
    figmaLink: "https://www.figma.com/design/sHRdRNDx5mB7OOaVidbz5l/Yewon-Education?m=auto&t=CABNG86vMH3i9VRU-7",
    featured: true,
    completion: 85,
  },
  {
    slug: "supadeurali-pet-industries",
    title: "Supa Deurali PET Industries",
    category: "Web Products",
    thumbnail: "/assets/projects/supa.png",
    description: "We built a sleek, high-performance website for one of Nepal's leading eco-friendly PET manufacturers. Designed to reflect sustainability and innovation, the platform highlights their modern facilities, responsible production process, and product catalog.",
    about: "Supa Deurali PET Industries is a trusted Nepali manufacturer specializing in eco-friendly, food-grade PET bottles and packaging solutions serving beverages, pharmaceuticals, and household goods.",
    challenge: "Their previous digital presence didn't capture the scale of their operation or their sustainability commitment. They needed a modern website to communicate expertise in PET manufacturing and highlight their recycling process.",
    solution: "We designed a dynamic, SEO-optimized website with modern UI/UX emphasizing sustainability, a structured product catalog, illustrated production process breakdown, sustainability messaging, and integrated lead-generation forms.",
    images: ["/assets/projects/supa.png"],
    year: "2024",
    client: "Supa Deurali PET Industries",
    industry: "PET Packaging",
    duration: "1 month",
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
    description: "Vibrant and playful website design for Dolpo Ice Cream — a beloved Nepali ice cream brand. Featuring mouth-watering visuals, bold colors, and an easy-to-navigate menu, the site captures the joy of their handcrafted flavors.",
    about: "Dolpo Ice Cream is a popular Nepali ice cream brand known for their rich, handcrafted flavors made from quality local ingredients. With a growing fanbase across Kathmandu, they needed a digital home that matched their vibrant brand personality.",
    challenge: "The brand lacked a digital presence that reflected their playful, premium identity. They needed a website that could showcase their product range, tell their story, and drive walk-in and delivery orders.",
    solution: "We designed a colorful, immersive website with bold typography, high-quality product photography, animated flavor showcases, and a mobile-first layout optimized for quick browsing and easy ordering.",
    images: ["/assets/projects/dolpo.png"],
    year: "2024",
    client: "Dolpo Ice Cream",
    industry: "Food & Beverage",
    duration: "2 weeks",
    tools: ["Figma"],
    link: "#",
    figmaLink: "https://www.figma.com/design/1yz7k8SpcXeXPhiIe8PayP/Dolpo-Ice-Cream?m=auto&t=CABNG86vMH3i9VRU-7",
    featured: true,
    completion: 78,
  },
  {
    slug: "legal-links-consultancy",
    title: "Legal Links & Consultancy",
    category: "Web Products",
    thumbnail: "/assets/projects/legal.png",
    description: "A modern, trustworthy online platform for one of Kathmandu's leading legal practices. We designed a professional, mobile-friendly website that clearly showcases their services across civil, corporate, family, and criminal law.",
    about: "Legal Links & Consultancy is a leading law firm based in Buddhanagar, Kathmandu, with over 20 years of experience providing specialist legal services in civil, criminal, family, corporate, labour, foreign investment, and intellectual property law.",
    challenge: "Despite their longstanding reputation, the client's digital presence lacked modern branding and ease of access. The website needed to articulate a wide breadth of legal services and build trust through credentials.",
    solution: "We created a sleek, performance-driven website with a clear hero message, main practice area showcases, bilingual support (English & Nepali), fully responsive design, and an integrated blog/insights section.",
    images: ["/assets/projects/legal.png"],
    year: "2024",
    client: "Legal Links & Consultancy",
    industry: "Legal Services / Law Firm",
    duration: "5 months",
    tools: ["Figma"],
    link: "#",
    figmaLink: "https://www.figma.com/design/ZjiW6dKSNmWJ4EIUYs0MIY/Legal-Links?m=auto&t=CABNG86vMH3i9VRU-7",
    featured: true,
    completion: 100,
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
