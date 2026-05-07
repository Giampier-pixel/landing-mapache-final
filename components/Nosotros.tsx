import Image from 'next/image';
import RevealSection from './RevealSection';

export default function Nosotros() {
  return (
    <section id="nosotros">
      <div className="about-left">
        <RevealSection as="p" className="section-label">— Quiénes somos</RevealSection>
        <RevealSection as="h2" className="section-title">
          Creamos desde<br />adentro hacia afuera
        </RevealSection>
        <RevealSection as="p" className="about-text">
          Mapache Studio nació de la necesidad de tener un espacio donde la música, la imagen y el arte convivan sin fronteras. Somos un equipo de productores, músicos y artistas visuales con una sola obsesión: que cada proyecto suene y se vea como algo genuino.
        </RevealSection>
        <RevealSection as="p" className="about-text">
          No trabajamos con fórmulas. Escuchamos, entendemos y construimos junto al artista.
        </RevealSection>
        <RevealSection className="about-stats">
          <div>
            <div className="stat-num">100+</div>
            <div className="stat-label">Proyectos</div>
          </div>
          <div>
            <div className="stat-num">5</div>
            <div className="stat-label">Años activos</div>
          </div>
          <div>
            <div className="stat-num">3</div>
            <div className="stat-label">Géneros</div>
          </div>
        </RevealSection>
      </div>
      <RevealSection className="about-right">
        <div className="about-visual">
          <Image
            src="/mapache-logo.png"
            alt=""
            aria-hidden
            width={300}
            height={300}
            className="about-visual-logo"
            style={{ width: '55%', height: 'auto', opacity: 0.18, filter: 'grayscale(1) invert(1)' }}
          />
          <span className="about-visual-label">Fotografía del estudio — próximamente</span>
        </div>
      </RevealSection>
    </section>
  );
}
