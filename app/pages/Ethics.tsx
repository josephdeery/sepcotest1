import { Link } from "react-router";
import { FadeIn, StaggerChildren, StaggerItem } from "../components/FadeIn";

const PRINCIPLES = [
  {
    title: "Integrity",
    desc: "We conduct our business with the highest standards of integrity, honesty, and transparency in all our interactions.",
  },
  {
    title: "Fairness",
    desc: "We treat all our stakeholders fairly and with respect, promoting a culture of inclusivity and equal opportunity.",
  },
  {
    title: "Respect",
    desc: "We respect human rights, dignity, and diversity in everything we do, fostering a culture that values every individual.",
  },
  {
    title: "Confidentiality",
    desc: "We protect confidential information and personal data in compliance with applicable laws and regulations, maintaining strict information security.",
  },
  {
    title: "Transparency",
    desc: "We operate with transparency in our business practices, maintaining open communication with our stakeholders and regulators.",
  },
  {
    title: "Accountability",
    desc: "We take responsibility for our actions and decisions, ensuring that we are accountable to our stakeholders and the wider community.",
  },
];

const COMPLIANCE_AREAS = [
  "Human Rights & Labour",
  "Quality, Health, Safety & Environment (QHSE)",
  "Anti-Bribery & Corruption",
  "Data Privacy & Protection",
  "Supply Chain Ethics",
];

export function Ethics() {
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
            background: "linear-gradient(135deg, #034e7c 0%, #023459 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
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
                Ethics & Compliance
              </span>
            </div>
            <h1
              className="text-white uppercase mb-6 max-w-3xl"
              style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}
            >Doing the right thing<br /><span style={{ color: "rgba(255,255,255,0.72)" }}>Every time</span></h1>
            <p
              className="max-w-xl leading-relaxed"
              style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}
            >
              Our commitment to ethical business practices and regulatory compliance forms
              the foundation of everything we do.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ETHICAL FOUNDATION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
                >
                  Our Ethical Foundation
                </span>
              </div>
              <h2
                className="uppercase mb-6"
                style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}
              >Ethics is not a policy<br />It is who we are</h2>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <div className="space-y-4 pt-2">
                <p style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                  At SEPCO Industries, we believe that acting ethically and with integrity is a fundamental
                  aspect of our corporate identity. Our Code of Ethics guides every decision we make and
                  every action we take.
                </p>
                <p style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                  This ensures that we maintain the trust of our clients, partners, employees, and the
                  communities we serve — across Mauritania, Sénégal, and every market in which we operate.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section style={{ backgroundColor: "#F8FAFC" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
                >
                  Our Core Principles
                </span>
              </div>
              <h2
                className="uppercase max-w-lg"
                style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}
              >These principles guide our behaviour across all aspects of our business</h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(0,0,0,0.06)" } as React.CSSProperties}>
            {PRINCIPLES.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="bg-white p-8 h-full">
                  <div
                    className="text-xs mb-4"
                    style={{
                      fontFamily: "Barlow Condensed, sans-serif",
                      fontWeight: 700,
                      color: "#7e8474",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3
                    className="uppercase mb-3"
                    style={{
                      fontFamily: "Barlow Condensed, sans-serif",
                      fontWeight: 800,
                      color: "#034e7c",
                      fontSize: "1.4rem",
                      lineHeight: 1.1,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "Raleway, sans-serif", color: "#64748B" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* COMPLIANCE FRAMEWORK */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
                >
                  Compliance Framework
                </span>
              </div>
              <h2
                className="uppercase mb-6"
                style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}
              >
                Built on international
                <br />
                standards.
              </h2>
              <p
                className="mb-6 leading-relaxed"
                style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.75, fontSize: "0.9375rem" }}
              >
                At SEPCO Industries, we maintain a comprehensive compliance framework to ensure
                that our operations adhere to all relevant laws, regulations, and industry standards.
                Our framework includes regular audits, training programmes, and risk assessments
                to identify and address potential compliance issues proactively.
              </p>
              <div
                className="inline-flex items-center gap-3 px-5 py-3"
                style={{ backgroundColor: "#F8FAFC", border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#034e7c" }}
                />
                <span
                  className="text-sm"
                  style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#034e7c" }}
                >
                  ISO 9001 Certified Integrated Management System
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <div>
                <p
                  className="text-xs tracking-widest uppercase mb-6"
                  style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
                >
                  Key Compliance Areas
                </p>
                <div className="space-y-px" style={{ backgroundColor: "rgba(0,0,0,0.05)" }}>
                  {COMPLIANCE_AREAS.map((area, i) => (
                    <div
                      key={area}
                      className="bg-white px-6 py-4 flex items-center gap-4"
                    >
                      <span
                        className="text-xs shrink-0"
                        style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#7e8474", letterSpacing: "0.08em" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="text-sm"
                        style={{ fontFamily: "Raleway, sans-serif", color: "#374151", fontWeight: 500 }}
                      >
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SPEAK UP */}
      <section style={{ backgroundColor: "#034e7c" }} className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}
                >
                  Speak Up — We Listen
                </span>
              </div>
              <h2
                className="text-white uppercase mb-6"
                style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}
              >Your voice matters<br /><span style={{ color: "rgba(255,255,255,0.72)" }}>Speak up</span></h2>
              <p
                className="mb-8 leading-relaxed"
                style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.65)", fontSize: "0.9375rem" }}
              >
                We encourage all employees, partners, and stakeholders to report any concerns
                about unethical conduct or compliance violations. Your voice matters, and we are
                committed to investigating all reports promptly and taking appropriate action.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase transition-all duration-200"
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  backgroundColor: "#ffffff",
                  color: "#034e7c",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f1ee")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
              >
                Report a Concern
              </Link>
            </FadeIn>

            <FadeIn delay={0.15} direction="right">
              <div className="space-y-4">
                {[
                  { label: "Confidential", text: "All reports are handled with strict confidentiality to protect those who speak up." },
                  { label: "Prompt Action", text: "Every report is investigated promptly and thoroughly by our compliance team." },
                  { label: "No Retaliation", text: "SEPCO has a zero-tolerance policy for any retaliation against those who raise concerns in good faith." },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-5"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <p
                      className="text-xs uppercase tracking-widest mb-1.5"
                      style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.7)" }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
