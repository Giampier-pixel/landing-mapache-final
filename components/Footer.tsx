import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  variant?: 'home' | 'lanzamientos';
}

export default function Footer({ variant = 'home' }: FooterProps) {
  return (
    <footer>
      <div className="footer-brand">
        <Image
          src="/mapache-logo.png"
          alt="Mapache Studio"
          width={30}
          height={30}
          style={{ borderRadius: '50%', objectFit: 'cover', filter: 'grayscale(1)', opacity: 0.7 }}
        />
        <span>Mapache Studio</span>
      </div>
      <p className="footer-copy">© 2026 Mapache Studio — Todos los derechos reservados</p>
      <div className="footer-links">
        {variant === 'home' ? (
          <>
            <Link href="#servicios">Servicios</Link>
            <Link href="#nosotros">Nosotros</Link>
            <Link href="#galeria">Galería</Link>
            <Link href="#contacto">Contacto</Link>
          </>
        ) : (
          <>
            <Link href="/#servicios">Servicios</Link>
            <Link href="/lanzamientos">Lanzamientos</Link>
            <Link href="/#contacto">Contacto</Link>
          </>
        )}
      </div>
    </footer>
  );
}
