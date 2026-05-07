import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import ReleasesGrid from '@/components/ReleasesGrid';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Lanzamientos — Mapache Studio',
  description: 'Toda la música producida, grabada o mezclada en Mapache Studio.',
};

export default function LanzamientosPage() {
  return (
    <>
      <Nav activePage="lanzamientos" />
      <header className="page-header">
        <p className="page-header-label">— Últimos lanzamientos</p>
        <h1 className="page-header-title">Lanzamientos</h1>
        <p className="page-header-sub">
          Toda la música producida, grabada o mezclada en Mapache Studio. Escuchá en Spotify o mirá el videoclip en YouTube.
        </p>
      </header>
      <ReleasesGrid />
      <Footer variant="lanzamientos" />
      <WhatsAppButton />
    </>
  );
}
