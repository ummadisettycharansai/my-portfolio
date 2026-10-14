import { socialLinks } from '../data';
import { ArrowUpRight } from 'lucide-react';

const copyrightYear = new Date().getFullYear();

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem 0', marginTop: '2rem' }}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Name and copyright */}
        <div>
          <p className="text-sm font-semibold text-white mb-1">Ummadisetty Charan Sai</p>
          <p className="text-xs" style={{ color: '#555' }}>
            © {copyrightYear} · All rights reserved
          </p>
        </div>

        {/* Right: Social links */}
        <div className="flex items-center gap-5">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#E8541A')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#E8541A')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={socialLinks.hackerrank}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="HackerRank"
            className="flex items-center gap-1.5 transition-colors duration-200 text-xs"
            style={{ color: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#E8541A')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
          >
            <ArrowUpRight size={16} strokeWidth={1.8} />
            <span>HackerRank</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
