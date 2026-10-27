import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "../components/FadeIn";
import imgSupplyBase from "../../imports/optimized/content/supply_base.webp";
import imgMarine from "../../imports/marine_services_1.jpg";
import imgWaste from "../../imports/waste_management_1.jpg";
import imgOilfield from "../../imports/oilfield_services_1.jpg";

const SERVICES = [
  {
    slug: "logistics-supply-base",
    title: "Logistics & Supply Base",
    subtitle: "Integrated Logistics & Strategic Supply Base Solutions",
    desc: "From port to wellsite, SEPCO manages the full logistics chain with precision — supply base operations, materials management, chemical storage, and customs clearance under one accountable platform.",
    img: imgSupplyBase,
    stats: ["478+ Port Calls", "250+ ISO Tanks", "100% On-Time"],
  },
  {
    slug: "marine-services",
    title: "Marine Services",
    subtitle: "Comprehensive Marine & Port Operations Support",
    desc: "24/7 vessel coordination, ISPS-compliant port security, crew change management, cargo handling, and offtake operations — all delivered by an experienced team with a zero-incident track record.",
    img: imgMarine,
    stats: ["478+ Port Calls", "267 Crew Changes", "344+ ISPS Ops"],
  },
  {
    slug: "waste-management",
    title: "Waste Management Services",
    subtitle: "Industrial Waste Treatment & Environmental Protection Solutions",
    desc: "The most complete waste management capability in West Africa — from offshore collection and hazardous waste handling to certified European export and local treatment, with full documentation.",
    img: imgWaste,
    stats: ["5,647 MT Exported", "3,838 MT Local", "Zero Incidents"],
  },
  {
    slug: "oil-field-services",
    title: "Drilling & Production Support",
    subtitle: "Advanced Drilling & Production Support Services",
    desc: "Integrated oilfield support designed to optimise drilling performance across Africa — drilling fluids, LMP supply, mud treatment, chemical blending, and exploration chemical services.",
    img: imgOilfield,
    stats: ["2 Owned LMP Units", "44,000 BBL Capacity", "100% Market Coverage"],
  },
];

export function Services() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ backgroundColor: "#034e7c" }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${imgSupplyBase})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #034e7c 25%, rgba(3,78,124,0.45) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}>
                Our Services
              </span>
            </div>
            <h1 className="text-white uppercase mb-6 max-w-2xl" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}>Four services<br />One integrated<br /><span style={{ color: "rgba(255,255,255,0.72)" }}>partnership</span></h1>
            <p className="max-w-xl leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>
              SEPCO delivers fully integrated oil and gas support services through a single operational platform — reducing interfaces, controlling risk, and improving execution certainty for our clients.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs tracking-widest uppercase mb-12" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#94A3B8", letterSpacing: "0.2em" }}>
              All Services
            </p>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <StaggerItem key={service.slug}>
                <Link to={`/services/${service.slug}`} className="block group" style={{ textDecoration: "none" }}>
                  <div
                    className="overflow-hidden h-full flex flex-col"
                    style={{ border: "1px solid rgba(0,0,0,0.07)" }}
                  >
                    {/* Image */}
                    <div className="aspect-video overflow-hidden" style={{ backgroundColor: "#F1F5F9" }}>
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-8 flex flex-col flex-1">
                      <h3
                        className="uppercase mb-2 transition-colors duration-200 group-hover:text-[#034e7c]"
                        style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "1.6rem", lineHeight: 1.1 }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs mb-4" style={{ fontFamily: "Raleway, sans-serif", color: "#7e8474", fontWeight: 600 }}>
                        {service.subtitle}
                      </p>
                      <p className="text-sm leading-relaxed mb-6 flex-1" style={{ fontFamily: "Raleway, sans-serif", color: "#64748B" }}>
                        {service.desc}
                      </p>
                      {/* Stats row */}
                      <div className="flex gap-4 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                        {service.stats.map((stat) => (
                          <span key={stat} className="text-xs" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#034e7c" }}>
                            {stat}
                          </span>
                        ))}
                      </div>
                      <div
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest transition-all duration-200 group-hover:gap-3"
                        style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#034e7c" }}
                      >
                        Learn More
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* INTEGRATED DELIVERY CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #034e7c 0%, #1a6e9f 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-white uppercase mb-4" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}>
              Need a tailored solution?
            </h2>
            <p className="mb-8 max-w-lg mx-auto" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.65)", fontSize: "1rem" }}>
              Our team will assess your operational requirements and design an integrated service package that delivers measurable results.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase"
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, letterSpacing: "0.08em", backgroundColor: "#ffffff", color: "#034e7c" }}
            >
              Discuss Your Requirements
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
