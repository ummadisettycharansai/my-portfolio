import { useInView } from '../hooks/useInView';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'none';
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({ threshold: 0.05 });

  const baseStyle: React.CSSProperties = {
    transition: 'opacity 0.6s ease, transform 0.6s ease',
    transitionDelay: `${delay}ms`,
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'none'
      : direction === 'up'
      ? 'translateY(40px)'
      : direction === 'left'
      ? 'translateX(-20px)'
      : 'none',
  };

  return (
    <div ref={ref} className={className} style={baseStyle}>
      {children}
    </div>
  );
}
