import { navLinks } from '../data'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <a href="#top" className="brand">
          N<span>.</span>Kiran
        </a>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary">
          Let&apos;s talk
        </a>
      </div>
    </header>
  )
}
