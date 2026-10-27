import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Shield, MapPin, Layers } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "../components/FadeIn";
import heroVideo from "../../imports/Untitled-1.mp4";
import imgLogistics from "../../imports/logistics_and_supply_base.jpg";
import imgMarine from "../../imports/marine_services.jpg";
import imgOilfield from "../../imports/oilfield_services.jpg";
import imgWaste from "../../imports/image__1_.png";
import logoBakerHughes from "../../imports/baker-hughes-logo-1.png";
import logoBambini from "../../imports/bambini-1.jpg";
import logoBourbon from "../../imports/bourbon-logo-1.png";
import logoBP from "../../imports/bp-logo-transparent.png";
import logoHalliburton from "../../imports/halliburton_logo-2.jpg";
import logoJanDeNul from "../../imports/Jan_De_Nul-1.png";
import logoKosmos from "../../imports/kosmos-2.png";
import logoMiSwaco from "../../imports/mi-swaco-1.svg";
import logoOceanInstaller from "../../imports/ocean_installer_logo-1.png";
import logoOceaneering from "../../imports/Oceaneering_International_logo-1.png";

const STATS = [
  { value: 478, suffix: "+", label: "Port Calls Managed", sub: "at Nouakchott" },
  { value: 250, suffix: "+", label: "ISO Tanks Delivered", sub: "Methanol logistics" },
  { value: 5647, suffix: " MT", label: "Waste Exported", sub: "to Europe, zero incidents" },
  { value: 344, suffix: "+", label: "ISPS Operations", sub: "Full compliance" },
];

const SERVICES = [
  {
    number: "01",
    slug: "logistics-supply-base",
    title: "Integrated Logistics & Supply Base",
    outcome: "End-to-end logistics and strategic supply base solutions — from port to wellsite, one accountable platform for your entire supply chain.",
    image: imgLogistics,
  },
  {
    number: "02",
    slug: "marine-services",
    title: "Marine & Port Operations",
    outcome: "Comprehensive marine and port operations support — 478+ port calls, 267 crew changes, ISPS compliance, 24/7 vessel coordination.",
    image: imgMarine,
  },
  {
    number: "03",
    slug: "waste-management",
    title: "Industrial Waste & Environmental Services",
    outcome: "Industrial waste treatment and environmental protection — 9,485 MT managed, certified export, zero environmental incidents.",
    image: imgWaste,
  },
  {
    number: "04",
    slug: "oil-field-services",
    title: "Drilling & Production Support",
    outcome: "Drilling fluids, LMP supply (44,000 BBL capacity), chemical blending and wellsite support — full technical coverage across the region.",
    image: imgOilfield,
  },
];

const PILLARS = [
  {
    icon: Layers,
    title: "Oil & Gas Expertise",
    body: "Led by experienced industry professionals with decades of frontline energy sector experience.",
  },
  {
    icon: ArrowRight,
    title: "Integrated Services",
    body: "Single provider across logistics, marine, waste, and technical disciplines — coordinated under one operating model.",
  },
  {
    icon: MapPin,
    title: "Local Execution",
    body: "Strong local footprint, established workforce, and deep regional knowledge across West Africa.",
  },
  {
    icon: Shield,
    title: "International Standards",
    body: "Global operating procedures, HSE compliance, and certifications aligned with major operator requirements.",
  },
];

const CLIENTS = [
  { src: logoKosmos, alt: "Kosmos Energy" },
  { src: logoBP, alt: "BP", height: 72, maxWidth: 200 },
  { src: logoHalliburton, alt: "Halliburton", height: 80, maxWidth: 260 },
  { src: logoBourbon, alt: "Bourbon", height: 100, maxWidth: 300 },
  { src: logoBakerHughes, alt: "Baker Hughes" },
  { src: logoMiSwaco, alt: "MI Swaco" },
  { src: logoJanDeNul, alt: "Jan De Nul" },
  { src: logoOceanInstaller, alt: "Ocean Installer", height: 110, maxWidth: 320 },
  { src: logoOceaneering, alt: "Oceaneering International" },
  { src: logoBambini, alt: "Bambini" },
];

const OPERATOR_NEEDS = ["Chemicals", "Warehousing", "Customs", "Port Calls", "Waste", "Marine Support", "Crew Changes", "Freight"];

function CounterStat({ value, suffix, label, sub }: (typeof STATS)[0]) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-5xl md:text-6xl mb-2"
        style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}
      >
        {count.toLocaleString()}{suffix}
      </div>
      <div
        className="text-sm mb-1"
        style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#ffffff", letterSpacing: "0.05em" }}
      >
        {label}
      </div>
      <div className="text-xs" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.4)" }}>
        {sub}
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#0a1220" }}>
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover", filter: "contrast(1.15) saturate(1.28)" }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Cinematic base — light neutral veil so footage breathes */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,10,0.30)" }} />
        {/* Text-protection gradient — heavier on the content side only */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, rgba(10,10,10,0.48) 0%, rgba(10,10,10,0.10) 55%, rgba(10,10,10,0.00) 100%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.3)" }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "0.18em" }}
              >
                Energy Services · Global Operations
              </span>
            </div>

            <h1
              className="text-white mb-6 max-w-4xl uppercase"
              style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, letterSpacing: "-0.01em", lineHeight: 1.0 }}
            >Integrated Energy Services<br /><span style={{ color: "rgba(255,255,255,0.72)" }}>for Complex oil<br />and gas Operations</span></h1>

            <p
              className="mb-10 max-w-2xl leading-relaxed"
              style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.65)", fontSize: "1.0625rem", fontWeight: 400 }}
            >Combining oil and gas expertise, logistics excellence, technical services, marine support, and local execution to deliver safe, reliable, and cost-effective solutions across the globe.</p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm tracking-wider uppercase transition-all duration-200"
                style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, letterSpacing: "0.08em", backgroundColor: "#034e7c", color: "#ffffff" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#023d63")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#034e7c")}
              >
                Explore Our Services
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm tracking-wider uppercase transition-all duration-200"
                style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, letterSpacing: "0.08em", color: "#ffffff", border: "1px solid rgba(255,255,255,0.25)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")}
              >
                View Projects
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Raleway, sans-serif", letterSpacing: "0.2em" }}>
              Scroll
            </span>
            <motion.div
              className="w-px h-10"
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              animate={{ scaleY: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ backgroundColor: "#012540" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <CounterStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILT BY OIL & GAS PROFESSIONALS + WE SPEAK THE LANGUAGE ── */}
      <section style={{ backgroundColor: "#0a1629" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0 lg:gap-x-12">
            <FadeIn direction="left">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                  <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                    Our Foundation
                  </span>
                </div>
                <h2
                  className="mb-5 uppercase"
                  style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.05 }}
                >
                  Built by Oil &amp; Gas<br />
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>Professionals</span>
                </h2>
                <p className="leading-relaxed mb-8" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.52)", fontSize: "0.9375rem" }}>
                  SEPCO's leadership and technical teams bring decades of experience from global energy service companies, combining international oil and gas expertise with local execution capability.
                </p>
                <div className="space-y-2">
                  {[
                    "Decades of frontline energy industry experience",
                    "Tier 1 operator and contractor background",
                    "Multi-discipline technical capability",
                    "International HSE and operating standards",
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-3 px-4 py-3" style={{ border: "1px solid rgba(255,255,255,0.07)", backgroundColor: "rgba(255,255,255,0.03)" }}>
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#7e8474" }} />
                      <span style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.55)", fontSize: "0.875rem" }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Vertical separator — standalone element avoids border-color shorthand conflict */}
            <div className="hidden lg:block w-px mx-8 self-stretch" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />

            <FadeIn direction="right" delay={0.15}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8" style={{ backgroundColor: "#034e7c" }} />
                  <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(3,78,124,0.85)", letterSpacing: "0.15em" }}>
                    Operational Understanding
                  </span>
                </div>
                <h2
                  className="mb-5 uppercase"
                  style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.05 }}
                >
                  We Speak the<br />
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>Language of Operations</span>
                </h2>
                <p className="leading-relaxed mb-8" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.52)", fontSize: "0.9375rem" }}>
                  Our teams understand the operational and technical challenges facing drilling, production, logistics, marine and commissioning teams because many of our people have worked directly within those environments.
                </p>
                <div className="space-y-3">
                  {[
                    "Real operational experience — not just service delivery",
                    "Technical understanding of drilling and production requirements",
                    "Familiar with the realities of offshore and onshore operations",
                    "Highly experienced industry experts familiar with the realities of offshore and onshore operations",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "#034e7c" }} />
                      <span style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.48)", fontSize: "0.875rem", lineHeight: 1.6 }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES SEPCO DIFFERENT — 4 PILLARS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                Our Difference
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <h2
                className="uppercase"
                style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                What Makes SEPCO<br />
                <span style={{ color: "#7e8474" }}>Different?</span>
              </h2>
              <p className="max-w-md" style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", fontSize: "0.9375rem", lineHeight: 1.7 }}>
                We are not a generalist contractor. We are an integrated energy services partner with the expertise, infrastructure and operational depth to deliver where it matters.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(0,0,0,0.06)" } as CSSProperties}>
            {PILLARS.map((pillar, i) => (
              <StaggerItem key={pillar.title}>
                <div className="h-full flex flex-col p-8" style={{ backgroundColor: "#ffffff" }}>
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-6 shrink-0"
                    style={{ backgroundColor: "#F1F5F9", border: "1px solid rgba(3,78,124,0.1)" }}
                  >
                    <pillar.icon size={18} style={{ color: "#034e7c" }} />
                  </div>
                  <h3
                    className="mb-3 uppercase"
                    style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "1.05rem", letterSpacing: "0.02em" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#64748B" }}>
                    {pillar.body}
                  </p>
                  <div className="mt-auto pt-6">
                    <div className="h-px" style={{ backgroundColor: i % 2 === 0 ? "#034e7c" : "#7e8474", opacity: 0.2 }} />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                  What We Deliver
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <h2
                  className="uppercase max-w-lg"
                  style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  One Partner.<br />Multiple Services.<br />
                  <span style={{ color: "#7e8474" }}>Consistent Delivery.</span>
                </h2>
                <div className="max-w-sm">
                  <p className="mb-4 text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#64748B" }}>
                    SEPCO coordinates and delivers multiple disciplines through a single integrated operating model — eliminating the risk and overhead of managing separate contractors.
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm tracking-wider uppercase transition-all duration-200 hover:gap-4"
                    style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, letterSpacing: "0.08em", color: "#7e8474" }}
                  >
                    All Services
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Integrated project delivery visual */}
          <FadeIn delay={0.1}>
            <div className="mb-10 p-6 md:p-8" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(0,0,0,0.07)" }}>
              <p className="text-xs tracking-widest uppercase mb-5 text-center" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#94A3B8", letterSpacing: "0.15em" }}>
                Operator Needs
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {OPERATOR_NEEDS.map((need) => (
                  <span
                    key={need}
                    className="px-3 py-1.5 text-xs"
                    style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#475569", border: "1px solid rgba(0,0,0,0.1)", backgroundColor: "#F8FAFC" }}
                  >
                    {need}
                  </span>
                ))}
              </div>
              <div className="flex justify-center mb-5">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-px h-6" style={{ backgroundColor: "rgba(3,78,124,0.2)" }} />
                  <div className="w-2 h-2 rotate-45" style={{ backgroundColor: "#034e7c", opacity: 0.35 }} />
                </div>
              </div>
              <div className="flex justify-center mb-5">
                <div className="px-8 py-3 text-center" style={{ backgroundColor: "#034e7c" }}>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "0.95rem", letterSpacing: "0.06em" }}>
                    SEPCO INTEGRATED OPERATING MODEL
                  </div>
                  <div style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", letterSpacing: "0.04em" }}>
                    Consistent · Cost-effective · Accountable
                  </div>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-2 h-2 rotate-45" style={{ backgroundColor: "#7e8474", opacity: 0.35 }} />
                  <div className="w-px h-6" style={{ backgroundColor: "rgba(126,132,116,0.2)" }} />
                </div>
              </div>
              <p className="text-center text-sm" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#7e8474", letterSpacing: "0.05em" }}>
                One Partner &nbsp;·&nbsp; Multiple Services &nbsp;·&nbsp; Consistent Delivery
              </p>
            </div>
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 gap-px"
            style={{ backgroundColor: "rgba(0,0,0,0.06)" } as CSSProperties}
          >
            {SERVICES.map((service) => (
              <StaggerItem key={service.number}>
                <Link to={`/services/${service.slug}`} className="block h-full no-underline" style={{ textDecoration: "none" }}>
                  <div
                    className="h-full flex flex-col"
                    style={{ backgroundColor: "#ffffff", transition: "background-color 0.25s ease" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "#034e7c";
                      (el.querySelector("[data-num]") as HTMLElement).style.color = "#7e8474";
                      (el.querySelector("[data-title]") as HTMLElement).style.color = "#ffffff";
                      (el.querySelector("[data-desc]") as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                      (el.querySelector("[data-img]") as HTMLElement).style.opacity = "0.7";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "#ffffff";
                      (el.querySelector("[data-num]") as HTMLElement).style.color = "#7e8474";
                      (el.querySelector("[data-title]") as HTMLElement).style.color = "#034e7c";
                      (el.querySelector("[data-desc]") as HTMLElement).style.color = "#64748B";
                      (el.querySelector("[data-img]") as HTMLElement).style.opacity = "1";
                    }}
                  >
                    <div data-img className="w-full overflow-hidden shrink-0" style={{ height: "180px", transition: "opacity 0.25s ease" }}>
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" style={{ display: "block" }} />
                    </div>
                    <div className="p-7 flex-1">
                      <div
                        data-num className="text-xs mb-3"
                        style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#7e8474", letterSpacing: "0.1em", transition: "color 0.25s ease" }}
                      >
                        {service.number}
                      </div>
                      <h3
                        data-title className="mb-3 uppercase"
                        style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#034e7c", lineHeight: 1.2, fontSize: "1.05rem", transition: "color 0.25s ease" }}
                      >
                        {service.title}
                      </h3>
                      <p
                        data-desc className="text-xs leading-relaxed"
                        style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", transition: "color 0.25s ease" }}
                      >
                        {service.outcome}
                      </p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── FEATURED CASE STUDY ── */}
      <section style={{ backgroundColor: "#034e7c" }} className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&h=800&fit=crop&auto=format)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}>
                Featured Case Study
              </span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.1}>
              <h2 className="text-white uppercase mb-6" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}>
                65 Methanol<br />Deliveries<br />
                <span style={{ color: "rgba(255,255,255,0.72)" }}>Zero Incidents</span>
              </h2>
              <p className="mb-8 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>
                Managing large-scale methanol ISO tank logistics at Nouakchott port demanded precision coordination, strict safety compliance, and seamless integration across port, customs, and logistics teams — all under tight operational deadlines.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { value: "250+", label: "ISO Tanks Coordinated" },
                  { value: "100%", label: "On-Time Delivery" },
                  { value: "Zero", label: "Safety Incidents" },
                ].map((kpi) => (
                  <div key={kpi.label}>
                    <div className="text-3xl mb-1" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "rgba(255,255,255,0.72)" }}>
                      {kpi.value}
                    </div>
                    <div className="text-xs leading-tight" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.45)" }}>
                      {kpi.label}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/success-stories"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wider uppercase transition-all duration-200"
                style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, letterSpacing: "0.08em", border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")}
              >
                Read the Full Story
                <ArrowRight size={14} />
              </Link>
            </FadeIn>

            <FadeIn delay={0.25} direction="right">
              <div className="space-y-4">
                {[
                  { phase: "Challenge", text: "Complex methanol delivery requiring multi-party coordination under strict safety and timeline constraints at a remote African port." },
                  { phase: "Solution", text: "SEPCO deployed integrated port operations, ISO tank logistics, customs clearance, and marine coordination as a unified service." },
                  { phase: "Result", text: "65 consecutive deliveries, 250+ tanks, zero safety incidents, full customs compliance — delivered on-schedule every time." },
                ].map((item) => (
                  <div key={item.phase} className="p-6" style={{ border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.03)" }}>
                    <div className="text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}>
                      {item.phase}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.65)" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CLIENTS MARQUEE ── */}
      <section className="py-16 bg-white overflow-hidden">
        <FadeIn>
          <p className="text-center text-xs tracking-widest uppercase mb-10" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#94A3B8", letterSpacing: "0.2em" }}>
            Trusted by leading energy operators
          </p>
        </FadeIn>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #ffffff, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #ffffff, transparent)" }} />
          <div className="flex items-center" style={{ animation: "marquee 32s linear infinite", width: "max-content" }}>
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <span
                key={i}
                className="inline-flex items-center"
                style={{ padding: "0 3.5rem" }}
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  style={{ height: `${client.height ?? 54}px`, width: "auto", maxWidth: `${client.maxWidth ?? 180}px`, objectFit: "contain", filter: "grayscale(100%) opacity(0.6)", transition: "filter 0.3s ease" }}
                  onError={(e) => {
                    const wrapper = e.currentTarget.closest("span") as HTMLElement | null;
                    if (wrapper) wrapper.style.display = "none";
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%) opacity(1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%) opacity(0.6)")}
                />
                <span style={{ display: "inline-block", width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#CBD5E1", marginLeft: "3.5rem" }} />
              </span>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #034e7c 0%, #1a6e9f 100%)" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-white uppercase mb-4" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}>
              Ready to discuss your project?
            </h2>
            <p className="mb-8 max-w-xl mx-auto" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.8)", fontSize: "1rem" }}>
              Our team will respond within 24 hours with a tailored solution for your operational requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase transition-all duration-200"
                style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, letterSpacing: "0.08em", backgroundColor: "#ffffff", color: "#7e8474" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#EAF4FA")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
              >
                Request a Proposal
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/success-stories"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase transition-all duration-200"
                style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, letterSpacing: "0.08em", color: "#ffffff", border: "1px solid rgba(255,255,255,0.5)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,1)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)")}
              >
                View Success Stories
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
