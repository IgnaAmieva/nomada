export const metadata = {
  title: "NÓMADA — Tiny Houses",
  description: "Landing minimal pastel inspirada en el logo NÓMADA.",
};

import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <a href="#contenido" className="skip-link">Saltar al contenido</a>
        {children}
      </body>
    </html>
  );
}
