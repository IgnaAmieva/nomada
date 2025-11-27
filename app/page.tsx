/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ====== SVG inline (iconos) ====== */
const Check = () => (
  <svg viewBox="0 0 24 24" className="icon" aria-hidden>
    <path fill="currentColor" d="M9.55 17.6 4.9 13l1.4-1.4 3.25 3.2 8.2-8.2 1.4 1.45-9.6 9.55Z" />
  </svg>
);
const Bolt = () => (
  <svg viewBox="0 0 24 24" className="icon" aria-hidden>
    <path fill="currentColor" d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
  </svg>
);
const Cube = () => (
  <svg viewBox="0 0 24 24" className="icon" aria-hidden>
    <path fill="currentColor" d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.2 6.5 3.6L12 11 5.5 7.8 12 4.2ZM5 9.5l6 3.3V19l-6-3.3V9.5Zm14 0V15L13 19v-6.2l6-3.3Z" />
  </svg>
);
const Hammer = () => (
  <svg viewBox="0 0 24 24" className="icon" aria-hidden>
    <path fill="currentColor" d="M2 21.5 9.5 14 11 15.5 3.5 23 2 21.5Zm7.8-9.2 2.9-2.9 3.3 3.3-2.9 2.9-3.3-3.3Zm9.9-6.8-3.9-3.9L13.8 3.7l2.6 2.6-4.7 4.7 3.3 3.3 4.7-4.7 2.6 2.6 1.9-1.9-3.5-3.5Z" />
  </svg>
);
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className="icon" aria-hidden {...props}>
    <path fill="currentColor" d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3 1.4 1.4Z" />
  </svg>
);
const ArrowL = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
    <path fill="currentColor" d="M15.4 5.4 9 11.8l6.4 6.4-1.4 1.4L6.2 12l7.8-7.6 1.4 1Z" />
  </svg>
);
const ArrowR = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
    <path fill="currentColor" d="M8.6 18.6 15 12.2 8.6 5.8l1.4-1.4L17.8 12l-7.8 7.6-1.4-1Z" />
  </svg>
);
const Whats = () => (
  <svg viewBox="0 0 24 24" className="icon" aria-hidden>
    <path fill="currentColor" d="M20.5 3.5A11.5 11.5 0 0 0 12 1 11.6 11.6 0 0 0 .5 12.4 11.2 11.2 0 0 0 2.9 19L2 23l4.1-1a11.6 11.6 0 0 0 5.8 1.6h.1A11.4 11.4 0 0 0 23 12 11.3 11.3 0 0 0 20.5 3.5Z" />
    <path fill="currentColor" d="M12 21.2a9.5 9.5 0 0 1-4.8-1.3l-.3-.2-2.8.7.7-2.8-.2-.3a9.5 9.5 0 1 1 8 3.9Z" />
  </svg>
);
const Insta = () => (
  <svg viewBox="0 0 24 24" className="icon" aria-hidden>
    <path fill="currentColor" d="M12 2.2c3 0 3.4 0 4.6.1 1.2.1 2 .3 2.7.6.7.3 1.2.7 1.7 1.2.5.5 1 .9 1.2 1.7.3.7.5 1.5.6 2.7.1 1.2.1 1.6.1 4.6s0 3.4-.1 4.6c-.1 1.2-.3 2-.6 2.7-.3.7-.7 1.2-1.2 1.7-.5.5-1 .9-1.7 1.2-.7.3-1.5.5-2.7.6-1.2.1-1.6.1-4.6.1s-3.4 0-4.6-.1c-1.2-.1-2-.3-2.7-.6a6.8 6.8 0 0 1-1.7-1.2A4.7 4.7 0 0 1 2.9 19c-.3-.7-.5-1.5-.6-2.7C2.2 15.1 2.2 14.7 2.2 12s0-3.4.1-4.6Z" />
    <path fill="currentColor" d="M12 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8Zm0 10.1A3.9 3.9 0 1 1 15.9 12 3.9 3.9 0 0 1 12 15.9Z" />
  </svg>
);

/* ===== Galería con flechas + lightbox (fotos modelos) ===== */
function ModelGallery({
  images,
  altBase,
}: {
  images: string[];
  altBase: string;
}) {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const [ratio, setRatio] = useState<number | null>(null);

  const prev = useCallback(
    () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1)),
    [images.length]
  );
  const next = useCallback(
    () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1)),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, prev, next]);

  const aspectStyle: React.CSSProperties = ratio
    ? { aspectRatio: String(Number(ratio.toFixed(2))) }
    : { aspectRatio: "3 / 2" };

  return (
    <>
      <div
        className="relative w-full surface overflow-hidden rounded-[12px]"
        style={aspectStyle}
      >
        <Image
          key={images[idx]}
          src={images[idx]}
          alt={`${altBase} ${idx + 1}`}
          fill
          className="object-contain bg-white"
          sizes="(min-width: 768px) 600px, 100vw"
          priority={idx === 0}
          onClick={() => setOpen(true)}
          onLoadingComplete={(img) =>
            setRatio(img.naturalWidth / img.naturalHeight)
          }
          style={{ cursor: "zoom-in" }}
        />
        <button
          type="button"
          aria-label="Imagen anterior"
          onClick={() => {
            prev();
            setRatio(null);
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 text-[var(--forest-700)]"
        >
          <ArrowL />
        </button>
        <button
          type="button"
          aria-label="Imagen siguiente"
          onClick={() => {
            next();
            setRatio(null);
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 text-[var(--forest-700)]"
        >
          <ArrowR />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-[2px] z-[1000] flex items-center justify-center p-3 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada"
          onClick={() => setOpen(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[idx]}
              alt={`${altBase} ampliada ${idx + 1}`}
              className="max-w-[96vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg"
            />
            <button
              aria-label="Anterior"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/45 hover:bg-black/60 text-white"
            >
              <ArrowL />
            </button>
            <button
              aria-label="Siguiente"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/45 hover:bg-black/60 text-white"
            >
              <ArrowR />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ===== Galería sistema (video vertical + foto, con flechas) ===== */
type MediaItem = {
  kind: "video" | "image";
  src: string;
  alt: string;
  poster?: string;
};

function SystemGallery({
  items,
}: {
  items: MediaItem[];
  altBase: string;
}) {
  const [idx, setIdx] = useState(0);

  const prev = useCallback(
    () => setIdx((i) => (i === 0 ? items.length - 1 : i - 1)),
    [items.length]
  );
  const next = useCallback(
    () => setIdx((i) => (i === items.length - 1 ? 0 : i + 1)),
    [items.length]
  );

  const item = items[idx];

  return (
    <div
      className="relative w-full surface overflow-hidden rounded-[12px] max-h-[560px]"
      style={{ aspectRatio: "9 / 16" }} // video vertical
    >
{item.kind === "video" ? (
  <video
    key={item.src}
    className="w-full h-full object-cover"
    // autoplay sin sonido
    muted
    autoPlay
    loop
    playsInline
  >
    <source src={item.src} />
  </video>
) : (
  <Image
    key={item.src}
    src={item.src}
    alt={item.alt}
    fill
    className="object-cover"
    sizes="(min-width: 768px) 420px, 100vw"
  />
)}
      <button
        type="button"
        aria-label="Anterior"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/20 hover:bg-black/30 text-white"
      >
        <ArrowL />
      </button>
      <button
        type="button"
        aria-label="Siguiente"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/20 hover:bg-black/30 text-white"
      >
        <ArrowR />
      </button>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        {/* ========================= HÉROE ========================= */}
        <section className="hero">
          <div className="container-tbv hero-grid grid md:grid-cols-2 items-center gap-8 md:gap-6">
            {/* Título visual: Bloque de Marca */}
            <div className="flex flex-col items-center text-center px-1">
              <div className="flex flex-col items-center leading-none">
                <Image
                  src="/nomada.png"
                  alt="NÓMADA"
                  width={420}
                  height={200}
                  className="w-52 md:w-80 lg:w-96 h-auto drop-shadow-sm"
                  priority
                />
                <h1 className="sr-only">NÓMADA • Tiny Houses modulares</h1>
                <div
                  className="mt-3 md:mt-3 text-2xl md:text-5xl font-extrabold tracking-tight uppercase"
                  style={{ color: "var(--forest-700)" }}
                >
                  TINY HOUSES MODULARES
                </div>
              </div>

              {/* copy optimizado */}
              <p className="mt-3 md:mt-3 text-sm md:text-xl muted leading-relaxed max-w-xs md:max-w-[60ch]">
                Tiny houses listas para instalar, con estructura liviana, gran
                aislación y terminaciones premium con opción{" "}
                <em>off-grid</em>.
              </p>

              {/* CTA: más ordenado en mobile (full width y apilado) */}
              <div className="mt-5 md:mt-6 flex flex-col md:flex-row w-full max-w-xs md:max-w-none gap-3">
                <Link
                  href="#modelos-top"
                  className="btn btn-primary w-full md:w-auto justify-center"
                >
                  <Bolt /> Ver modelos
                </Link>
                <Link
                  href="#ficha-tecnica"
                  className="btn btn-outline w-full md:w-auto justify-center"
                >
                  <Cube /> Ficha técnica
                </Link>
              </div>

              {/* Badges */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] md:text-sm">
                <span className="badge-olive">
                  <Check /> DVH
                </span>
                <span className="badge-coral">
                  <Bolt /> Off-grid
                </span>
                <span className="badge-olive">
                  <Hammer /> Obra seca
                </span>
              </div>
            </div>

            {/* Hero: Carrusel */}
            <div className="surface p-2 md:p-3 w-full">
              <div
                className="fade-carousel aspect-[4/3] w-full relative rounded-lg overflow-hidden"
                role="region"
                aria-label="Modelos NÓMADA"
              >
                <div className="fade-carousel__stage">
                  <figure className="fade-slide fade-slide--1">
                    <Image
                      src="/casa-juan/la-mini.png"
                      alt="La Mini"
                      fill
                      className="object-cover"
                      priority
                    />
                  </figure>
                  <figure className="fade-slide fade-slide--2">
                    <Image
                      src="/casa-chiquita.jpg"
                      alt="La Midi"
                      fill
                      className="object-cover"
                    />
                  </figure>
                  <figure className="fade-slide fade-slide--3">
                    <Image
                      src="/casa-mediana.jpg"
                      alt="La Max"
                      fill
                      className="object-cover"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= TÍTULO CATÁLOGO ========================= */}
        <section
          id="modelos-top"
          className="pt-16 md:pt-2 pb-[var(--gap-xl)]"
        >
          <div className="container-tbv">
            <header className="text-center mb-4">
              <p className="uppercase tracking-wider text-xs font-bold muted">
                Catálogo
              </p>
              <h2
                className="text-2xl md:text-3xl font-extrabold"
                style={{ color: "var(--forest-700)" }}
              >
                Nuestros modelos
              </h2>
              <p className="muted content-max mx-auto mt-2">
                Configurables con opciones off-grid y terminaciones premium.
              </p>
            </header>
          </div>
        </section>

        {/* ========================= MODELOS ========================= */}
        <section className="pb-[var(--gap-xl)]" aria-labelledby="modelos-heading">
          <div className="container-tbv">
            <h2 id="modelos-heading" className="sr-only">
              Modelos de Tiny Houses
            </h2>

            {/* La Mini */}
            <div className="surface p-5 mb-6">
              <div className="grid md:grid-cols-[1.2fr_1fr] gap-4">
                <ModelGallery
                  images={[
                    "/casa-juan/la-mini.png",
                    "/casa-juan/sillon-la-mini.jpeg",
                    "/casa-juan/cocina-la-mini.jpeg",
                    "/casa-juan/baño-la-mini.jpeg",
                  ]}
                  altBase="La Mini"
                />
                <article
                  className="surface p-5 border-none shadow-none bg-transparent md:bg-[var(--card)] md:border md:shadow"
                  aria-labelledby="la-mini-title"
                >
                  <h3
                    id="la-mini-title"
                    className="text-xl font-extrabold"
                    style={{ color: "var(--forest-700)" }}
                  >
                    La Mini
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm muted">
                    <li className="li">
                      <Cube />{" "}
                      <span>
                        <strong className="text-[var(--forest-700)]">
                          Base:
                        </strong>{" "}
                        15 m²
                      </span>
                    </li>
                    <li className="li">
                      <Cube />{" "}
                      <span>
                        <strong className="text-[var(--forest-700)]">
                          Medidas:
                        </strong>{" "}
                        3 m × 5 m
                      </span>
                    </li>
                    <li className="li">
                      <Check />{" "}
                      <span>
                        <strong className="text-[var(--forest-700)]">
                          Capacidad:
                        </strong>{" "}
                        1–2 personas
                      </span>
                    </li>
                    <li className="li">
                      <Hammer />{" "}
                      <span>
                        <strong className="text-[var(--forest-700)]">
                          Montaje:
                        </strong>{" "}
                        90–100 días
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 flex gap-3">
                    <Link href="#ficha-tecnica" className="btn btn-outline">
                      <Cube /> Detalles
                    </Link>
                    <Link href="#contacto" className="btn btn-primary">
                      <Whats /> Consultar
                    </Link>
                  </div>
                </article>
              </div>
            </div>

            {/* La Midi */}
            <div className="surface p-5 mb-6">
              <div className="grid md:grid-cols-[1.2fr_1fr] gap-4">
                <ModelGallery
                  images={[
                    "/casa-chiquita.jpg",
                    "/casita-bonita.jpg",
                    "/casa-mediana.jpg",
                  ]}
                  altBase="La Midi"
                />
                <article
                  className="surface p-5 border-none shadow-none bg-transparent md:bg-[var(--card)] md:border md:shadow"
                  aria-labelledby="la-midi-title"
                >
                  <h3
                    id="la-midi-title"
                    className="text-xl font-extrabold"
                    style={{ color: "var(--forest-700)" }}
                  >
                    La Midi
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm muted">
                    <li className="li">
                      <Cube />{" "}
                      <span>
                        <strong className="text-[var(--forest-700)]">
                          Base:
                        </strong>{" "}
                        25 m² + entrepiso 15 m² (total 40 m²)
                      </span>
                    </li>
                    <li className="li">
                      <Cube />{" "}
                      <span>
                        <strong className="text-[var(--forest-700)]">
                          Medidas:
                        </strong>{" "}
                        base 5 × 5 m; entrepiso 3 × 5 m
                      </span>
                    </li>
                    <li className="li">
                      <Check />{" "}
                      <span>
                        <strong className="text-[var(--forest-700)]">
                          Capacidad:
                        </strong>{" "}
                        2–3 personas
                      </span>
                    </li>
                    <li className="li">
                      <Hammer />{" "}
                      <span>
                        <strong className="text-[var(--forest-700)]">
                          Montaje:
                        </strong>{" "}
                        100–120 días
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 flex gap-3">
                    <Link href="#ficha-tecnica" className="btn btn-outline">
                      <Cube /> Detalles
                    </Link>
                    <Link href="#contacto" className="btn btn-primary">
                      <Whats /> Consultar
                    </Link>
                  </div>
                </article>
              </div>
            </div>

            {/* La Max */}
            <div className="surface p-5">
              <div className="grid md:grid-cols-[1.2fr_1fr] gap-4">
                <ModelGallery
                  images={[
                    "/casa-mediana.jpg",
                    "/casa-chiquita.jpg",
                    "/casita-bonita.jpg",
                  ]}
                  altBase="La Max"
                />
                <article
                  className="surface p-5 border-none shadow-none bg-transparent md:bg-[var(--card)] md:border md:shadow"
                  aria-labelledby="la-max-title"
                >
                  <h3
                    id="la-max-title"
                    className="text-xl font-extrabold"
                    style={{ color: "var(--forest-700)" }}
                  >
                    La Max (a convenir)
                  </h3>
                  <p className="muted text-sm mt-2">
                    Módulos más grandes, configurables según proyecto. Definimos
                    medidas, distribución y terminaciones en conjunto.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <Link href="#contacto" className="btn btn-primary">
                      <Whats /> Consultar
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= SISTEMA AGUA / GAS / CLOACAS ========================= */}
        <section id="sistema-agua" className="pb-[var(--gap-xl)]">
          <div className="container-tbv">
            <header className="text-center mb-4 mt-4 md:mt-8">
              <p className="uppercase tracking-wider text-xs font-bold muted">
                Sistema
              </p>
              <h2
                className="text-2xl md:text-3xl font-extrabold"
                style={{ color: "var(--forest-700)" }}
              >
                Agua, gas y cloacas
              </h2>
              <p className="muted content-max mx-auto mt-2">
                Instalaciones pensadas para que tu tiny house quede conectada a
                los servicios o funcione de forma autónoma, según el proyecto.
              </p>
            </header>

            <div className="surface p-5">
              <div className="grid md:grid-cols-[1.2fr_1fr] gap-4 items-center">
                {/* Galería vertical: video + foto con flechas */}
                <SystemGallery
                  altBase="Sistema de agua, gas y cloacas"
                  items={[
                    {
                      kind: "video",
                      src: "/casa-juan/video-sistema-cloacas.mp4",
                      poster: "/casa-juan/foto-agua-gas-cloacas.jpeg",
                      alt: "Video del sistema de agua, gas y cloacas",
                    },
                    {
                      kind: "image",
                      src: "/casa-juan/foto-agua-gas-cloaca.jpeg",
                      alt: "Detalle del sistema de agua, gas y cloacas",
                    },
                  ]}
                />

                {/* Texto sistema */}
                <article
                  className="surface p-5 border-none shadow-none bg-transparent md:bg-[var(--card)] md:border md:shadow"
                  aria-label="Sistema de agua, gas y cloacas"
                >
                  <h3
                    className="text-xl font-extrabold"
                    style={{ color: "var(--forest-700)" }}
                  >
                    Sistema de agua, gas y cloacas
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm muted">
                    <li className="li">
                      <Check />{" "}
                      <span>
                        Tanques y cañerías dimensionados según consumo real.
                      </span>
                    </li>
                    <li className="li">
                      <Check />{" "}
                      <span>
                        Opciones para red urbana o soluciones autónomas.
                      </span>
                    </li>
                    <li className="li">
                      <Check />{" "}
                      <span>
                        Diseño pensado para instalación rápida en obra seca.
                      </span>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= FICHA TÉCNICA ========================= */}
        <section id="ficha-tecnica" className="py-[var(--gap-xl)]">
          <div className="container-tbv">
            <div className="surface p-6">
              <h2
                className="text-2xl md:text-3xl font-extrabold"
                style={{ color: "var(--forest-700)" }}
              >
                Ficha técnica
              </h2>

              <div className="mt-4 grid md:grid-cols-2 gap-6 text-sm muted leading-relaxed">
                <ul className="space-y-3">
                  <li className="li">
                    <Hammer />
                    <div>
                      <strong className="text-[var(--forest-700)]">
                        Revestimiento interior
                      </strong>{" "}
                      (a convenir):
                      <ul className="list-disc ml-5 mt-1 space-y-1">
                        <li>Placas fenólico</li>
                        <li>OSB</li>
                        <li>Fibrocemento (baño / cocina)</li>
                        <li>Durlock</li>
                      </ul>
                    </div>
                  </li>
                  <li className="li">
                    <Check /> Bocas de agua y gas (termofusión).
                  </li>
                  <li className="li">
                    <Cube />
                    <div>
                      <strong className="text-[var(--forest-700)]">
                        Pisos y entrepisos
                      </strong>{" "}
                      (opcional):
                      <ul className="list-disc ml-5 mt-1 space-y-1">
                        <li>SIP</li>
                        <li>Placas</li>
                        <li>Otros</li>
                      </ul>
                    </div>
                  </li>
                </ul>

                <ul className="space-y-3">
                  <li className="li">
                    <Hammer />
                    <div>
                      <strong className="text-[var(--forest-700)]">
                        Revestimiento exterior
                      </strong>{" "}
                      (opcional):
                      <ul className="list-disc ml-5 mt-1 space-y-1">
                        <li>Placas + barrera hidrófuga + chapa</li>
                        <li>Placas + barrera hidrófuga + siding</li>
                        <li>Otros</li>
                      </ul>
                    </div>
                  </li>
                  <li className="li">
                    <Bolt /> Instalación eléctrica hasta tablero.
                  </li>
                  <li className="li">
                    <Check /> Cenefas, perfiles y esquineros.
                  </li>
                </ul>
              </div>

              <p className="mt-4 text-xs muted">
                Nota: mL = metros lineales.
              </p>
            </div>
          </div>
        </section>

        {/* ========================= NO INCLUYE ========================= */}
        <section id="no-incluye" className="py-[var(--gap-xl)]">
          <div className="container-tbv">
            <div className="surface p-6">
              <h2
                className="text-2xl md:text-3xl font-extrabold"
                style={{ color: "var(--forest-700)" }}
              >
                No incluye
              </h2>

              <ul className="mt-3 grid md:grid-cols-2 gap-2 text-sm muted leading-relaxed">
                <li className="li">
                  <XIcon /> Artefactos.
                </li>
                <li className="li">
                  <XIcon /> Griferías.
                </li>
                <li className="li">
                  <XIcon /> Muebles.
                </li>
                <li className="li">
                  <XIcon /> Pisos flotantes.
                </li>
                <li className="li">
                  <XIcon /> Conexiones a redes (agua/gas/luz/cloacas).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================= CONTACTO ========================= */}
        <section id="contacto" className="py-[var(--gap-xl)]">
          <div className="container-tbv">
            <div className="surface p-6 grid md:grid-cols-2 gap-6 items-center">
              <div className="text-center">
                <Image
                  src="/nomada.png"
                  alt="NÓMADA Tiny Houses"
                  width={88}
                  height={88}
                  className="mx-auto block rounded-md"
                  priority
                />
                <h2
                  className="mt-3 text-2xl md:text-3xl font-extrabold"
                  style={{ color: "var(--forest-700)" }}
                >
                  Contacto
                </h2>
                <p className="muted mt-2 max-w-[65ch] mx-auto">
                  ¿Consultas, precio y financiación? Escribinos al WhatsApp o
                  por Instagram.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href="https://wa.me/5492944554235?text=Hola%20N%C3%93MADA%2C%20quiero%20consultar%20por%20una%20tiny%20house."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface p-4 hover:translate-y-[-2px] transition"
                >
                  <div
                    className="font-bold flex items-center gap-2"
                    style={{ color: "var(--forest-700)" }}
                  >
                    <Whats /> WhatsApp
                  </div>
                  <div className="text-sm muted">+54 9 294 455-4235</div>
                </a>
                <a
                  href="https://instagram.com/tu_usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface p-4 hover:translate-y-[-2px] transition"
                >
                  <div
                    className="font-bold flex items-center gap-2"
                    style={{ color: "var(--forest-700)" }}
                  >
                    <Insta /> Instagram
                  </div>
                  <div className="text-sm muted">@nomada.tinyhouses</div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= CTA ========================= */}
        <section className="py-[var(--gap-xl)]">
          <div className="container-tbv grid md:grid-cols-2 items-center gap-6">
            <div className="surface p-6">
              <h3
                className="text-2xl font-extrabold"
                style={{ color: "var(--forest-700)" }}
              >
                ¿Querés el catálogo completo?
              </h3>
              <p className="mt-2 muted leading-relaxed max-w-[65ch]">
                Planos, opciones de personalización y guía de montaje para cada
                modelo.
              </p>
              <div className="mt-4">
                <Link
                  href="https://wa.me/5492944554235"
                  className="btn btn-primary"
                >
                  <Whats /> Solicitar por WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
