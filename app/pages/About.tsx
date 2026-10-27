import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "../components/FadeIn";
import { PresenceMap } from "../components/PresenceMap";
import imgBuiltToFill from "../../imports/built_to_fill_a_gap.jpeg";

const PILLARS = [
  {
    title: "Local Expertise",
    desc: "Over a decade operating in Mauritania and the West African Bulge region gives us unmatched regulatory knowledge and on-ground relationships that international firms simply cannot replicate.",
  },
  {
    title: "Owned Infrastructure",
    desc: "We control our own equipment, facilities, and logistics networks. No third-party dependencies means no unexpected delays or cost overruns for your projects.",
  },
  {
    title: "International Standards",
    desc: "DNV-certified cargo units, ISPS compliance, HSEQ management systems — we operate to the same standards expected by the world's largest energy operators.",
  },
  {
    title: "Integrated Operations",
    desc: "From port to well, from import to disposal, a single SEPCO contract covers every operational layer — eliminating the coordination risk of multiple contractors.",
  },
];

const LEADERSHIP = [
  { name: "Management Team", role: "Operations Leadership", years: "15+ years regional experience" },
  { name: "HSE Division", role: "Health, Safety & Environment", years: "Zero-incident culture" },
  { name: "Logistics Team", role: "Port & Logistics Operations", years: "Specialists in West African markets" },
  { name: "Marine Division", role: "Marine Support Services", years: "ISPS certified operations" },
];

export function About() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{ backgroundColor: "#034e7c" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1594581835488-0b95b8b0bacd?w=1920&h=900&fit=crop&auto=format)`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.55,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #034e7c 40%, rgba(3,78,124,0.3) 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}
              >
                About SEPCO
              </span>
            </div>
            <h1
              className="text-white uppercase mb-6 max-w-3xl"
              style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}
            >
              Delivering critical
              <br />infrastructure that
              <br />
              <span style={{ color: "rgba(255,255,255,0.72)" }}>powers Africa's</span>
              <br />energy sector
            </h1>
            <p
              className="max-w-xl leading-relaxed"
              style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}
            >
              Founded in 2011 in Nouakchott, Mauritania, SEPCO was created to fill a critical gap:
              the lack of a capable, locally-anchored industrial services provider that could meet
              the exacting standards of international oil and gas operators.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div
                className="relative aspect-square overflow-hidden"
                style={{ backgroundColor: "#F1F5F9", maxWidth: "500px" }}
              >
                <img
                  src={imgBuiltToFill}
                  alt="Built to fill a gap — SEPCO story"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute top-6 right-6 px-4 py-3"
                  style={{ backgroundColor: "#034e7c" }}
                >
                  <div
                    className="text-2xl text-white"
                    style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}
                  >
                    Est. 2011
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
                  >
                    Our Story
                  </span>
                </div>
                <h2
                  className="uppercase mb-6"
                  style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}
                >Built to fill a gap<br /><span style={{ color: "#7e8474" }}>Grown to lead</span></h2>
                <div className="space-y-4">
                  <p style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.7, fontSize: "0.9375rem" }}>
                    When major energy operators began developing Mauritania's offshore reserves in the early 2010s,
                    they faced a critical challenge: the absence of a capable local industrial services partner
                    who could operate to international standards.
                  </p>
                  <p style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.7, fontSize: "0.9375rem" }}>
                    SEPCO was founded precisely to fill that gap — combining deep regional knowledge with
                    the operational discipline and quality systems that Kosmos, TotalEnergies, BP, and
                    Halliburton demand from their contractors.
                  </p>
                  <p style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.7, fontSize: "0.9375rem" }}>
                    Today, SEPCO is Mauritania's leading integrated industrial services provider —
                    with a proven track record spanning port operations, logistics, marine support,
                    waste management, and oilfield services, all delivered under a single accountable partnership.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / STRATEGY */}
      <section style={{ backgroundColor: "#F8FAFC" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
              >
                Our Foundation
              </span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(0,0,0,0.06)" }}>
            {[
              {
                label: "Mission",
                title: "Fill the gap, Exceed the standard",
                desc: "To provide the oil and gas sector with industrial services that match international standards while maximising local expertise, employment, and economic impact in Mauritania and the Bulge region.",
              },
              {
                label: "Vision",
                title: "The benchmark for African energy services",
                desc: "To become the reference industrial services partner for energy operations across West Africa — known for reliability, compliance, and the measurable outcomes we deliver to our clients.",
              },
              {
                label: "Strategy",
                title: "Integration, Partnership, Growth",
                desc: "Direct long-term contracts with operators, strategic international partnerships, and continuous investment in local capability — building a company that grows alongside Africa's energy sector.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-white p-10">
                <div
                  className="text-xs tracking-widest uppercase mb-4"
                  style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
                >
                  {item.label}
                </div>
                <h3
                  className="uppercase mb-4"
                  style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "1.5rem" }}
                >
                  {item.title}
                </h3>
                <p style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", lineHeight: 1.7, fontSize: "0.875rem" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESENCE MAP */}
      <PresenceMap />

      {/* DIFFERENTIATORS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
              >
                Why Choose SEPCO
              </span>
            </div>
            <h2
              className="uppercase mb-14"
              style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}
            >Four reasons we win<br />the projects that matter</h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PILLARS.map((pillar, i) => (
              <StaggerItem key={pillar.title}>
                <div className="flex gap-6">
                  <div
                    className="text-3xl shrink-0 w-12 pt-1"
                    style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#7e8474", opacity: 0.4 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3
                      className="uppercase mb-3"
                      style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "1.5rem" }}
                    >
                      {pillar.title}
                    </h3>
                    <p style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", lineHeight: 1.7, fontSize: "0.9375rem" }}>
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* HSE */}
      {/* QHSE SECTION */}
      <section className="py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <FadeIn>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
                >
                  QHSE
                </span>
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              </div>
              <h2
                className="uppercase mb-6"
                style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}
              >Quality&nbsp;&nbsp;-&nbsp;&nbsp;Health&nbsp;&nbsp;-&nbsp;&nbsp;Safety&nbsp;&nbsp;-&nbsp;&nbsp;Environment</h2>
              <p style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                At the heart of our operations is an integrated QHSE Policy that unifies our focus on quality, health,
                safety, environmental responsibility, and security — ensuring excellence in everything we do.
              </p>
            </div>
          </FadeIn>

          {/* 3 Tiles */}
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              {
                title: "Quality Management",
                desc: "Our commitment to quality management systems and continuous improvement.",
                path: "/qhse/quality-management",
              },
              {
                title: "Health & Safety",
                desc: "Protecting our people through safe, disciplined, and compliant operations.",
                path: "/qhse/health-safety",
              },
              {
                title: "Environmental Protection",
                desc: "Minimising environmental impact through responsible and sustainable operations.",
                path: "/qhse/environmental-protection",
              },
            ].map((tile) => (
              <StaggerItem key={tile.title}>
                <Link
                  to={tile.path}
                  className="block h-full group"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="p-8 h-full flex flex-col transition-all duration-200"
                    style={{ backgroundColor: "#ffffff", border: "1px solid rgba(0,0,0,0.07)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#034e7c"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,0,0,0.07)"; }}
                  >
                    <div className="w-2 h-2 mb-5" style={{ backgroundColor: "#7e8474" }} />
                    <h3
                      className="uppercase mb-3"
                      style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "1.4rem", lineHeight: 1.1 }}
                    >
                      {tile.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed flex-1 mb-6"
                      style={{ fontFamily: "Raleway, sans-serif", color: "#64748B" }}
                    >
                      {tile.desc}
                    </p>
                    <div
                      className="flex items-center gap-2 text-xs uppercase tracking-widest transition-all duration-200 group-hover:gap-3"
                      style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#034e7c" }}
                    >
                      View Details
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Our QHSE Commitment */}
          <div
            className="p-10 md:p-14"
            style={{ backgroundColor: "#034e7c" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <FadeIn direction="left">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}
                  >
                    Our QHSE Commitment
                  </span>
                </div>
                <p style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                  At SEPCO Industries, Quality, Health, Safety, and Environment (QHSE) excellence is fundamental to everything we do. We are committed to working according to the highest quality standards while providing a safe and healthy workplace for all employees, contractors, and visitors, and protecting the environment in which we operate.
                </p>
                <p className="mt-4" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                  This commitment is demonstrated through visible leadership, competent personnel, effective processes, and transparent communication with all stakeholders.
                </p>
              </FadeIn>

              {/* Stats */}
              <FadeIn direction="right" delay={0.1}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "99.8%", label: "Safety Record" },
                    { value: "ISO", label: "Certified Standards" },
                    { value: "24/7", label: "Safety Monitoring" },
                    { value: "100%", label: "Compliance Rate" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-5"
                      style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      <div
                        className="mb-1"
                        style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "2rem", lineHeight: 1 }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-xs"
                        style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.5)" }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2
              className="uppercase mb-4"
              style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}
            >Partner with SEPCO</h2>
            <p
              className="mb-8 max-w-lg mx-auto"
              style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", fontSize: "1rem" }}
            >
              Find out how our integrated approach can reduce risk, eliminate delays, and
              deliver measurable results for your next project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase"
              style={{
                fontFamily: "Raleway, sans-serif",
                fontWeight: 600,
                letterSpacing: "0.08em",
                backgroundColor: "#034e7c",
                color: "#ffffff",
              }}
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
