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
    alternateName: "Space Miner — Browser Arcade Game by Shubham Yadav",
    url: "https://space-miner.y1shubham.in",
    description:
      "A free browser-based arcade space survival game. Mine resources, dodge asteroids, chain combos, collect power-ups, and survive as long as you can. Built with CreateJS on HTML5 Canvas with procedural sound effects and particle systems. Play instantly in your browser — no download required.",
    genre: ["Arcade", "Survival", "Space", "Action"],
    gamePlatform: ["Web Browser", "Mobile Browser"],
    applicationCategory: "Game",
    applicationSubCategory: "Arcade Game",
    operatingSystem: "Any",
    inLanguage: "en",
    isAccessibleForFree: true,
    isFamilyFriendly: true,
    numberOfPlayers: {
      "@type": "QuantitativeValue",
      value: 1,
    },
    playMode: "SinglePlayer",
    datePublished: "2025-06-01",
    keywords:
      "space game, arcade game, browser game, HTML5 game, canvas game, survival game, free online game, space miner, y1shubham",
    author: {
      "@type": "Person",
      name: "Shubham Yadav",
      url: "https://y1shubham.in",
    },
    creator: {
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
    potentialAction: {
      "@type": "PlayAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://space-miner.y1shubham.in",
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
