export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shubham Yadav",
    url: "https://y1shubham.in",
    image: "https://y1shubham.in/images/shubham.jpg",
    jobTitle: "Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "LiveLike Sports Technologies",
      url: "https://livelike.com",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Netaji Subhas University of Technology (NSUT)",
      url: "http://www.nsut.ac.in",
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Redis",
      "PostgreSQL",
      "Socket.io",
      "Lit.js",
      "Docker",
      "AWS",
      "Full Stack Development",
      "Real-Time Systems",
      "Web Development",
    ],
    sameAs: [
      "https://github.com/y1shubham",
      "https://linkedin.com/in/y1shubham",
      "https://space-miner.y1shubham.in",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    email: "mailto:shubham.yadav.inbox@gmail.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shubham Yadav — Portfolio",
    url: "https://y1shubham.in",
    description:
      "Portfolio of Shubham Yadav, Software Developer at LiveLike Sports Technologies. Building scalable web apps, real-time systems, and interactive experiences.",
    author: {
      "@type": "Person",
      name: "Shubham Yadav",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function SpaceMinerJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Space Miner",
    url: "https://space-miner.y1shubham.in",
    description:
      "A browser-based arcade space survival game. Mine resources, dodge asteroids, chain combos, and survive as long as you can. Built with CreateJS on HTML5 Canvas.",
    genre: ["Arcade", "Survival"],
    gamePlatform: "Web Browser",
    applicationCategory: "Game",
    operatingSystem: "Any (Browser)",
    author: {
      "@type": "Person",
      name: "Shubham Yadav",
      url: "https://y1shubham.in",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
