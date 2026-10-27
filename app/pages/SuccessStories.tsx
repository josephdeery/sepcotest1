import image_Screenshot_2026_07_21_at_14_55_08 from '@/imports/optimized/content/Screenshot_2026-07-21_at_14.55.08.webp'
import image_Screenshot_2026_07_21_at_14_54_09 from '@/imports/optimized/content/Screenshot_2026-07-21_at_14.54.09.webp'
import image_Screenshot_2026_07_21_at_14_53_21 from '@/imports/optimized/content/Screenshot_2026-07-21_at_14.53.21.webp'
import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, X, ZoomIn } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "../components/FadeIn";
import certTotalEnergies from "../../imports/total_energies_cert.png";
import certPacificDrilling from "../../imports/pacific_drilling.png";
import certMiSwaco from "../../imports/mi_swaco.png";
import certKosmos from "../../imports/optimized/content/kosmos.webp";
import certPetronas from "../../imports/petronas.png";
import certBambini from "../../imports/bambini.png";
import certSeacorMarine from "../../imports/seacormarine.png";
import imgTankCleaning from "../../imports/new_project_1.jpg";
import imgInsideTank from "../../imports/optimized/content/new_project_2-1.webp";

const RECOGNITIONS = [
  {
    from: "Kosmos Energy",
    type: "Certificate of Recognition",
    subtitle: "KEM Shorebase 2015 / 2018",
    quote: "In recognition to SEPCO Team and Supporting Services, for outstanding performance, commitment, leadership, interaction and service excellence; in waste management, treatment and tank cleaning operations during the Kosmos Energy Mauritania drilling campaign without any spill incident or accidents.",
    signatory: "Tarek Beroual",
    role: "Country Sr HSES Advisor, Kosmos Energy Mauritania",
    date: "2018",
    accentColor: "#E67E22",
    img: certKosmos,
  },
  {
    from: "TotalEnergies",
    type: "Letter of Appreciation",
    subtitle: "Total E&P Mauritania Block C9 B.V. — Exploration Campaign 2018–2019",
    quote: "In recognition of the outstanding work, commitment, leadership and service quality with Zero NPT and no HSE anomaly, Total E&P was delighted to award an exceptional performance incentive to your company and its employees.",
    signatory: "Alexandre Maillard",
    role: "Directeur Général, Total E&P Mauritania Block C9 B.V.",
    date: "30 June 2021",
    accentColor: "#D32F2F",
    img: certTotalEnergies,
  },
  {
    from: "Petronas",
    type: "FOCUSED Recognition",
    subtitle: "PCMPL Operation & Chinguetti A&D Project",
    quote: "Extensive support to PCMPL Operation & Chinguetti A&D Project by providing warehousing, hazardous waste disposal, vessel spread & chemical supplies. All jobs are executed in a safe manner. Result: smooth project execution with LTI-free manhours.",
    signatory: "Petronas",
    role: "Results Matter · Focused Execution",
    date: "23 February 2018",
    accentColor: "#00A19C",
    img: certPetronas,
  },
  {
    from: "Pacific Drilling",
    type: "Referral Letter",
    subtitle: "Chinguetti Field Decommissioning — Mauritania 2019–2021",
    quote: "In recognition of the services provided by SEPCO Industries pertaining to agency services, customs clearance, meet & greet, supply of goods and waste management in support of activities in the decommissioning of the Chinguetti field in Mauritania.",
    signatory: "David Sanders",
    role: "Rig Manager, Pacific Santa Ana Limited",
    date: "13 July 2021",
    accentColor: "#1A3E6F",
    img: certPacificDrilling,
  },
  {
    from: "MI SWACO / Schlumberger",
    type: "Letter of Recognition",
    subtitle: "Tullow Mauritania Drilling Campaign",
    quote: "The help given by yourself and your team in order to mobilize and assemble the Liquid Mud Plant has been the key factor of the success of the MI SWACO Mauritania operations. You and your team always have delivered the requested services in due time regardless the difficulties encountered in a new operation.",
    signatory: "François Couffy",
    role: "Regional Manager Ghana, Ivory Coast and Remote Countries",
    date: "October 2014",
    accentColor: "#003087",
    img: certMiSwaco,
  },
  {
    from: "Bambini Srl",
    type: "Client Referral",
    subtitle: "PSV Methanol Decanting Operations",
    quote: "We would like to express our deep thanks for the very good work carried out in these more than two years of continuous operations. We have always counted on the strong support from SEPCO and have never been left alone. When we knocked at your door with a question, you always came back to us with a solution.",
    signatory: "Ugo Farnelli",
    role: "Bambini Srl",
    date: "June 2018",
    accentColor: "#2E7D32",
    img: certBambini,
  },
  {
    from: "Seacor Marine",
    type: "Operational Referral",
    subtitle: "Methanol Decanting — MV Norman F. McCall",
    quote: "I'm very pleased with the professionalism and efficiency of the SEPCO team in decanting all of the methanol safely. Nobody here, either on the vessel or shore-side, had experience pumping from a vessel back into ISO tanks. I appreciate the safety conscious work that the SEPCO team put in to make sure all methanol was decanted back into ISO tanks in a safe manner — that was a job well done.",
    signatory: "Robert G Van Vechten",
    role: "Master, MV Norman F. McCall — Seacor Marine",
    date: "June 2018",
    accentColor: "#455A64",
    img: certSeacorMarine,
  },
];

export function SuccessStories() {
  const [lightbox, setLightbox] = useState<{ img: string; from: string } | null>(null);

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
            backgroundImage: `url(https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?w=1920&h=900&fit=crop&auto=format)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.55,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #034e7c 25%, rgba(3,78,124,0.45) 100%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}
              >
                Success Stories
              </span>
            </div>
            <h1
              className="text-white uppercase mb-6 max-w-2xl"
              style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}
            >Proof, not promises<br /><span style={{ color: "rgba(255,255,255,0.72)" }}>Real results</span></h1>
            <p
              className="max-w-xl leading-relaxed"
              style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}
            >
              Every story below follows the same structure: the client's problem, how SEPCO solved it,
              and the measurable results delivered. No filler. No vague capability statements.
              Just evidence that we deliver.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FEATURED STORY: METHANOL */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
              >
                Case Study 01 — Flagship Story
              </span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <FadeIn direction="left">
              <div>
                <h2
                  className="uppercase mb-4"
                  style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}
                >
                  Methanol Logistics
                  <br />
                  at Nouakchott Port
                </h2>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", fontSize: "0.9375rem" }}
                >
                  One of the most operationally complex chemical logistics challenges in West Africa —
                  65 consecutive deliveries of methanol ISO tanks, under strict timelines, tight safety
                  requirements, and the regulatory constraints of Mauritanian port operations.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { value: "65", label: "Deliveries Completed" },
                    { value: "250+", label: "ISO Tanks" },
                    { value: "Zero", label: "Incidents" },
                  ].map((kpi) => (
                    <div
                      key={kpi.label}
                      className="p-4 text-center"
                      style={{ backgroundColor: "#F8FAFC", border: "1px solid rgba(0,0,0,0.06)" }}
                    >
                      <div
                        className="text-3xl mb-1"
                        style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#7e8474" }}
                      >
                        {kpi.value}
                      </div>
                      <div className="text-xs" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8" }}>
                        {kpi.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Logistics", "Port Operations", "Chemical Handling", "Customs Clearance"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs"
                      style={{
                        fontFamily: "Raleway, sans-serif",
                        color: "#64748B",
                        border: "1px solid rgba(0,0,0,0.1)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <div
                className="aspect-video overflow-hidden"
                style={{ backgroundColor: "#F1F5F9" }}
              >
                <img
                  src={image_Screenshot_2026_07_21_at_14_53_21}
                  alt="ISO tank logistics at Nouakchott Port"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Story Sections */}
          <div className="space-y-px" style={{ backgroundColor: "rgba(0,0,0,0.05)" }}>
            {[
              {
                phase: "01 — The Challenge",
                title: "Managing hazardous chemical delivery in a challenging environment",
                content: `A major energy operator required reliable methanol supply to support operations at the Banda and BirAllah fields offshore Mauritania. The challenge: coordinating the import, port handling, customs clearance, and final delivery of 250+ ISO tanks of methanol — a hazardous chemical requiring strict safety protocols — at Nouakchott, a port with significant logistical constraints.

The operation demanded precision timing, multi-party coordination across port authorities, customs agencies, vessel operators, and onshore logistics teams, all while maintaining zero tolerance for safety incidents or regulatory breaches.`,
              },
              {
                phase: "02 — The Solution",
                title: "A single integrated contract covering every operational layer",
                content: `SEPCO designed and delivered a fully integrated logistics programme that eliminated the coordination risk of multiple contractors. Under a single contract, SEPCO managed vessel arrival coordination, berth allocation, ISO tank discharge and inspection, customs documentation and clearance, tank cleaning and maintenance, and final delivery to the client's facility.

This integrated approach meant one point of accountability, one communication channel, and one HSEQ framework governing the entire operation — eliminating the gaps where incidents and delays typically occur in multi-contractor environments.`,
              },
              {
                phase: "03 — The Execution",
                title: "65 consecutive deliveries, not one missed",
                content: `SEPCO executed 65 individual methanol deliveries over the contract period — coordinating 250+ ISO tank movements in total. Each delivery involved pre-arrival planning, customs pre-clearance preparation, berth coordination, discharge operation supervision, safety inspections, and documentation.

A dedicated SEPCO operations team maintained 24/7 availability during active delivery windows, and proactive communication with vessel operators reduced port turnaround times by eliminating information delays. All operations were conducted under SEPCO's HSEQ management system with full audit documentation for the client.`,
              },
              {
                phase: "04 — The Results",
                title: "Measurable outcomes that justify the investment",
                content: `The programme delivered against every KPI: 100% on-time delivery rate across 65 deliveries, zero safety incidents throughout the entire operation, zero customs or regulatory breaches, and full documentation for every tank movement providing complete audit traceability.

Client feedback highlighted SEPCO's proactive communication, responsiveness to schedule changes, and consistent HSEQ performance as key differentiators — demonstrating why integrated operations management delivers better outcomes than fragmented contractor approaches.`,
              },
            ].map((section) => (
              <div key={section.phase} className="bg-white p-10 md:p-12">
                <div
                  className="text-xs tracking-widest uppercase mb-2"
                  style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
                >
                  {section.phase}
                </div>
                <h3
                  className="uppercase mb-4"
                  style={{
                    fontFamily: "Barlow Condensed, sans-serif",
                    fontWeight: 800,
                    color: "#034e7c",
                    fontSize: "1.75rem",
                  }}
                >
                  {section.title}
                </h3>
                <div className="max-w-3xl">
                  {section.content.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="leading-relaxed mb-4"
                      style={{ fontFamily: "Raleway, sans-serif", color: "#374151", fontSize: "0.9375rem" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY 2: PORT OPERATIONS */}
      <section style={{ backgroundColor: "#F8FAFC" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
            >
              Case Study 02
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            <div className="lg:col-span-2" style={{ backgroundColor: "#034e7c", minHeight: "350px" }}>
              <img
                src={image_Screenshot_2026_07_21_at_14_55_08}
                alt="Marine vessel operations"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="lg:col-span-3 p-10 md:p-14 bg-white">
              <h2
                className="uppercase mb-4"
                style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                Marine & Port Operations:
                <br />
                478+ Calls, Zero Failures
              </h2>

              <StaggerChildren className="space-y-6">
                {[
                  {
                    phase: "Challenge",
                    text: "Coordinating continuous high-frequency vessel traffic at Nouakchott port — including supply vessels, crew boats, tankers, and specialised offshore support vessels — while maintaining full ISPS security compliance and supporting 267 crew change operations.",
                  },
                  {
                    phase: "Solution",
                    text: "SEPCO deployed a dedicated marine coordination team providing 24/7 port call management, ISPS security operations, crew change logistics, and tanker coordination — all under a unified HSEQ management system.",
                  },
                  {
                    phase: "Results",
                    text: "478+ port calls managed without a single operational failure. 267 crew changes coordinated seamlessly. 344 ISPS operations executed with zero security incidents. 2 offtake operations completed on schedule.",
                  },
                ].map((item) => (
                  <StaggerItem key={item.phase}>
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest mb-2"
                        style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474" }}
                      >
                        {item.phase}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#374151" }}>
                        {item.text}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <div className="mt-8 grid grid-cols-4 gap-4">
                {[
                  { v: "478+", l: "Port Calls" },
                  { v: "267", l: "Crew Changes" },
                  { v: "344+", l: "ISPS Ops" },
                  { v: "Zero", l: "Failures" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div
                      className="text-2xl"
                      style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#7e8474" }}
                    >
                      {s.v}
                    </div>
                    <div className="text-xs" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8" }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY 3: WASTE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
            >
              Case Study 03
            </span>
          </div>

          <div
            className="relative overflow-hidden py-16 px-10 md:px-16"
            style={{ backgroundColor: "#034e7c" }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&h=700&fit=crop&auto=format)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.08,
              }}
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className="text-white uppercase mb-4"
                  style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
                >9,485 MT of Offshore Waste<br /><span style={{ color: "rgba(255,255,255,0.65)" }}>Zero Environmental Incidents</span></h2>
                <p style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontSize: "0.9375rem" }}>
                  Managing offshore operational waste across multiple clients and vessel types —
                  from hazardous chemical residues to general operational waste — SEPCO's waste
                  management division delivered 5,647 MT to certified European disposal facilities
                  and treated 3,838 MT locally. Every movement documented. Every disposal certified.
                  Every regulation met.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "5,647 MT", label: "Exported to Europe", sub: "Certified treatment facilities" },
                  { value: "3,838 MT", label: "Treated Locally", sub: "Zero landfill disposal" },
                  { value: "100%", label: "Audit Traceability", sub: "Full documentation chain" },
                  { value: "Zero", label: "Regulatory Incidents", sub: "Clean compliance record" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="p-5"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div
                      className="text-2xl mb-1"
                      style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#ffffff" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-sm mb-0.5" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>
                      {s.label}
                    </div>
                    <div className="text-xs" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.65)" }}>
                      {s.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY 4: METHANOL TANK CLEANING */}
      <section style={{ backgroundColor: "#F8FAFC" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
            >
              Case Study 04 — 2026
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            <div className="lg:col-span-2 lg:order-2" style={{ backgroundColor: "#F1F5F9", minHeight: "350px" }}>
              <img
                src={imgInsideTank}
                alt="Methanol tank cleaning operation"
                className="w-full h-full object-cover"
                style={{ minHeight: "350px" }}
              />
            </div>
            <div className="lg:col-span-3 lg:order-1 p-10 md:p-14 bg-white">
              <h2
                className="uppercase mb-4"
                style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                Methanol Tank Cleaning
                <br />
                Using ATC Technology
              </h2>

              <StaggerChildren className="space-y-6">
                {[
                  {
                    phase: "Challenge",
                    text: "A major operator required safe cleaning of methanol tanks aboard offshore supply vessels, demanding gas-free certification, full hazardous waste capture, and compliance with strict confined-space entry procedures in a live port environment.",
                  },
                  {
                    phase: "Solution",
                    text: "SEPCO deployed its Automatic Tank Cleaning (ATC) system combined with supplementary techniques tailored to methanol tank geometry and residue type. Dedicated trained teams managed gas-freeing, confined-space entry, ATC operation, and full waste stream capture — all under SEPCO's integrated HSEQ framework.",
                  },
                  {
                    phase: "Results",
                    text: "Methanol tanks cleaned to gas-free certification standard, zero confined-space incidents throughout the programme, all methanol residues captured and disposed of within SEPCO's waste management system, and full documentation provided to the operator.",
                  },
                ].map((item) => (
                  <StaggerItem key={item.phase}>
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest mb-2"
                        style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474" }}
                      >
                        {item.phase}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#374151" }}>
                        {item.text}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { v: "ATC", l: "Technology Deployed" },
                  { v: "Zero", l: "Safety Incidents" },
                  { v: "100%", l: "Waste Captured" },
                ].map((s) => (
                  <div key={s.l} className="text-center p-4" style={{ backgroundColor: "#F8FAFC", border: "1px solid rgba(0,0,0,0.06)" }}>
                    <div
                      className="text-2xl mb-1"
                      style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#7e8474" }}
                    >
                      {s.v}
                    </div>
                    <div className="text-xs" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8" }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Tank Cleaning", "ATC", "Methanol", "Confined Space", "Waste Management"].map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs" style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", border: "1px solid rgba(0,0,0,0.1)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY 5: FUEL TANK CLEANING — LAYLA & APPOLONIA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
            >
              Case Study 05 — 2026
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            <div className="lg:col-span-2" style={{ backgroundColor: "#F1F5F9", minHeight: "350px" }}>
              <img
                src={imgTankCleaning}
                alt="SEPCO team fuel tank cleaning — Layla and Appolonia vessels"
                className="w-full h-full object-cover"
                style={{ minHeight: "350px" }}
              />
            </div>
            <div className="lg:col-span-3 p-10 md:p-14 bg-white">
              <h2
                className="uppercase mb-4"
                style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                Fuel Tank Cleaning —
                <br />
                Layla &amp; Appolonia Vessels
              </h2>

              <StaggerChildren className="space-y-6">
                {[
                  {
                    phase: "Challenge",
                    text: "The Layla and Appolonia vessels required fuel tank cleaning at Nouakchott port — operations that demanded full gas-freeing, safe confined-space entry, fuel residue capture, and coordination with the port's Berth 1 pipeline infrastructure, all without disrupting ongoing vessel schedules.",
                  },
                  {
                    phase: "Solution",
                    text: "SEPCO coordinated fuel tank cleaning across both vessels using a combination of ATC technology and specialist manual techniques. Operations were sequenced to leverage the direct Berth 1 pipeline connection, enabling efficient residue transfer and minimising vessel turnaround time. All work was conducted under SEPCO's confined-space and HSEQ procedures.",
                  },
                  {
                    phase: "Results",
                    text: "Both vessels' fuel tanks cleaned and certified gas-free on schedule. Full residue recovery via the Berth 1 pipeline system with zero overboard discharge. Zero safety incidents across both operations. All waste streams handled within SEPCO's certified disposal programme.",
                  },
                ].map((item) => (
                  <StaggerItem key={item.phase}>
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest mb-2"
                        style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474" }}
                      >
                        {item.phase}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#374151" }}>
                        {item.text}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { v: "2", l: "Vessels Completed" },
                  { v: "Zero", l: "Safety Incidents" },
                  { v: "Berth 1", l: "Pipeline Utilised" },
                ].map((s) => (
                  <div key={s.l} className="text-center p-4" style={{ backgroundColor: "#F8FAFC", border: "1px solid rgba(0,0,0,0.06)" }}>
                    <div
                      className="text-2xl mb-1"
                      style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#7e8474" }}
                    >
                      {s.v}
                    </div>
                    <div className="text-xs" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8" }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Tank Cleaning", "Fuel", "Layla", "Appolonia", "Berth 1", "Port Operations"].map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs" style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", border: "1px solid rgba(0,0,0,0.1)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY RECOGNITION */}
      <section style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid rgba(0,0,0,0.06)" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                Client Recognition &amp; Referrals
              </span>
            </div>
            <h2 className="uppercase mb-3" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              What our clients say
            </h2>
            <p className="max-w-2xl mb-12" style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", fontSize: "0.9375rem", lineHeight: 1.7 }}>
              Formal recognition from the operators and contractors we have served — certificates, appreciation letters, and referrals issued across more than a decade of operations in Mauritania and Senegal.
            </p>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {RECOGNITIONS.map((rec) => (
              <StaggerItem key={rec.from}>
                <div className="h-full flex flex-col bg-white" style={{ border: "1px solid rgba(0,0,0,0.07)", borderTop: "3px solid #034e7c" }}>
                  {/* Certificate image thumbnail */}
                  <button
                    onClick={() => setLightbox({ img: rec.img, from: rec.from })}
                    className="relative w-full overflow-hidden group"
                    style={{ backgroundColor: "#F1F5F9", aspectRatio: "4/3" }}
                    aria-label={`View ${rec.from} certificate`}
                  >
                    <img
                      src={rec.img}
                      alt={`${rec.from} — ${rec.type}`}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ backgroundColor: "rgba(3,78,124,0.55)" }}>
                      <div className="flex items-center gap-2 px-4 py-2 text-white text-xs tracking-wider uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, backgroundColor: "rgba(3,78,124,0.9)" }}>
                        <ZoomIn size={14} />
                        View Document
                      </div>
                    </div>
                  </button>
                  {/* Card text */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <p className="text-xs uppercase tracking-widest mb-0.5" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.12em" }}>{rec.type}</p>
                        <h3 className="uppercase" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "1.1rem", lineHeight: 1.1 }}>{rec.from}</h3>
                      </div>
                      <span className="text-xs shrink-0 px-2 py-1" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8", backgroundColor: "#F1F5F9", whiteSpace: "nowrap" }}>{rec.date}</span>
                    </div>
                    <p className="text-xs mb-3" style={{ fontFamily: "Raleway, sans-serif", color: "#7e8474" }}>{rec.subtitle}</p>
                    <blockquote className="flex-1 text-xs leading-relaxed italic mb-4" style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", lineHeight: 1.7, borderLeft: "2px solid #7e8474", paddingLeft: "0.75rem" }}>
                      "{rec.quote}"
                    </blockquote>
                    <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                      <div>
                        <p className="text-xs font-semibold" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#1e3a5f" }}>{rec.signatory}</p>
                        <p className="text-xs" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8" }}>{rec.role}</p>
                      </div>
                      <button
                        onClick={() => setLightbox({ img: rec.img, from: rec.from })}
                        className="flex items-center gap-1.5 text-xs px-3 py-1.5 transition-colors"
                        style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#034e7c", border: "1px solid rgba(3,78,124,0.25)" }}
                        aria-label={`Expand ${rec.from} certificate`}
                      >
                        <ZoomIn size={12} />
                        Expand
                      </button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-3 mb-2">
              <p className="text-sm text-white" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600 }}>{lightbox.from}</p>
              <button
                onClick={() => setLightbox(null)}
                className="text-white p-1 hover:opacity-70 transition-opacity"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <img
              src={lightbox.img}
              alt={lightbox.from}
              className="w-full h-auto block"
              style={{ maxHeight: "80vh", objectFit: "contain" }}
            />
          </div>
        </div>
      )}

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #034e7c 0%, #1a6e9f 100%)" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2
              className="text-white uppercase mb-4"
              style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}
            >Your project could be next</h2>
            <p
              className="mb-8 max-w-lg mx-auto"
              style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.85)", fontSize: "1rem" }}
            >
              Tell us about your operational challenge. Our team will respond within
              24 hours with a tailored solution proposal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase"
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  backgroundColor: "#ffffff",
                  color: "#034e7c",
                }}
              >
                Request a Tailored Solution
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase"
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.5)",
                }}
              >
                Explore Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
