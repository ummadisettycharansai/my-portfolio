import { useState } from 'react';
import { Award, Layers, LayoutDashboard } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { skillCategories, allSkills, certifications } from '../data';

const iconMap = {
  layers: Layers,
  layout: LayoutDashboard,
};

export function SkillsSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="mb-16">
      <AnimatedSection>
        <div className="mb-8 text-center md:text-left">
          <h2 className="section-heading text-white leading-none">SKILLS</h2>
        </div>
      </AnimatedSection>

        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((cat, i) => {
              const Icon = iconMap[cat.icon];
              const isOrange = cat.color === 'orange';
              const isExpanded = expandedCategory === cat.id;
              const skillsId = `${cat.id}-skills`;

              return (
                <AnimatedSection key={cat.id} delay={i * 150}>
                  <div className="space-y-3">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={skillsId}
                      aria-label={`${isExpanded ? 'Hide' : 'Show'} ${cat.label} ${cat.sublabel} skills`}
                      onClick={() => setExpandedCategory(isExpanded ? null : cat.id)}
                      className="skill-category-card relative overflow-hidden w-full text-left"
                      style={{
                        backgroundColor: isOrange ? '#E8541A' : '#C8F135',
                        color: isOrange ? 'white' : '#1a1a1a',
                        border: 0,
                        cursor: 'pointer',
                      }}
                    >
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

                      <div className="relative z-10 flex flex-col h-full min-h-[180px] justify-between">
                        <div>
                          <div className="mb-4">
                            <Icon size={24} strokeWidth={1.8} />
                          </div>
                          <p className="text-sm font-black uppercase leading-tight tracking-tight">
                            {cat.label}<br />{cat.sublabel}
                          </p>
                        </div>

                        <div className="flex justify-end">
                          <div
                            className="w-8 h-8 rounded flex items-center justify-center border"
                            style={{
                              borderColor: isOrange ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)',
                              backgroundColor: 'transparent',
                            }}
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              style={{
                                transform: isExpanded ? 'rotate(135deg)' : undefined,
                                transition: 'transform 0.2s ease',
                              }}
                              aria-hidden="true"
                            >
                              <path d="M2 10L10 2M10 2H4M10 2V8" stroke={isOrange ? 'white' : '#1a1a1a'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </button>

                    {isExpanded && (
                      <div
                        id={skillsId}
                        className="flex flex-wrap gap-2"
                        aria-hidden={!isExpanded}
                      >
                        {cat.skills.map((skill) => (
                          <span key={skill} className="skill-pill">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {!expandedCategory && (
            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-2">
                {allSkills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection delay={400}>
            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">
                Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((certification) => (
                  <div
                    key={certification.name}
                    className="experience-card flex items-start gap-3"
                  >
                    <Award
                      size={18}
                      className="mt-0.5 flex-shrink-0 text-[#E8541A]"
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {certification.name}
                      </h4>
                      <p className="text-xs mt-1" style={{ color: '#888' }}>
                        {certification.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
    </section>
  );
}
