import { Link } from "react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import sepcoLogoWhite from "../../imports/SEPCO_logo_-_white-1.png";

const F = "Raleway, sans-serif";
const H = "Barlow Condensed, sans-serif";
const MUTED = "rgba(255,255,255,0.5)";
const LABEL = "rgba(255,255,255,0.85)";

export function Footer() {
  return (
    <footer
      className="border-t-4 border-[#7e8474] bg-[#034e7c] text-white"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About Company */}
          <div>
            <div className="mb-6">
              <img src={sepcoLogoWhite} alt="SEPCO Industries" style={{ height: "30px", width: "auto" }} />
            </div>
            <h4 className="text-xs uppercase tracking-widest mb-4" style={{ fontFamily: F, fontWeight: 700, color: LABEL, letterSpacing: "0.12em" }}>
              About Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", path: "/about" },
                { label: "Ethics & Compliance", path: "/ethics" },
                { label: "QHSE", path: "/about#qhse" },
                { label: "Contact Us", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm transition-colors hover:text-white" style={{ fontFamily: F, color: MUTED }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4" style={{ fontFamily: F, fontWeight: 700, color: LABEL, letterSpacing: "0.12em" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Projects", path: "/projects" },
                { label: "Success Stories", path: "/success-stories" },
                { label: "News", path: "/news" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm transition-colors hover:text-white" style={{ fontFamily: F, color: MUTED }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4" style={{ fontFamily: F, fontWeight: 700, color: LABEL, letterSpacing: "0.12em" }}>
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Logistics & Supply Base", path: "/services/logistics-supply-base" },
                { label: "Marine Services", path: "/services/marine-services" },
                { label: "Waste Management Services", path: "/services/waste-management" },
                { label: "Drilling & Production Support", path: "/services/oil-field-services" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm transition-colors hover:text-white" style={{ fontFamily: F, color: MUTED }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4" style={{ fontFamily: F, fontWeight: 700, color: LABEL, letterSpacing: "0.12em" }}>
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="shrink-0 mt-0.5" style={{ color: MUTED }} />
                <span className="text-sm" style={{ fontFamily: F, color: MUTED, lineHeight: 1.5 }}>
                  SOCOGIM No. 33, BP 5336<br />Nouakchott, Mauritania
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="shrink-0 mt-0.5" style={{ color: MUTED }} />
                <span className="text-sm" style={{ fontFamily: F, color: MUTED, lineHeight: 1.5 }}>
                  Domaine Industriel de Diamniadio<br />Dakar, Sénégal
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={13} style={{ color: MUTED }} />
                <a href="mailto:contact@sepco-ogi.com" className="text-sm transition-colors hover:text-white" style={{ fontFamily: F, color: MUTED }}>
                  contact@sepco-ogi.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={13} style={{ color: MUTED }} />
                <a href="tel:+22245255013" className="text-sm transition-colors hover:text-white" style={{ fontFamily: F, color: MUTED }}>
                  +222 45 25 50 13
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={13} style={{ color: MUTED }} />
                <a href="tel:+221339262292" className="text-sm transition-colors hover:text-white" style={{ fontFamily: F, color: MUTED }}>
                  +221 33 926 22 92
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-xs text-center sm:text-left" style={{ fontFamily: F, color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} SEPCO Industries. All rights reserved. | QHSE, ISO &amp; TRACE Certified
          </p>
          <div className="flex gap-4">
            <a href="mailto:recrutement@sepco-ogi.com" className="text-xs transition-colors hover:text-white" style={{ fontFamily: F, color: "rgba(255,255,255,0.3)" }}>
              Recruitment
            </a>
            <Link to="/ethics" className="text-xs transition-colors hover:text-white" style={{ fontFamily: F, color: "rgba(255,255,255,0.3)" }}>
              Ethics &amp; Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
