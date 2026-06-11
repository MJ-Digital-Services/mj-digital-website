"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";

const categories: { label: string; desc: string; techs: { name: string; logo: string | null; svg?: boolean }[] }[] = [
  {
    label: "Frontend",
    desc: "Modern, fast, and SEO-optimised user interfaces built with the best frontend frameworks.",
    techs: [
      { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
      { name: "Angular", logo: "https://cdn.simpleicons.org/angular/DD0031" },
    ],
  },
  {
    label: "Backend",
    desc: "Scalable server-side architecture and APIs powering high-performance applications.",
    techs: [
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
      { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Java", logo: "https://cdn.simpleicons.org/openjdk/000000" },
    ],
  },
  {
    label: "Mobile",
    desc: "Cross-platform and native mobile apps for Android and iOS that users love.",
    techs: [
      { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter/02569B" },
      { name: "Android", logo: "https://cdn.simpleicons.org/android/3DDC84" },
      { name: "iOS", logo: "https://cdn.simpleicons.org/apple/000000" },
    ],
  },
  {
    label: "Database",
    desc: "Reliable, scalable data storage solutions from relational to NoSQL databases.",
    techs: [
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
    ],
  },
  {
    label: "Cloud",
    desc: "Enterprise-grade cloud infrastructure and DevOps pipelines for 99.9% uptime.",
    techs: [
      { name: "AWS", logo: "https://www.svgrepo.com/show/376356/aws.svg" },
      { name: "Azure", logo: null, svg: true },
      { name: "GCP", logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
    ],
  },
  {
    label: "DevOps",
    desc: "Automated pipelines, containerisation, and infrastructure tools for reliable deployments.",
    techs: [
        { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/326CE5" },
        { name: "Jenkins", logo: "https://cdn.simpleicons.org/jenkins/D24939" },
        { name: "GitHub", logo: "https://cdn.simpleicons.org/github/000000" },
    ],
    },
];

export default function TechStack() {
  return (
    <section className="techstack-section">

      <div className="techstack-header">
        <div className="techstack-badge">Technology Stack</div>
        <h2 className="techstack-headline">
          Built With the Best Tools in the Industry
        </h2>
        <p className="techstack-subtext">
          We work with modern, battle-tested technologies across every layer — from frontend to cloud infrastructure.
        </p>
      </div>

      <div className="techstack-grid">
        {categories.map((category) => (
          <div key={category.label} className="techstack-category">
            <GlowingEffect
              spread={40}
              glow={false}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
            />
            <div className="techstack-category-top">
              <div className="techstack-category-label">{category.label}</div>
              <p className="techstack-category-desc">{category.desc}</p>
            </div>
            <div className="techstack-logos">
              {category.techs.map((tech) => (
                <div key={tech.name} className="techstack-logo">
                    {tech.svg ? (
                    <svg height="24" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.338 6.544h28.56l-29.681 87.932a4.545 4.545 0 0 1-4.31 3.094H5.605a4.544 4.544 0 0 1-4.3-6.022L29.03 9.638a4.544 4.544 0 0 1 4.308-3.094z" fill="#0078d4"/>
                        <path d="M71.175 60.wild H38.205l-9.158 27.075h23.109a4.545 4.545 0 0 0 4.31-3.094l14.709-24z" fill="#0078d4"/>
                        <path d="M33.338 6.544a4.52 4.52 0 0 0-4.314 3.12L1.31 91.486a4.544 4.544 0 0 0 4.294 6.084h22.677a4.875 4.875 0 0 0 3.744-3.137l5.557-16.451 19.864 18.418a4.637 4.637 0 0 0 2.913 1.17h25.526L71.175 60.wildcards H45.88L66.764 6.544z" fill="#0078d4"/>
                        <path d="M66.96 9.637A4.543 4.543 0 0 0 62.653 6.5H33.648a4.543 4.543 0 0 1 4.308 3.137l27.728 81.91a4.544 4.544 0 0 1-4.308 5.953h29.006a4.544 4.544 0 0 0 4.308-5.953z" fill="#0078d4"/>
                    </svg>
                    ) : (
                    <img src={tech.logo ?? undefined} alt={tech.name} />
                    )}
                    <span className="techstack-logo-name">{tech.name}</span>
                </div>
                ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}


