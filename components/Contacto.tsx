'use client';

import { useState } from 'react';
import RevealSection from './RevealSection';

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto">
      <div>
        <RevealSection as="p" className="section-label">— Hablemos</RevealSection>
        <RevealSection as="h2" className="section-title">Reservá tu sesión</RevealSection>
        <RevealSection as="p" className="contact-desc">
          Contanos tu proyecto y nos ponemos en contacto en menos de 24 horas. Primera consulta sin cargo.
        </RevealSection>
        <RevealSection className="contact-info">
          <div className="contact-item">
            <span className="contact-item-label">Email</span>
            <span>hola@mapachestudio.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-item-label">Instagram</span>
            <span>@mapachestudio</span>
          </div>
          <div className="contact-item">
            <span className="contact-item-label">Horario</span>
            <span>Lun–Sáb · 10:00 – 22:00</span>
          </div>
        </RevealSection>
      </div>
      <RevealSection>
        {!submitted ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="tu@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="service">Servicio</label>
              <select id="service">
                <option value="">Seleccioná un servicio</option>
                <option>Grabación Musical</option>
                <option>Mezcla &amp; Mastering</option>
                <option>Producción Audiovisual</option>
                <option>Diseño &amp; Arte</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" placeholder="Contanos sobre tu proyecto…" required />
            </div>
            <button type="submit" className="btn-submit">Enviar mensaje →</button>
          </form>
        ) : (
          <div className="form-success">
            ✓ &nbsp; Mensaje recibido. Te contactamos pronto.
          </div>
        )}
      </RevealSection>
    </section>
  );
}
