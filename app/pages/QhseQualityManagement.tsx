import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "../components/FadeIn";
import imgHero from "../../imports/quality.jpeg";

export function QhseQualityManagement() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ backgroundColor: "#034e7c" }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${imgHero})`, backgroundSize: "cover", backgroundPosition: "75% center", opacity: 0.55 }} />
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
              Quality
              <br />Management
            </h1>
            <p className="max-w-xl leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>
              Our commitment to quality management systems and continuous improvement — the foundation of reliable partnership.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FOUNDATION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                  The Foundation of Reliable Partnership
                </span>
              </div>
              <h2 className="uppercase mb-6" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}>Quality is not<br />a department<br /><span style={{ color: "#7e8474" }}>It's our system</span></h2>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="space-y-4 pt-2">
                <p style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                  At SEPCO, operational integrity is not a dependency — it is our operating system. Our integrated Quality, Health, Safety, and Environmental (QHSE) management is built on the seamless integration of world-class quality and HSE standards into a single robust management system.
                </p>
                <p style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                  This integrated approach to quality management eliminates silos while ensuring that our operations comply with ISO standards, DNV certifications, and operator-specific requirements across every project we undertake.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STANDARDS & COMPLIANCE */}
      <section className="py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                Our QHSE Standards & Compliance
              </span>
            </div>
            <h2 className="uppercase mb-14 max-w-lg" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}>Built on certified<br />global standards</h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "Certified Standards",
                desc: "Our operations are certified to ISO 9001 (Quality), ISO 14001 (Environmental), and ISO 45001 (Safety). We are also DNV 2.7-1 certified for cargo units, crucial for offshore operations.",
              },
              {
                num: "02",
                title: "Risk-Based Decisions",
                desc: "Every project begins with a thorough risk assessment. We proactively identify and mitigate potential quality and safety risks through structured processes and documented frameworks.",
              },
              {
                num: "03",
                title: "Continuous Improvement",
                desc: "From issuing safety advisories to corrective and preventive actions, our system is guided by standardised processes that drive ongoing improvement across all operations.",
              },
              {
                num: "04",
                title: "Data-Driven Quality",
                desc: "We don't just comply — we analyse. By reviewing reports, non-conformities, and safety incidents, we learn from every project to consistently raise our performance bar.",
              },
            ].map((item) => (
              <StaggerItem key={item.num}>
                <div className="flex gap-6">
                  <span className="text-3xl shrink-0 w-12 pt-1" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#7e8474", opacity: 0.4 }}>
                    {item.num}
                  </span>
                  <div>
                    <h3 className="uppercase mb-3" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "1.4rem" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", lineHeight: 1.7, fontSize: "0.9375rem" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                The Clear Advantage
              </span>
            </div>
            <h2 className="uppercase mb-14 max-w-lg" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}>Valuable benefits of<br />our integrated approach</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(0,0,0,0.06)" }}>
            {[
              {
                title: "Predictable Cost & Schedule",
                desc: "By preventing rework, non-conformities, and safety incidents, we protect your project from costly delays and unexpected costs.",
              },
              {
                title: "Enhanced Operational Trust",
                desc: "Our transparent systems and documented performance provide auditable evidence to stakeholders, regulatory authorities, and clients.",
              },
              {
                title: "Local Expertise",
                desc: "We maintain local expertise and apply global best practices with deep understanding of the regulatory, environmental, and operational requirements of the African sector.",
              },
            ].map((b) => (
              <div key={b.title} className="bg-white p-8">
                <div className="w-1 h-6 mb-5" style={{ backgroundColor: "#034e7c" }} />
                <h3 className="uppercase mb-3" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "1.3rem", lineHeight: 1.1 }}>
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#64748B" }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACK LINK */}
      <section className="py-12" style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/about" className="inline-flex items-center gap-2 text-sm tracking-wider uppercase transition-all hover:gap-3" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#034e7c" }}>
            <ArrowLeft size={14} />
            Back to About
          </Link>
          <Link to="/qhse/health-safety" className="inline-flex items-center gap-2 text-sm tracking-wider uppercase transition-all hover:gap-3" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#034e7c" }}>
            Health & Safety →
          </Link>
        </div>
      </section>
    </div>
  );
}
