"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NAV = [
  { href: "#modelos-top", label: "Modelos" },
  { href: "#ficha-tecnica", label: "Ficha técnica" },
  { href: "#no-incluye", label: "No incluye" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquear el scroll del cuerpo cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* HEADER fijo arriba SIEMPRE (desktop + móvil) */}
      <header
        className="fixed top-0 left-0 right-0 z-50 h-[var(--navbar-h)] bg-[rgba(255,255,255,0.95)] border-b border-[rgba(13,20,17,0.08)] shadow-[0_8px_24px_rgba(13,20,17,0.06)] backdrop-blur-[8px]"
        role="banner"
      >
        <div className="container-tbv h-full flex items-center justify-between relative">
          {/* Logo izquierda */}
          <Link
            href="/"
            className="flex items-center gap-3 relative z-50"
            aria-label="Ir al inicio"
            onClick={closeMenu}
          >
            <Image
              src="/logo-nomada.png"
              alt="NÓMADA"
              width={64}
              height={64}
              className="rounded-full"
              priority
            />
            <span
              className="hidden md:inline text-xl lg:text-2xl font-extrabold tracking-wide"
              style={{ color: "var(--olive-500)" }}
            >
              • Tiny Houses
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-3"
            aria-label="Navegación principal"
          >
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-5 py-2.5 rounded-lg text-base font-medium hover:bg-black/5 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Botón Menú Móvil (Hamburguesa / X) */}
          <button
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg hover:bg-black/5 cursor-pointer relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            type="button"
          >
            {isOpen ? (
              // Ícono X
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              // Hamburguesa
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* MENÚ MÓVIL (pantalla completa) */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--cream-100)] flex flex-col items-center justify-center md:hidden animate-in fade-in duration-200">
          {/* X arriba a la derecha dentro del overlay */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Cerrar menú"
            className="absolute top-5 right-5 inline-flex items-center justify-center w-11 h-11 rounded-lg hover:bg-black/5"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex flex-col items-center gap-6 text-center">
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="text-2xl font-bold tracking-tight text-[var(--forest-700)] hover:text-[var(--coral-500)] transition-colors"
              >
                {l.label}
              </Link>
            ))}

            <div className="mt-8 pt-8 border-t border-black/10 w-full flex justify-center">
              <Link
                href="#contacto"
                onClick={closeMenu}
                className="btn btn-primary"
              >
                Contactar
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
