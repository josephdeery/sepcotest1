import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "../components/FadeIn";
import imgHero from "../../imports/safety_team.jpeg";
import imgBritishSafetyCouncil from "../../imports/image-13.png";

export function QhseHealthSafety() {
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
              Health &
              <br />Safety
            </h1>
            <p className="max-w-xl leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>
              Protecting our people through safe, disciplined, and compliant operations across every site and every role.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                  Health & Safety Commitment
                </span>
              </div>
              <h2 className="uppercase mb-6" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}>Safety is not<br />a target<br /><span style={{ color: "#7e8474" }}>It's our baseline</span></h2>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="space-y-4 pt-2">
                <p style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                  At SEPCO, we manage the health and safety of all employees, contractors, and stakeholders through strong leadership, safe systems of work, and continuous improvement. SEPCO's Health, Safety, and Environmental function is led by a Regional HSE Manager who brings over 25 years of experience in HSE across the energy sector.
                </p>
                <p style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                  He delivers high-level strategic HSE governance, management review, and continuous improvement across the West Africa region, ensuring that every operation meets the highest standards of safety and compliance.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* HSE COMMITMENTS */}
      <section className="py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                Our HSE Commitments
              </span>
            </div>
            <h2 className="uppercase mb-14 max-w-lg" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}>Structure, oversight,<br />accountability</h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "Leadership Oversight",
                desc: "Regular leadership oversight and responsibility for the implementation and continuous improvement of the Integrated QHSE Management System.",
              },
              {
                num: "02",
                title: "HSE Committee Meetings",
                desc: "Continuous review of safety programmes and monitoring of coordination across operational teams to ensure alignment and accountability.",
              },
              {
                num: "03",
                title: "Comprehensive Reporting",
                desc: "Compliance verification, hazard identification, and workforce engagement are documented through structured and regular reporting cycles.",
              },
              {
                num: "04",
                title: "Structured Audit Process",
                desc: "Third-party frameworks including Risk Management, Compliance Monitoring, and Safety Audits are embedded into our operational rhythm.",
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

      {/* INTERNATIONAL MEMBERSHIPS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                  International Memberships & Professional Affiliations
                </span>
              </div>
              <h2 className="uppercase mb-6" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}>Globally aligned<br />Locally delivered</h2>
              <p style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                SEPCO Industries aligns its HSE framework globally with world-class best practices in HSE Management. Through our collaboration with institutions such as the British Safety Council, we reinforce our commitment to safety culture, leadership and capability, and continuous improvement.
              </p>
              <p className="mt-4" style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                These affiliations provide access to international benchmarking, contributing to a continuous development of safety standards and practices across all of our operations in West Africa.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div
                className="p-10 flex flex-col items-center justify-center text-center"
                style={{ backgroundColor: "#F8FAFC", border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <img
                  src={imgBritishSafetyCouncil}
                  alt="British Safety Council"
                  className="mb-4"
                  style={{ height: "100px", width: "auto", objectFit: "contain" }}
                />
                <p className="text-xs uppercase tracking-widest" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#94A3B8", letterSpacing: "0.15em" }}>
                  International Member
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TRAINING & DEVELOPMENT */}
      <section className="py-24" style={{ backgroundColor: "#034e7c" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}>
                  Training & Development
                </span>
              </div>
              <h2 className="text-white uppercase mb-6" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}>The right training<br /><span style={{ color: "rgba(255,255,255,0.72)" }}>At the right time</span></h2>
              <p style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                In accordance with the SEPCO Training Program, structured in-house training sessions are conducted internally by competent trainers and supplemented by highly regarded external training professionals. The majority of training sessions are conducted with practical relevance through our bespoke-built Learning Management System (LMS).
              </p>
            </FadeIn>
            <FadeIn delay={0.15} direction="right">
              <div className="space-y-3">
                {[
                  "Delivers the right training to the right personnel at the right time",
                  "Tracks participation and assessment results",
                  "Monitors certification validity across the workforce",
                  "Provides real-time reporting and alerts for compliance gaps",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 p-4" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: "rgba(255,255,255,0.5)" }} />
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.7)" }}>
                      {point}
                    </p>
                  </div>
                ))}
                <p className="text-sm pt-2" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.45)" }}>
                  This data-driven approach strengthens workforce competency and ensures performance excellence across all areas.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* HSE DIGITALISATION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                HSE Digitalisation & Smart Safety Systems
              </span>
            </div>
            <h2 className="uppercase mb-6 max-w-lg" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}>Real-time visibility<br />Smarter decisions</h2>
            <p className="max-w-2xl mb-10 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.75, fontSize: "0.9375rem" }}>
              At SEPCO, we leverage digital solutions to maintain operational transparency. Through our LIVE, cloud-based reporting system, employees can instantly submit safety observations, near misses, and hazard reports directly from the field. Our integrated digital safety management system ensures that information is monitored and corrected in real time.
            </p>
            <p className="max-w-2xl leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.75, fontSize: "0.9375rem" }}>
              Our bespoke HSE Integrated Management System handles digital audits, inspection reports, and non-conformance reporting — enabling smart decision-making and reinforcing continuous improvement in HSE performance across all operations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* BACK LINK */}
      <section className="py-12" style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/about" className="inline-flex items-center gap-2 text-sm tracking-wider uppercase transition-all hover:gap-3" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#034e7c" }}>
            <ArrowLeft size={14} />
            Back to About
          </Link>
          <Link to="/qhse/environmental-protection" className="inline-flex items-center gap-2 text-sm tracking-wider uppercase transition-all hover:gap-3" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#034e7c" }}>
            Environmental Protection →
          </Link>
        </div>
      </section>
    </div>
  );
}
