import Link from "next/link";

export default function Footer(){
  return (
    <footer className="pt-10 pb-12" role="contentinfo" style={{ background:"var(--forest-700)", color:"#fff" }}>
      <div className="container-tbv grid md:grid-cols-3 gap-10">
        <div>
          <h4 className="font-bold text-white mb-2">NÓMADA • Tiny Houses</h4>
          <p className="text-sm text-white/90">Viviendas modulares eficientes y listas para habitar.</p>
        </div>

        <nav className="grid grid-cols-2 gap-2" aria-label="Enlaces del sitio">
          <Link href="#modelos-top" className="hover:underline">Modelos</Link>
          <Link href="#ficha-tecnica" className="hover:underline">Ficha técnica</Link>
          <Link href="#no-incluye" className="hover:underline">No incluye</Link>
          <Link href="#contacto" className="hover:underline">Contacto</Link>
        </nav>

        <div className="text-sm md:text-right text-white/90">
          © {new Date().getFullYear()} NÓMADA · Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
