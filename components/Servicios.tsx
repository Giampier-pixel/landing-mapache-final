import RevealSection from './RevealSection';

const services = [
  {
    num: '01',
    name: 'Grabación Musical',
    desc: 'Estudio profesional con sala de control equipada para capturar el sonido que imaginás, desde solistas hasta bandas completas.',
  },
  {
    num: '02',
    name: 'Mezcla & Mastering',
    desc: 'Procesamiento profesional para que tu música suene al nivel de cualquier plataforma internacional.',
  },
  {
    num: '03',
    name: 'Producción Audiovisual',
    desc: 'Videoclips, contenido para redes, fotografía artística y producción de marca que cuenta historias reales.',
  },
  {
    num: '04',
    name: 'Diseño & Arte',
    desc: 'Identidad visual, arte de tapa, diseño gráfico y dirección creativa para artistas y proyectos independientes.',
  },
];

export default function Servicios() {
  return (
    <section id="servicios">
      <RevealSection as="p" className="section-label">— Qué hacemos</RevealSection>
      <RevealSection as="h2" className="section-title">Servicios</RevealSection>
      <div className="services-grid">
        {services.map((s, i) => (
          <RevealSection key={s.num} className="service-card" delay={i * 80}>
            <p className="service-num">{s.num}</p>
            <h3 className="service-name">{s.name}</h3>
            <p className="service-desc">{s.desc}</p>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
