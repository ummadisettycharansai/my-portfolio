import { ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { projects } from '../data';

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-16">
      {/* Section title */}
      <AnimatedSection>
        <h2 className="section-heading text-white mb-8">
          PROJECTS<br />&amp; GITHUB
        </h2>
      </AnimatedSection>

      {/* Project list */}
      <div className="border-b border-white/10">
        {projects.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 80}>
            <div className="project-row gap-4 group">
              <ProjectRowContent project={project} />
              <div className="flex flex-shrink-0 items-center gap-3 mt-1">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    Demo <ArrowUpRight size={14} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    Code <ArrowUpRight size={14} />
                  </a>
                )}
                {!project.url && !project.githubUrl && (
                  <ArrowUpRight size={18} className="text-[#E8541A]" aria-hidden="true" />
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

function ProjectRowContent({ project }: { project: (typeof projects)[0] }) {
  return (
    <>
      <div className="min-w-0 flex-1 pr-2">
        <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-[#E8541A] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: '#888' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[11px] tracking-wide text-white/45">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
