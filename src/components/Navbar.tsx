import { useState, useEffect } from 'react';
import { Home, FolderOpen, Briefcase, Wrench } from 'lucide-react';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'projects', icon: FolderOpen, label: 'Projects' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'skills', icon: Wrench, label: 'Skills' },
];

export function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      const scrollY = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, el } = sections[i];
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollY) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActive(id);
  };

  return (
    <nav className="nav-pill" aria-label="Main navigation">
      {navItems.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => handleClick(id)}
          className={`nav-btn ${active === id ? 'active' : ''}`}
          aria-label={label}
          aria-current={active === id ? 'location' : undefined}
          title={label}
        >
          <Icon size={18} strokeWidth={1.8} />
        </button>
      ))}
    </nav>
  );
}
