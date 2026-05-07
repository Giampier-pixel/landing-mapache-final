'use client';

import { useEffect, useRef } from 'react';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main' | 'nav' | 'p' | 'h1' | 'h2' | 'h3' | 'span' | 'ul' | 'li';
  delay?: number;
  style?: React.CSSProperties;
}

export default function RevealSection({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  style,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    // @ts-expect-error – polymorphic tag
    <Tag ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
