import './index.css';
import { Navbar } from './components/Navbar';
import { ProfileCard } from './components/ProfileCard';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      {/* Fixed pill navigation */}
      <Navbar />

      {/* Page background with subtle edge glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 10% 50%, rgba(232,84,26,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 90% 80%, rgba(0,100,255,0.04) 0%, transparent 60%)',
        }}
      />

      {/* Main layout: sticky sidebar + scrollable content */}
      <div className="relative z-10 min-h-screen max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          {/* Left: sticky profile card */}
          <aside className="lg:w-[280px] lg:flex-shrink-0 pt-20 pb-8 lg:pb-0">
            {/* Mobile: card above hero */}
            <div className="lg:sticky lg:top-20">
              <ProfileCard />
            </div>
          </aside>

          {/* Right: main content */}
          <main className="flex-1 pt-4 lg:pt-20">
            <HeroSection />
            <ProjectsSection />
            <ExperienceSection />
            <SkillsSection />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
