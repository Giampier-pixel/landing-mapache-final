import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import Nosotros from '@/components/Nosotros';
import Galeria from '@/components/Galeria';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Nav activePage="home" />
      <Hero />
      <Servicios />
      <Nosotros />
      <Galeria />
      <Contacto />
      <Footer variant="home" />
      <WhatsAppButton />
    </>
  );
}
