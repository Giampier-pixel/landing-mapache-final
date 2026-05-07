import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-lines" />
      <div className="hero-inner">
        <div className="hero-logo-wrap">
          <Image
            src="/mapache-logo.png"
            alt="Mapache Studio"
            width={160}
            height={160}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'grayscale(1)' }}
            priority
          />
        </div>
        <p className="hero-label">Estudio de grabación &amp; arte — Est. 2024</p>
        <h1 className="hero-title">
          Mapache<br /><em>Studio</em>
        </h1>
        <p className="hero-sub">
          Donde el sonido toma forma y el arte encuentra su voz. Producción musical, audiovisual y diseño en un solo lugar.
        </p>
        <div className="hero-actions">
          <Link href="#contacto" className="btn-primary">Reservar sesión</Link>
          <Link href="#servicios" className="btn-ghost">Ver servicios</Link>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
