import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "../components/FadeIn";
import imgHero from "../../imports/enviroment.jpeg";

export function QhseEnvironmental() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ backgroundColor: "#034e7c" }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${imgHero})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #034e7c 25%, rgba(3,78,124,0.45) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mb-8 text-xs tracking-widest uppercase transition-colors hover:text-white"
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em" }}
            >
              <ArrowLeft size={12} />
              Back to About
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}>
                QHSE
              </span>
            </div>
            <h1 className="text-white uppercase mb-6 max-w-2xl" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}>
              Environmental
              <br />Protection
            </h1>
            <p className="max-w-xl leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>
              Minimising environmental impact through responsible and sustainable operations across our full scope of services.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PLACEHOLDER CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                  Our Environmental Commitment
                </span>
              </div>
              <h2 className="uppercase mb-6" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}>Operating responsibly<br /><span style={{ color: "#7e8474" }}>Protecting the future</span></h2>
              <p style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                At SEPCO Industries, environmental responsibility is embedded into every operational decision we make — from waste management and chemical handling to marine operations and logistics. We are committed to minimising environmental impact through responsible practices, regulatory compliance, and continuous improvement.
              </p>
            </FadeIn>
          </div>

          {/* Placeholder notice */}
          <FadeIn delay={0.1}>
            
          </FadeIn>
        </div>
      </section>

      {/* KEY AREAS PLACEHOLDER */}
      <section className="py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                Key Environmental Areas
              </span>
            </div>
            <h2 className="uppercase mb-14 max-w-lg" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}>Areas under development</h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(0,0,0,0.06)" }}>
            {[
              { num: "01", title: "Waste Management", desc: "Content placeholder — details of SEPCO's offshore waste export programme and certified disposal processes." },
              { num: "02", title: "ISO 14001 Compliance", desc: "Content placeholder — details of SEPCO's Environmental Management System certification and compliance framework." },
              { num: "03", title: "Emissions & Monitoring", desc: "Content placeholder — details of SEPCO's environmental monitoring, reporting, and emissions reduction initiatives." },
            ].map((item) => (
              <StaggerItem key={item.num}>
                <div className="bg-white p-8 h-full" style={{ opacity: 0.7 }}>
                  <div className="text-xs mb-4" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#7e8474", letterSpacing: "0.1em" }}>
                    {item.num}
                  </div>
                  <h3 className="uppercase mb-3" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "1.3rem", lineHeight: 1.1 }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed italic" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8" }}>
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* BACK LINK */}
      <section className="py-12" style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/about" className="inline-flex items-center gap-2 text-sm tracking-wider uppercase transition-all hover:gap-3" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#034e7c" }}>
            <ArrowLeft size={14} />
            Back to About
          </Link>
          <Link to="/qhse/quality-management" className="inline-flex items-center gap-2 text-sm tracking-wider uppercase transition-all hover:gap-3" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#034e7c" }}>
            ← Quality Management
          </Link>
        </div>
      </section>
    </div>
  );
}
