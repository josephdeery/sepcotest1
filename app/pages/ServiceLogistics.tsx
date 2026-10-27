import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import imgSupplyBase from "../../imports/optimized/content/supply_base.webp";
import imgLogistics from "../../imports/optimized/content/logistics.webp";

export function ServiceLogistics() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ backgroundColor: "#034e7c" }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${imgSupplyBase})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #034e7c 25%, rgba(3,78,124,0.45) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn>
            <Link to="/services" className="inline-flex items-center gap-2 mb-8 text-xs tracking-widest uppercase hover:text-white transition-colors" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em" }}>
              <ArrowLeft size={12} /> All Services
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}>Logistics & Supply Base</span>
            </div>
            <h1 className="text-white uppercase mb-6 max-w-2xl" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}>
              Integrated Logistics
              <br />&amp; Strategic
              <br /><span style={{ color: "rgba(255,255,255,0.72)" }}>Supply Base Solutions</span>
            </h1>
            <p className="max-w-xl leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>
              From port to wellsite, SEPCO manages the full logistics chain with precision — one accountable platform for all your supply base requirements.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>What We Do</span>
              </div>
              <h2 className="uppercase mb-6" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}>Full logistics chain<br />One accountable partner</h2>
              <p className="mb-6 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                SEPCO provides comprehensive logistics support and supply base management services to the oil and gas industry. From port to wellsite, we manage the full logistics chain with precision and accountability.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Supply base operations and management",
                  "Materials management and warehousing",
                  "Chemical storage and dispensing",
                  "Bunkering support",
                  "Tank cleaning services",
                  "Freight forwarding and customs clearance",
                  "Inventory management and real-time reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#034e7c" }} />
                    <span className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#374151" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="aspect-video overflow-hidden" style={{ backgroundColor: "#F1F5F9" }}>
                <img src={imgLogistics} alt="SEPCO Logistics Operations" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* OUR DIFFERENTIATOR */}
      <section className="py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div className="aspect-video overflow-hidden" style={{ backgroundColor: "#F1F5F9" }}>
                <img src={imgSupplyBase} alt="SEPCO Supply Base" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>Our Differentiator</span>
              </div>
              <h2 className="uppercase mb-6" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}>Why clients choose<br />SEPCO</h2>
              <div className="space-y-3">
                {[
                  "Single-point accountability for all logistics activities",
                  "Owned infrastructure — no third-party dependency",
                  "Deep regulatory knowledge of West African ports",
                  "Integrated HSSE management across all operations",
                  "Real-time inventory tracking and reporting",
                  "Proven track record with major energy operators since 2011",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#7e8474" }} />
                    <span className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#374151" }}>{point}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* QHSE FOCUS + KEY NUMBERS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>QHSE Focus</span>
              </div>
              <h2 className="uppercase mb-6" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Safety embedded<br />in every process</h2>
              <div className="space-y-3">
                {[
                  "Permits to work and risk assessments for all operations",
                  "Regular HSE training for all logistics personnel",
                  "COSHH assessments for chemical handling activities",
                  "Internal and external audit schedules",
                  "Compliance with international port and logistics standards",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#034e7c" }} />
                    <span className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>Key Numbers</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "478+", label: "Port Calls Managed" },
                  { value: "250+", label: "ISO Tanks Coordinated" },
                  { value: "100%", label: "On-Time Delivery Rate" },
                  { value: "Since 2011", label: "Operating in Mauritania" },
                ].map((stat) => (
                  <div key={stat.label} className="p-5" style={{ backgroundColor: "#F8FAFC", border: "1px solid rgba(0,0,0,0.07)" }}>
                    <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "1.75rem", lineHeight: 1 }}>{stat.value}</div>
                    <div className="mt-1 text-xs" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* INTEGRATED DELIVERY */}
      <section className="py-24" style={{ backgroundColor: "#034e7c" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}>Integrated Delivery</span>
            </div>
            <h2 className="text-white uppercase mb-6 max-w-2xl" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}>One platform<br />Zero gaps</h2>
            <p className="max-w-2xl mb-12 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.65)", fontSize: "0.9375rem" }}>
              SEPCO delivers fully integrated oil and gas support services through a single operational platform. By combining supply base operations, materials management, chemical storage, bunkering support, and logistics management under one coordinated model, we reduce interfaces, control risk, and improve execution certainty.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="left" delay={0.1}>
              <div className="p-8" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <h3 className="uppercase mb-5 text-white" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.2rem" }}>What Integration Means in Practice</h3>
                <div className="space-y-3">
                  {["A single operational command structure across all services", "Shared HSSE systems and permit-to-work processes", "Unified planning between logistics, materials, marine and chemical operations", "Fewer handovers, clearer accountability and faster decision-making", "End-to-end visibility from port arrival to offshore delivery"].map((p) => (
                    <div key={p} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
                      <span className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.7)" }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div className="p-8" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <h3 className="uppercase mb-5 text-white" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.2rem" }}>Why It Matters to Our Clients</h3>
                <div className="space-y-3">
                  {["Reduced operational and HSE risk", "Improved reliability during offshore campaigns", "Optimised costs through reduced duplication and re-handling", "One accountable operator responsible for delivery"].map((p) => (
                    <div key={p} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
                      <span className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.7)" }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* NAV */}
      <section className="py-12" style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm tracking-wider uppercase hover:gap-3 transition-all" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#034e7c" }}>
            <ArrowLeft size={14} /> All Services
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wider uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, backgroundColor: "#034e7c", color: "#ffffff" }}>
            Request a Proposal <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
