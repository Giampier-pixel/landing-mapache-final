'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavProps {
  activePage?: 'home' | 'lanzamientos';
}

export default function Nav({ activePage = 'home' }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
      <Link href="/" className="nav-logo">
        <Image
          src="/mapache-logo.png"
          alt="Mapache Studio"
          width={36}
          height={36}
          style={{ borderRadius: '50%', objectFit: 'cover', filter: 'grayscale(1)' }}
        />
        <span>Mapache Studio</span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link href={activePage === 'home' ? '#servicios' : '/#servicios'}>
            Servicios
          </Link>
        </li>
        <li>
          <Link href={activePage === 'home' ? '#nosotros' : '/#nosotros'}>
            Nosotros
          </Link>
        </li>
        <li>
          <Link href="/lanzamientos" className={activePage === 'lanzamientos' ? 'active' : ''}>
            Lanzamientos
          </Link>
        </li>
        <li>
          <Link href={activePage === 'home' ? '#galeria' : '/#galeria'}>
            Galería
          </Link>
        </li>
        <li>
          <Link href={activePage === 'home' ? '#contacto' : '/#contacto'}>
            Contacto
          </Link>
        </li>
      </ul>
      <Link href={activePage === 'home' ? '#contacto' : '/#contacto'} className="nav-cta">
        Reservar
      </Link>
    </nav>
  );
}
