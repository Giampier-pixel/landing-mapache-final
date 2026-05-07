import Link from 'next/link';
import RevealSection from './RevealSection';

const items = [
  { label: 'Sesión de grabación', sub: 'Rock · 2024' },
  { label: 'Videoclip', sub: 'Pop · 2024' },
  { label: 'Arte de tapa', sub: 'Indie · 2024' },
  { label: 'Fotografía', sub: 'Artística' },
  { label: 'Producción audiovisual', sub: 'Documental · 2023' },
  { label: 'Identidad visual', sub: 'Artista independiente' },
];

export default function Galeria() {
  return (
    <section id="galeria">
      <div className="gallery-header">
        <div>
          <RevealSection as="p" className="section-label">— Portfolio</RevealSection>
          <RevealSection as="h2" className="section-title">Trabajos recientes</RevealSection>
        </div>
        <RevealSection>
          <Link href="#contacto" className="btn-ghost" style={{ whiteSpace: 'nowrap' }}>
            Ver todo el trabajo
          </Link>
        </RevealSection>
      </div>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <RevealSection key={i} className="gallery-item" delay={i * 60}>
            <div className="gallery-placeholder">
              {item.label}<br />{item.sub}
            </div>
            <div className="gallery-overlay">
              <span>Ver proyecto</span>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
