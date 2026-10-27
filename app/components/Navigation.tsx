import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import sepcoLogoColour from "../../imports/SEPCO_logo_-_colour-1.png";
import sepcoLogoWhite from "../../imports/SEPCO_logo_-_white-1.png";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Success Stories", path: "/success-stories" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0" style={{ height: "36px" }}>
            {/* Show colour logo on white nav, white logo on dark/transparent nav */}
            <img
              src={scrolled ? sepcoLogoColour : sepcoLogoWhite}
              alt="SEPCO Oil & Gas Industry"
              style={{
                height: "34px",
                width: "auto",
                transition: "opacity 0.2s ease",
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-xs tracking-widest uppercase transition-colors duration-200"
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: scrolled
                    ? isActive(link.path)
                      ? "#034e7c"
                      : "#034e7c"
                    : isActive(link.path)
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(255,255,255,0.85)",
                }}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ backgroundColor: scrolled ? "#034e7c" : "rgba(255,255,255,0.7)" }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 text-xs tracking-widest uppercase transition-all duration-200"
              style={{
                fontFamily: "Raleway, sans-serif",
                fontWeight: 600,
                letterSpacing: "0.1em",
                backgroundColor: scrolled ? "#034e7c" : "rgba(255,255,255,0.15)",
                color: "#ffffff",
                border: scrolled ? "none" : "1px solid rgba(255,255,255,0.4)",
                transition: "background-color 0.3s ease, border 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#023d63")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = scrolled
                  ? "#034e7c"
                  : "rgba(255,255,255,0.15)")
              }
            >
              Request a Proposal
            </Link>

            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ color: scrolled ? "#034e7c" : "#ffffff" }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-16"
            style={{ backgroundColor: "#034e7c" }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Mobile menu logo */}
            <div className="px-8 pt-6 pb-2">
              <img
                src={sepcoLogoWhite}
                alt="SEPCO Oil & Gas Industry"
                style={{ height: "32px", width: "auto" }}
              />
            </div>
            <nav className="flex flex-col p-8 gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="block text-3xl tracking-wide"
                    style={{
                      fontFamily: "Barlow Condensed, sans-serif",
                      fontWeight: 700,
                      color: isActive(link.path) ? "rgba(255,255,255,0.75)" : "#ffffff",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 text-sm tracking-widest uppercase mt-4"
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: 600,
                    backgroundColor: "#ffffff",
                    color: "#034e7c",
                  }}
                >
                  Request a Proposal
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
