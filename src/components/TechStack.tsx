"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";

const categories = [
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
      { name: "Azure", logo: "https://www.svgrepo.com/show/452062/azure.svg" },
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
                  <img src={tech.logo} alt={tech.name} />
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