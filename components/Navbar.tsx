import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "#modelos-top", label: "Modelos" },
  { href: "#ficha-tecnica", label: "Ficha técnica" },
  { href: "#no-incluye", label: "No incluye" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="container-tbv h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Ir al inicio">
          <Image src="/nomada.png" alt="NÓMADA" width={120} height={120} className="rounded-lg" priority />
          <span
            className="hidden md:inline text-lg md:text-xl font-extrabold tracking-wide"
            style={{ color: "var(--olive-500)" }}
          >
            • Tiny Houses
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Navegación principal">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-black/5 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile sin JS (details) */}
        <details className="md:hidden relative">
          <summary
            className="list-none inline-flex items-center justify-center w-11 h-11 rounded-lg hover:bg-black/5 cursor-pointer"
            aria-label="Abrir menú"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>

          {/* Menú móvil: fijo bajo el navbar, encima del contenido */}
          <nav className="menu-mobile surface p-2" aria-label="Navegación móvil">
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block px-3 py-2 rounded-md hover:bg-black/5 transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
