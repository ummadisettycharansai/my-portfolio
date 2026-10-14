import { socialLinks } from '../data';
import profilePhoto from '../assets/profile-photo.png';

// Inline SVG for GitHub icon (since lucide-react doesn't include it)
function GithubIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

// Inline SVG for LinkedIn icon
function LinkedinIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface ProfileCardProps {
  className?: string;
}

export function ProfileCard({ className = '' }: ProfileCardProps) {
  return (
    <div className={`profile-card ${className}`}>
      {/* Photo with orange background */}
      <div
        className="relative w-full rounded-2xl overflow-hidden mb-5"
        style={{ backgroundColor: '#E8541A', aspectRatio: '1/1' }}
      >
        <img
          src={profilePhoto}
          alt="Ummadisetty Charan Sai"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Name */}
      <h2 className="text-xl font-black text-black leading-tight mb-3">
        Ummadisetty<br />Charan Sai
      </h2>

      {/* Tagline */}
      <p className="text-sm font-normal leading-relaxed mb-5" style={{ color: '#666' }}>
        Building scalable cloud applications with full-stack development, backend APIs, and user-centered design.
      </p>

      {/* Social links */}
      <div className="flex items-center gap-5">
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="transition-transform hover:scale-110"
          style={{ color: '#E8541A' }}
        >
          <LinkedinIcon size={22} />
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="transition-transform hover:scale-110"
          style={{ color: '#E8541A' }}
        >
          <GithubIcon size={22} />
        </a>
      </div>
    </div>
  );
}
