import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mapache Studio — Estudio de grabación & arte",
  description: "Donde el sonido toma forma y el arte encuentra su voz. Producción musical, audiovisual y diseño en un solo lugar.",
  icons: {
    icon: '/mapache-logo.png',
    apple: '/mapache-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
