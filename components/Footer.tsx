import Link from "next/link";

export default function Footer(){
  return (
    <footer className="border-t border-black/10 pt-10 pb-12" role="contentinfo" style={{ background:"#fff" }}>
      <div className="container-tbv grid md:grid-cols-3 gap-10" style={{ color:"var(--fg)" }}>
        <div>
          <h4 className="font-bold mb-2" style={{ color:"var(--forest-700)" }}>NÓMADA • Tiny Houses</h4>
          <p className="text-sm muted">Diseño modular · Off-grid · Montaje rápido</p>
        </div>

        <nav className="grid grid-cols-2 gap-2" aria-label="Enlaces del sitio">
          <Link href="/info" className="hover:underline">Info</Link>
          <Link href="/galeria" className="hover:underline">Galería</Link>
          <Link href="/sponsors" className="hover:underline">Partners</Link>
          <Link href="/tienda" className="hover:underline">Catálogo</Link>
        </nav>

        <div className="text-sm md:text-right muted">
          © {new Date().getFullYear()} NÓMADA
        </div>
      </div>
    </footer>
  );
}
