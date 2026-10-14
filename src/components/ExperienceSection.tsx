import { ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { experiences, education } from '../data';

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-16">
      {/* Heading */}
      <AnimatedSection>
        <h2 className="section-heading text-white mb-8">
          EXPERIENCE &<br />EDUCATION
        </h2>
      </AnimatedSection>

      {/* Work Experience */}
      <div className="space-y-0 mb-8">
        {experiences.map((exp, i) => (
          <AnimatedSection key={exp.company} delay={i * 100}>
            <div className="py-6 border-t border-white/10 group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-white">
                      {exp.company}
                    </h3>
                    <ArrowUpRight
                      size={14}
                      className="text-[#E8541A] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    />
                  </div>
                  <p className="text-xs font-medium text-[#E8541A] mb-2 uppercase tracking-wide">
                    {exp.role}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#888' }}>
                    {exp.description}
                  </p>
                  <p className="text-xs mt-3" style={{ color: '#666' }}>
                    {exp.period}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Education */}
      <div className="space-y-3">
        {education.map((edu, i) => (
          <AnimatedSection key={edu.company} delay={i * 100 + 200}>
            <div className="experience-card">
              <h3 className="text-base font-semibold text-white mb-1">
                {edu.company}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#888' }}>
                {edu.role} · {edu.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
