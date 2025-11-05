import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ====== SVG inline (iconos) ====== */
const Check = () => (
  <svg viewBox="0 0 24 24" className="icon" aria-hidden>
    <path fill="currentColor" d="M9.55 17.6 4.9 13l1.4-1.4 3.25 3.2 8.2-8.2 1.4 1.45-9.6 9.55Z"/>
  </svg>
);
const Bolt = () => (
  <svg viewBox="0 0 24 24" className="icon" aria-hidden>
    <path fill="currentColor" d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/>
  </svg>
);
const Cube = () => (
  <svg viewBox="0 0 24 24" className="icon" aria-hidden>
    <path fill="currentColor" d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.2 6.5 3.6L12 11 5.5 7.8 12 4.2ZM5 9.5l6 3.3V19l-6-3.3V9.5Zm14 0V15L13 19v-6.2l6-3.3Z"/>
  </svg>
);
const Hammer = () => (
  <svg viewBox="0 0 24 24" className="icon" aria-hidden>
    <path fill="currentColor" d="M2 21.5 9.5 14 11 15.5 3.5 23 2 21.5Zm7.8-9.2 2.9-2.9 3.3 3.3-2.9 2.9-3.3-3.3Zm9.9-6.8-3.9-3.9L13.8 3.7l2.6 2.6-4.7 4.7 3.3 3.3 4.7-4.7 2.6 2.6 1.9-1.9-3.5-3.5Z"/>
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="icon" aria-hidden>
    <path fill="currentColor" d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3 1.4 1.4Z"/>
  </svg>
);
const Whats = () => (
  <svg viewBox="0 0 24 24" className="icon" aria-hidden>
    <path fill="currentColor" d="M20.5 3.5A11.5 11.5 0 0 0 12 1 11.6 11.6 0 0 0 .5 12.4 11.2 11.2 0 0 0 2.9 19L2 23l4.1-1a11.6 11.6 0 0 0 5.8 1.6h.1A11.4 11.4 0 0 0 23 12 11.3 11.3 0 0 0 20.5 3.5ZM12 21.2a9.5 9.5 0 0 1-4.8-1.3l-.3-.2-2.8.7.7-2.8-.2-.3a9.5 9.5 0 1 1 8 3.9Zm5.3-6.8c-.3-.1-1.8-.9-2.1-1s-.5-.1-.7.1l-.9 1.1c-.2.2-.4.2-.7.1s-1.3-.5-2.5-1.5a8.3 8.3 0 0 1-1.5-1.9c-.2-.4 0-.6.1-.7l.6-.7c.1-.2.1-.3 0-.6l-1-2.3c-.2-.6-.5-.6-.7-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.3 2.3 3.6 5.6 5c.8.4 1.4.6 1.9.8.8.2 1.5.2 2 .1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.1-.2-.4-.3Z"/>
  </svg>
);
const Insta = () => (
  <svg viewBox="0 0 24 24" className="icon" aria-hidden>
    <path fill="currentColor" d="M12 2.2c3 0 3.4 0 4.6.1 1.2.1 2 .3 2.7.6.7.3 1.2.7 1.7 1.2.5.5.9 1 .12 1.7.3.7.5 1.5.6 2.7.1 1.2.1 1.6.1 4.6s0 3.4-.1 4.6c-.1 1.2-.3 2-.6 2.7-.3.7-.7 1.2-1.2 1.7-.5.5-1 .9-1.7 1.2-.7.3-1.5.5-2.7.6-1.2.1-1.6.1-4.6.1s-3.4 0-4.6-.1c-1.2-.1-2-.3-2.7-.6a6.8 6.8 0 0 1-1.7-1.2A4.7 4.7 0 0 1 2.9 19c-.3-.7-.5-1.5-.6-2.7C2.2 15.1 2.2 14.7 2.2 12s0-3.4.1-4.6C.2 5.1.4 4 1 3a6.8 6.8 0 0 1 3-3c1-.6 2.1-.8 3.4-.9C9 0 8.6 0 7.4.1 6.1.2 5 .4 4 1A6.8 6.8 0 0 0 1 4c-.6 1-.8 2.1-.9 3.4C0 8.6 0 9 0 12s0 3.4.1 4.6C.2 18.9.4 20 1 21a6.8 6.8 0 0 0 3 3c1 .6 2.1.8 3.4.9 1.2.1 1.6.1 4.6.1s3.4 0 4.6-.1c1.3-.1 2.4-.3 3.4-.9a6.8 6.8 0 0 0 3-3c.6-1 .8-2.1.9-3.4.1-1.2.1-1.6.1-4.6s0-3.4-.1-4.6C23.8 5.1 23.6 4 23 3a6.8 6.8 0 0 0-3-3c-1-.6-2.1-.8-3.4-.9C15.4 0 15 0 12 0Z"/>
    <path fill="currentColor" d="M12 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8Zm0 10.1A3.9 3.9 0 1 1 15.9 12 3.9 3.9 0 0 1 12 15.9ZM18.4 4.6a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4Z"/>
  </svg>
);

export default function Page(){
  return (
    <>
      <Navbar />
      <main id="contenido">
        {/* =========================
            (1) Portada / Héroe
           ========================= */}
        <section className="hero">
          <div className="container-tbv grid md:grid-cols-2 items-center gap-10">
            <div>
              <h1
                className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
                style={{ color: "var(--forest-700)" }}
              >
                NÓMADA • Tiny Houses modulares
              </h1>

              <p className="mt-4 text-lg muted leading-relaxed max-w-[65ch]">
                Viviendas compactas, eficientes y listas para habitar.
                Estructuras ligeras, terminaciones premium y opciones off-grid.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <Link href="#modelos-top" className="btn btn-primary"><Bolt/> Ver modelos</Link>
                <Link href="#ficha-tecnica" className="btn btn-outline"><Cube/> Ficha técnica</Link>
              </div>

              <div className="mt-3 flex items-center gap-3 text-sm">
                <span className="badge-olive"><Check/> DVH</span>
                <span className="badge-coral"><Bolt/> Off-grid</span>
                <span className="badge-olive"><Hammer/> Obra seca</span>
              </div>
            </div>

            {/* ===== Carrusel por FADE, MISMO tamaño (3:2) ===== */}
            <div className="surface p-3">
              <div className="fade-carousel aspect-[3/2] w-full relative" role="region" aria-label="Modelos NÓMADA">
                <div className="fade-carousel__stage">
                  <figure className="fade-slide fade-slide--1">
                    <Image src="/casita-bonita.jpg" alt="La Mini" fill className="object-cover" priority />
                    <figcaption className="sr-only">La Mini</figcaption>
                  </figure>
                  <figure className="fade-slide fade-slide--2">
                    <Image src="/casa-chiquita.jpg" alt="La Midi" fill className="object-cover" />
                    <figcaption className="sr-only">La Midi</figcaption>
                  </figure>
                  <figure className="fade-slide fade-slide--3">
                    <Image src="/casa-mediana.jpg" alt="La Max" fill className="object-cover" />
                    <figcaption className="sr-only">La Max</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            NUESTRA LÍNEA — título previo al catálogo
           ========================= */}
        <section id="modelos-top" className="section">
          <div className="container-tbv">
            <header className="text-center mb-4">
              <p className="uppercase tracking-wider text-xs font-bold muted">Catálogo</p>
              <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color:"var(--forest-700)" }}>
                Nuestros modelos
              </h2>
              <p className="muted content-max mx-auto mt-2">
                Elegí el tamaño y estilo que mejor encaje con tu proyecto. Todas nuestras tiny pueden
                configurarse con opciones off-grid y terminaciones premium.
              </p>
            </header>
          </div>
        </section>

        {/* =========================
            (1) Modelos de Tiny Houses (cards)
           ========================= */}
        <section className="py-[var(--gap-xl)]" aria-labelledby="modelos-heading">
          <div className="container-tbv">
            <h2 id="modelos-heading" className="sr-only">Modelos de Tiny Houses</h2>

            {/* ====== La Mini ====== */}
            <div className="surface p-5 mb-6">
              <div className="grid md:grid-cols-[1.2fr_1fr] gap-4">
                <div className="surface p-4 flex items-center justify-center">
                  <Image
                    src="/casita-bonita.jpg"
                    alt="Modelo La Mini"
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </div>

                <article className="surface p-5" aria-labelledby="la-mini-title">
                  <h3 id="la-mini-title" className="text-xl font-extrabold" style={{ color:"var(--forest-700)" }}>
                    La Mini
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm muted">
                    <li className="li"><Cube/> <span><strong className="text-[var(--forest-700)]">Base:</strong> 15 m²</span></li>
                    <li className="li"><Cube/> <span><strong className="text-[var(--forest-700)]">Medidas:</strong> 3 m × 5 m</span></li>
                    <li className="li"><Check/> <span><strong className="text-[var(--forest-700)]">Capacidad:</strong> 1–2 personas</span></li>
                    <li className="li"><Hammer/> <span><strong className="text-[var(--forest-700)]">Montaje:</strong> 90–100 días</span></li>
                  </ul>
                  <div className="mt-4 flex gap-3">
                    <Link href="#ficha-tecnica" className="btn btn-outline"><Cube/> Ver detalles</Link>
                    <Link href="#contacto" className="btn btn-primary"><Whats/> Consultar</Link>
                  </div>
                </article>
              </div>
            </div>

            {/* ====== La Midi ====== */}
            <div className="surface p-5 mb-6">
              <div className="grid md:grid-cols-[1.2fr_1fr] gap-4">
                <div className="surface p-4 flex items-center justify-center">
                  <Image
                    src="/casa-chiquita.jpg"
                    alt="Modelo La Midi"
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </div>

                <article className="surface p-5" aria-labelledby="la-midi-title">
                  <h3 id="la-midi-title" className="text-xl font-extrabold" style={{ color:"var(--forest-700)" }}>
                    La Midi
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm muted">
                    <li className="li"><Cube/> <span><strong className="text-[var(--forest-700)]">Base:</strong> 24 m²</span></li>
                    <li className="li"><Cube/> <span><strong className="text-[var(--forest-700)]">Medidas:</strong> 3 m × 8 m</span></li>
                    <li className="li"><Check/> <span><strong className="text-[var(--forest-700)]">Capacidad:</strong> 2–3 personas</span></li>
                    <li className="li"><Hammer/> <span><strong className="text-[var(--forest-700)]">Montaje:</strong> 100–120 días</span></li>
                  </ul>
                  <div className="mt-4 flex gap-3">
                    <Link href="#ficha-tecnica" className="btn btn-outline"><Cube/> Ver detalles</Link>
                    <Link href="#contacto" className="btn btn-primary"><Whats/> Consultar</Link>
                  </div>
                </article>
              </div>
            </div>

            {/* ====== La Max ====== */}
            <div className="surface p-5">
              <div className="grid md:grid-cols-[1.2fr_1fr] gap-4">
                <div className="surface p-4 flex items-center justify-center">
                  <Image
                    src="/casa-mediana.jpg"
                    alt="Modelo La Max"
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </div>

                <article className="surface p-5" aria-labelledby="la-max-title">
                  <h3 id="la-max-title" className="text-xl font-extrabold" style={{ color:"var(--forest-700)" }}>
                    La Max
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm muted">
                    <li className="li"><Cube/> <span><strong className="text-[var(--forest-700)]">Base:</strong> 30–36 m²</span></li>
                    <li className="li"><Cube/> <span><strong className="text-[var(--forest-700)]">Medidas:</strong> 3.5 m × 9–10 m</span></li>
                    <li className="li"><Check/> <span><strong className="text-[var(--forest-700)]">Capacidad:</strong> 3–4 personas</span></li>
                    <li className="li"><Hammer/> <span><strong className="text-[var(--forest-700)]">Montaje:</strong> 120–140 días</span></li>
                  </ul>
                  <div className="mt-4 flex gap-3">
                    <Link href="#ficha-tecnica" className="btn btn-outline"><Cube/> Ver detalles</Link>
                    <Link href="#contacto" className="btn btn-primary"><Whats/> Consultar</Link>
                  </div>
                </article>
              </div>
            </div>

          </div>
        </section>

        {/* =========================
            (2) Ficha técnica
           ========================= */}
        <section id="ficha-tecnica" className="py-[var(--gap-xl)]">
          <div className="container-tbv">
            <div className="surface p-6">
              <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color:"var(--forest-700)" }}>
                Ficha técnica
              </h2>

              <ul className="mt-4 grid md:grid-cols-2 gap-3 text-sm muted leading-relaxed">
                <li className="li"><Hammer/> Zapatas tipo pilotes (hierro estructural) y/o madera (a convenir).</li>
                <li className="li"><Hammer/> Estructura <em>Wood Frame</em>.</li>
                <li className="li"><Cube/> Piso base panel SIP.</li>
                <li className="li"><Cube/> Revestimiento interior: OSB 9 mm o fenólico 9 mm (a convenir).</li>
                <li className="li"><Check/> Aislación térmica/acústica e hidrófuga (a convenir).</li>
                <li className="li"><Check/> Desagües cloacales: salidas previstas de baño y cocina.</li>
                <li className="li"><Check/> Bocas de agua y gas (termofusión).</li>
                <li className="li"><Bolt/> Instalación eléctrica hasta tablero.</li>
                <li className="li"><Check/> Aberturas (puertas/ventanas) a convenir.</li>
                <li className="li"><Cube/> Pisos y entrepisos con placa fenólico 18 mm.</li>
                <li className="li"><Hammer/> Revestimiento exterior: OSB 8 mm + barrera hidrófuga + terminación.</li>
                <li className="li"><Check/> Cenefas, perfiles y esquineros.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================
            (3) No incluye
           ========================= */}
        <section id="no-incluye" className="py-[var(--gap-xl)]">
          <div className="container-tbv">
            <div className="surface p-6">
              <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color:"var(--forest-700)" }}>
                No incluye
              </h2>

              <ul className="mt-3 grid md:grid-cols-2 gap-2 text-sm muted leading-relaxed">
                <li className="li"><XIcon/> Artefactos.</li>
                <li className="li"><XIcon/> Griferías.</li>
                <li className="li"><XIcon/> Muebles.</li>
                <li className="li"><XIcon/> Pisos flotantes.</li>
                <li className="li"><XIcon/> Conexiones a redes (agua/gas/luz/cloacas).</li>
              </ul>

              <p className="mt-4 text-sm muted max-w-[65ch]">
                Si necesitás modalidad <strong>llave en mano</strong>, escribinos y te cotizamos los adicionales.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            Contacto
           ========================= */}
        <section id="contacto" className="py-[var(--gap-xl)]">
          <div className="container-tbv">
            <div className="surface p-6 grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color:"var(--forest-700)" }}>
                  Contacto
                </h2>
                <p className="muted mt-2 max-w-[65ch]">
                  ¿Consultas, precio y financiación? Escribinos al WhatsApp o por Instagram.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href="https://wa.me/5492944554235?text=Hola%20N%C3%93MADA%2C%20quiero%20consultar%20por%20una%20tiny%20house."
                  target="_blank" rel="noopener noreferrer"
                  className="surface p-4 hover:translate-y-[-2px] transition"
                >
                  <div className="font-bold flex items-center gap-2" style={{ color:"var(--forest-700)" }}>
                    <Whats/> WhatsApp
                  </div>
                  <div className="text-sm muted">+54 9 294 455-4235</div>
                </a>
                <a
                  href="https://instagram.com/tu_usuario"
                  target="_blank" rel="noopener noreferrer"
                  className="surface p-4 hover:translate-y-[-2px] transition"
                >
                  <div className="font-bold flex items-center gap-2" style={{ color:"var(--forest-700)" }}>
                    <Insta/> Instagram
                  </div>
                  <div className="text-sm muted">@tu_usuario</div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            CTA final
           ========================= */}
        <section className="py-[var(--gap-xl)]">
          <div className="container-tbv grid md:grid-cols-2 items-center gap-6">
            <div className="surface p-6">
              <h3 className="text-2xl font-extrabold" style={{ color:"var(--forest-700)" }}>
                ¿Querés el catálogo completo?
              </h3>
              <p className="mt-2 muted leading-relaxed max-w-[65ch]">
                Planos, opciones de personalización y guía de montaje para cada modelo.
              </p>
              <div className="mt-4">
                <Link href="https://wa.me/5492944554235" className="btn btn-primary"><Whats/> Solicitar por WhatsApp</Link>
              </div>
            </div>

            <div className="surface p-6">
              <p className="text-sm muted leading-relaxed max-w-[65ch]">
                Ajustá el contraste desde <code>/styles/globals.css</code>: fondo <code>--cream-100</code>,
                superficies <code>--card</code>, títulos <code>--forest-700</code>, acentos <code>--olive-500</code>/<code>--coral-500</code>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
