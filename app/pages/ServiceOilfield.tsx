import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import imgOilfield from "../../imports/oilfield_services_1.jpg";
import imgChemicals from "../../imports/oilfield_services_2.jpg";

export function ServiceOilfield() {
  return (
    <div>
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ backgroundColor: "#034e7c" }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${imgOilfield})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #034e7c 25%, rgba(3,78,124,0.45) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn>
            <Link to="/services" className="inline-flex items-center gap-2 mb-8 text-xs tracking-widest uppercase hover:text-white transition-colors" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em" }}>
              <ArrowLeft size={12} /> All Services
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}>Drilling & Production Support</span>
            </div>
            <h1 className="text-white uppercase mb-6 max-w-2xl" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}>
              Advanced Drilling
              <br />&amp; Production
              <br /><span style={{ color: "rgba(255,255,255,0.72)" }}>Support Services</span>
            </h1>
            <p className="max-w-xl leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>
              Integrated oilfield support designed to optimise drilling performance across Africa — from drilling fluids to LMP supply and chemical solutions.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>What We Do</span>
              </div>
              <h2 className="uppercase mb-6" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}>Performance-driven<br />solutions at<br />the wellsite</h2>
              <p className="mb-6 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                SEPCO Industries provides integrated oilfield support services designed to optimise drilling performance, enhance operational efficiency, and support exploration activities across Africa. We support operators with efficient fluid management and chemical solutions designed for performance and compliance.
              </p>
              <ul className="space-y-2.5">
                {["Drilling fluid services", "LMP supply with full regional market coverage", "2 owned and operated LMP units (14,000 & 10,300 BBL capacity)", "Mud treatment and centrifugation services", "Chemical mixing and blending", "Exploration chemical supply", "Advanced filtration services"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#034e7c" }} />
                    <span className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#374151" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="aspect-video overflow-hidden" style={{ backgroundColor: "#F1F5F9" }}>
                <img src={imgOilfield} alt="SEPCO Oilfield Equipment" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div className="aspect-video overflow-hidden" style={{ backgroundColor: "#F1F5F9" }}>
                <img src={imgChemicals} alt="SEPCO Chemical Operations" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>Our Differentiator</span>
              </div>
              <h2 className="uppercase mb-6" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>100% LMP market<br />coverage in the region</h2>
              <div className="space-y-3">
                {["100% LMP market coverage in Mauritania", "Owned infrastructure — not third-party dependent", "Strategic partnerships with international chemical providers", "Custom blending capability for specific project requirements", "Operational flexibility and rapid responsiveness", "From drilling fluids to chemical optimisation — performance-driven at every wellsite"].map((point) => (
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>QHSE Focus</span>
              </div>
              <h2 className="uppercase mb-6" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Controlled processes <br />Safe execution</h2>
              <div className="space-y-3">
                {["Controlled chemical handling systems at all facilities", "Certified storage and transfer procedures", "Environmental protection measures at every site", "Compliance with international oilfield standards", "Continuous workforce training and competency assessment", "Internal audit schedules maintained throughout operations"].map((item) => (
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
                {[{ value: "2", label: "Owned LMP Units" }, { value: "44,000 BBL", label: "Total Storage Capacity" }, { value: "100%", label: "Regional Market Coverage" }, { value: "Multiple", label: "Chemical Product Lines Supported" }].map((stat) => (
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

      <section className="py-24" style={{ backgroundColor: "#034e7c" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}>Integrated Delivery</span>
            </div>
            <h2 className="text-white uppercase mb-6 max-w-2xl" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}>From chemical supply to wellsite delivery — one platform</h2>
            <p className="max-w-2xl mb-12 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.65)", fontSize: "0.9375rem" }}>
              SEPCO delivers fully integrated oil and gas support services through a single operational platform. By combining supply base operations, materials management, chemical storage, bunkering support, tank cleaning, and logistics management under one coordinated model, we reduce interfaces, control risk, and improve execution certainty.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{ title: "What Integration Means in Practice", points: ["A single operational command structure across all services", "Shared HSSE systems and permit-to-work processes", "Unified planning between logistics, materials, marine and chemical operations", "Fewer handovers, clearer accountability and faster decision-making", "End-to-end visibility from port arrival to offshore delivery"] }, { title: "Why It Matters to Our Clients", points: ["Reduced operational and HSE risk", "Improved reliability during offshore campaigns", "Optimised costs through reduced duplication and re-handling", "One accountable operator responsible for delivery"] }].map((section) => (
              <FadeIn key={section.title}>
                <div className="p-8" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h3 className="uppercase mb-5 text-white" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.2rem" }}>{section.title}</h3>
                  <div className="space-y-3">
                    {section.points.map((p) => (
                      <div key={p} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
                        <span className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.7)" }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

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
