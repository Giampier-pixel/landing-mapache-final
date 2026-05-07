'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavProps {
  activePage?: 'home' | 'lanzamientos';
}

export default function Nav({ activePage = 'home' }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="main-nav" className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <Link href="/" className="nav-logo" onClick={closeMenu}>
        <Image
          src="/mapache-logo.png"
          alt="Mapache Studio"
          width={36}
          height={36}
          style={{ borderRadius: '50%', objectFit: 'cover', filter: 'grayscale(1)' }}
        />
        <span>Mapache Studio</span>
      </Link>
      
      <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link href={activePage === 'home' ? '#servicios' : '/#servicios'} onClick={closeMenu}>
              Servicios
            </Link>
          </li>
          <li>
            <Link href={activePage === 'home' ? '#nosotros' : '/#nosotros'} onClick={closeMenu}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/lanzamientos" className={activePage === 'lanzamientos' ? 'active' : ''} onClick={closeMenu}>
              Lanzamientos
            </Link>
          </li>
          <li>
            <Link href={activePage === 'home' ? '#galeria' : '/#galeria'} onClick={closeMenu}>
              Galería
            </Link>
          </li>
          <li>
            <Link href={activePage === 'home' ? '#contacto' : '/#contacto'} onClick={closeMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-actions">
        <Link href={activePage === 'home' ? '#contacto' : '/#contacto'} className="nav-cta" onClick={closeMenu}>
          Reservar
        </Link>
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
