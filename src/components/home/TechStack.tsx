interface Tech {
  name: string;
  logo: string | null;
  svg?: boolean;
}

const techs: Tech[] = [
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "Angular", logo: "https://cdn.simpleicons.org/angular/DD0031" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Java", logo: "https://cdn.simpleicons.org/openjdk/000000" },
  { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter/02569B" },
  { name: "Android", logo: "https://cdn.simpleicons.org/android/3DDC84" },
  { name: "iOS", logo: "https://cdn.simpleicons.org/apple/000000" },
  { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "AWS", logo: "https://www.svgrepo.com/show/376356/aws.svg" },
  { name: "Azure", logo: null, svg: true },
  { name: "GCP", logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  { name: "Jenkins", logo: "https://cdn.simpleicons.org/jenkins/D24939" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/000000" },
];

function AzureSVG({ size }: { size: number }) {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="az-a" x1="0.576" x2="0.1" y1="0.019" y2="1.083" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#114a8b" />
          <stop offset="1" stopColor="#0669bc" />
        </linearGradient>
        <linearGradient id="az-b" x1="0.738" x2="0.557" y1="0.176" y2="0.816" gradientUnits="objectBoundingBox">
          <stop offset="0" stopOpacity=".3" />
          <stop offset=".071" stopOpacity=".2" />
          <stop offset=".321" stopOpacity=".1" />
          <stop offset=".623" stopOpacity=".05" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="az-c" x1="0.31" x2="0.707" y1="0.273" y2="1.029" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#3ccbf4" />
          <stop offset="1" stopColor="#2892df" />
        </linearGradient>
      </defs>
      <path d="M33.338 6.544h28.56L32.818 90.513a4.544 4.544 0 01-4.308 3.087H5.605a4.544 4.544 0 01-4.3-6.019L29.03 9.631a4.544 4.544 0 014.308-3.087z" fill="url(#az-a)" />
      <path d="M71.175 60.498H38.205L60.564 6.544H89.13a4.544 4.544 0 013.614 7.267z" fill="url(#az-c)" />
      <path d="M33.338 6.544a4.52 4.52 0 00-4.314 3.134L1.31 87.525a4.544 4.544 0 004.294 6.075H28.64a4.87 4.87 0 003.744-3.14l5.557-16.451 19.864 18.418a4.637 4.637 0 002.913 1.17H85.6l-11.338-32.1-33.065.007L60.564 6.544z" fill="url(#az-b)" />
    </svg>
  );
}

export default function TechStack() {
  return (
    <section className="techstack-section">
      <div className="techstack-header">
        <div className="techstack-badge">Technology</div>
        <h2 className="techstack-headline">
          Our <span className="techstack-headline-accent">Standard</span> Technologies
        </h2>
        <p className="techstack-subtext">
          We work with modern, battle-tested technologies across every layer — from frontend to cloud infrastructure.
        </p>
      </div>

      <div className="techstack-flat-grid">
        {techs.map((tech) => (
          <div key={tech.name} className="techstack-flat-card">
            <div className="techstack-flat-icon">
              {tech.svg ? (
                <AzureSVG size={32} />
              ) : tech.logo ? (
                <img src={tech.logo} alt={tech.name} />
              ) : null}
            </div>
            <span className="techstack-flat-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}