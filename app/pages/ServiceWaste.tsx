import image_protecting_the_enviroment_delivering_compliance_creating_lasting_valve_2 from '@/imports/protecting_the_enviroment_delivering_compliance_creating_lasting_valve-2.jpeg'
import image_waste_management_1 from '@/imports/waste_management-1.jpeg'
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Flame, Droplets, Layers, Cylinder, Scissors, Leaf, RadioTower, BatteryWarning, Globe, Lightbulb, Ship, AlertTriangle } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import imgWaste from "../../imports/waste_management_1.jpg";
import imgLargeScale from "../../imports/protecting_the_enviroment_delivering_compliance_creating_lasting_valve-1.jpeg";

const hazmatSubItems = [
  "Oily Rags and Used PPEs",
  "Oil Contaminated Filters and Waste Oils",
  "Waste Paint and Paint Cans",
  "Flammable Solvents and Thinners",
  "Absorbent Pads",
  "Expired Chemicals and Packaging",
  "Medical and Laboratory Waste",
  "Domestic Waste",
];

const services = [
  {
    icon: Flame,
    title: "HAZMAT Incineration Services",
    description: "Controlled incineration of hazardous materials, meeting all regulatory requirements for safe destruction.",
    subItems: hazmatSubItems,
  },
  {
    icon: Droplets,
    title: "Waste Water Treatment",
    description: "Advanced treatment processes to neutralise and safely discharge industrial waste water streams.",
    subItems: [],
  },
  {
    icon: Layers,
    title: "Drill Cuttings & Contaminated Solids",
    description: "Management of drill cuttings and contaminated solids via Thermal Desorption Unit (TDU) processing.",
    subItems: [],
  },
  {
    icon: Cylinder,
    title: "Steel Drum Crushing",
    description: "Safe mechanical crushing and decontamination of steel drums for volume reduction and recycling.",
    subItems: [],
  },
  {
    icon: Scissors,
    title: "Plastic Shredding",
    description: "Industrial plastic waste shredding to reduce volume and prepare materials for recycling or disposal.",
    subItems: [],
  },
  {
    icon: Leaf,
    title: "Bioremediation",
    description: "Biological treatment of contaminated soils and substrates to restore environmental integrity.",
    subItems: [],
  },
  {
    icon: RadioTower,
    title: "NORM Storage",
    description: "Secure storage and management of Naturally Occurring Radioactive Materials in compliance with international standards.",
    subItems: [],
  },
  {
    icon: BatteryWarning,
    title: "Waste Batteries",
    description: "Compliant collection, classification, and export of waste batteries for certified treatment and recycling.",
    subItems: [],
  },
  {
    icon: Globe,
    title: "Transboundary Waste Management",
    description: "End-to-end management of waste exports to approved treatment facilities in Europe and beyond.",
    subItems: [],
  },
  {
    icon: Lightbulb,
    title: "Fluorescent Bulbs Management",
    description: "Safe handling and disposal of mercury-containing fluorescent lighting waste streams.",
    subItems: [],
  },
  {
    icon: Ship,
    title: "Supply Vessels & Rig Tank Cleaning",
    description: "Automated cleaning of supply vessel and rig tanks with full waste capture and certified disposal.",
    subItems: [],
  },
  {
    icon: AlertTriangle,
    title: "Oil Spill Response Services",
    description: "Rapid deployment of oil spill response resources with containment, recovery, and remediation capability.",
    subItems: [],
  },
];

export function ServiceWaste() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ backgroundColor: "#034e7c" }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${imgWaste})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #034e7c 25%, rgba(3,78,124,0.45) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn>
            <Link to="/services" className="inline-flex items-center gap-2 mb-8 text-xs tracking-widest uppercase hover:text-white transition-colors" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em" }}>
              <ArrowLeft size={12} /> All Services
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}>Waste Management Services</span>
            </div>
            <h1 className="text-white uppercase mb-6 max-w-2xl" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05 }}>Safe. Compliant<br />Sustainable<br /><span style={{ color: "rgba(255,255,255,0.72)" }}>Waste Solutions</span></h1>
            <p className="max-w-xl leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>
              The most complete waste management capability in West Africa — certified export, local treatment, and full environmental compliance.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>About SEPCO Waste Management</span>
              </div>
              <h2 className="uppercase mb-6" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1 }}>Protecting the environment<br />Delivering compliance<br />Creating lasting value</h2>
              <p className="leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.8, fontSize: "0.9375rem" }}>
                SEPCO Waste Management delivers safe, compliant, and sustainable waste management solutions that help industries reduce environmental risk, achieve regulatory compliance, and meet their sustainability goals. Through operational excellence, full waste traceability, and a strong commitment to resource recovery and circular economy principles, we create lasting value for our clients while protecting the environment.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[{ value: "Zero", label: "Environmental Incidents" }, { value: "100%", label: "Waste Traceability" }, { value: "ISO", label: "Certified Processes" }].map((stat) => (
                  <div key={stat.label} className="p-4 text-center" style={{ backgroundColor: "#F8FAFC", border: "1px solid rgba(0,0,0,0.07)" }}>
                    <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "1.5rem", lineHeight: 1 }}>{stat.value}</div>
                    <div className="mt-1 text-xs leading-tight" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="aspect-video overflow-hidden" style={{ backgroundColor: "#F1F5F9" }}>
                <img src={image_protecting_the_enviroment_delivering_compliance_creating_lasting_valve_2} alt="SEPCO Waste Management Operations" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>What We Do</span>
            </div>
            <h2 className="uppercase mb-12 max-w-2xl" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1 }}>Full-spectrum waste management<br />across every stream and sector</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={i * 0.04}>
                  <div
                    className="p-6 h-full flex flex-col"
                    style={{ backgroundColor: "#ffffff", border: "1px solid rgba(0,0,0,0.07)" }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 shrink-0 flex items-center justify-center" style={{ backgroundColor: "rgba(3,78,124,0.08)" }}>
                        <Icon size={18} style={{ color: "#034e7c" }} />
                      </div>
                      <h3 className="uppercase leading-tight pt-1" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#034e7c", fontSize: "1.05rem" }}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.7 }}>
                      {service.description}
                    </p>
                    {service.subItems.length > 0 && (
                      <div className="mt-auto pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                        <p className="text-xs uppercase tracking-wider mb-3" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474" }}>Includes:</p>
                        <ul className="space-y-1.5">
                          {service.subItems.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "#034e7c" }} />
                              <span className="text-xs leading-snug" style={{ fontFamily: "Raleway, sans-serif", color: "#374151" }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrated delivery */}
      <section className="py-24" style={{ backgroundColor: "#034e7c" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}>Integrated Delivery</span>
            </div>
            <h2 className="text-white uppercase mb-6 max-w-2xl" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Waste management as part of one platform</h2>
            <p className="max-w-2xl mb-12 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.65)", fontSize: "0.9375rem" }}>
              SEPCO's waste management capability is fully integrated with our supply base, logistics, and marine operations. Waste is collected, classified, and disposed of within the same operational flow as all other services — reducing complexity and ensuring consistent HSEQ standards throughout.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "What Integration Means in Practice",
                points: [
                  "Waste streams managed within the same operational command structure",
                  "Shared HSSE systems ensuring consistent compliance",
                  "Coordinated collection aligned with supply vessel schedules",
                  "Fewer interfaces between waste generation and final disposal",
                  "Complete end-to-end documentation in one system",
                ],
              },
              {
                title: "Why It Matters to Our Clients",
                points: [
                  "Reduced compliance risk and regulatory exposure",
                  "Simplified reporting — one operator, one audit trail",
                  "Faster turnaround on waste disposal",
                  "One accountable operator responsible for all environmental obligations",
                  "Circular economy principles embedded throughout the service",
                ],
              },
            ].map((section) => (
              <FadeIn key={section.title}>
                <div className="p-8 h-full" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
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

      {/* Footer nav */}
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
