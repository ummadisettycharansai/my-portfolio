import { useEffect, useState } from 'react';
import { projects, skillCategories } from '../data';
import { Layers, LayoutDashboard } from 'lucide-react';

const iconMap = {
  layers: Layers,
  layout: LayoutDashboard,
};

const STATS = [
  { value: '2', label: 'INTERNSHIPS' },
  { value: String(projects.filter((project) => project.githubUrl).length), label: 'GITHUB REPOSITORIES' },
  { value: String(projects.filter((project) => project.type === 'design').length), label: 'DESIGN CONCEPTS' },
];

const categoryDestinations: Record<string, { href: string; label: string }> = {
  'cloud-fullstack': { href: '#projects', label: 'View cloud and full-stack projects' },
  'cloud-tools': { href: '#skills', label: 'View cloud, DevOps, and design skills' },
};

export function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex flex-col justify-center">
      {/* Hero text */}
      <div
        style={{
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(30px)',
        }}
      >
        <h1 className="hero-heading text-white mb-6">
          CLOUD &<br />
          FULL-STACK<br />
          DEVELOPER
        </h1>

        <p className="text-base font-normal leading-relaxed mb-8 max-w-md" style={{ color: '#888' }}>
          Computer Science undergraduate focused on scalable cloud applications,
          backend systems, and user-centered full-stack experiences. Building with AWS,
          REST APIs, and modern web technologies while exploring Go and DevOps.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 mb-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="text-sm font-bold text-white">{stat.value}</span>
              <span className="text-xs font-medium tracking-widest" style={{ color: '#555' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Skill category cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        style={{
          transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(30px)',
        }}
      >
        {skillCategories.map((cat) => {
          const Icon = iconMap[cat.icon];
          const isOrange = cat.color === 'orange';
          const destination = categoryDestinations[cat.id];

          return (
            <a
              key={cat.id}
              href={destination.href}
              aria-label={destination.label}
              className="skill-category-card skill-category-link relative overflow-hidden select-none"
              style={{
                backgroundColor: isOrange ? '#E8541A' : '#C8F135',
                color: isOrange ? 'white' : '#1a1a1a',
                minHeight: '160px',
              }}
            >
              {/* Background decoration */}
              {isOrange ? (
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <svg viewBox="0 0 300 200" className="w-full h-full">
                    <path d="M 250 20 Q 200 80 280 140 Q 320 180 260 200" fill="none" stroke="white" strokeWidth="40" strokeLinecap="round" />
                  </svg>
                </div>
              ) : (
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <svg viewBox="0 0 300 200" className="w-full h-full">
                    <path d="M 20 20 L 80 100 L 20 180" fill="none" stroke="#1a1a1a" strokeWidth="14" strokeLinejoin="round" />
                    <path d="M 80 20 L 140 100 L 80 180" fill="none" stroke="#1a1a1a" strokeWidth="14" strokeLinejoin="round" />
                    <path d="M 140 20 L 200 100 L 140 180" fill="none" stroke="#1a1a1a" strokeWidth="14" strokeLinejoin="round" />
                    <path d="M 200 20 L 260 100 L 200 180" fill="none" stroke="#1a1a1a" strokeWidth="14" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-3">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <p className="text-sm font-black uppercase leading-tight tracking-tight">
                    {cat.label}<br />{cat.sublabel}
                  </p>
                </div>

                <div className="flex justify-end mt-4">
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center border"
                    style={{
                      borderColor: isOrange ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H4M10 2V8" stroke={isOrange ? 'white' : '#1a1a1a'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
