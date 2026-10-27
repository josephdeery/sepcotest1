import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import projectMapHtml from "../../imports/SEPCO_Project_Map__1_.html?raw";
import { FadeIn, StaggerChildren, StaggerItem } from "../components/FadeIn";
import logoVroon from "../../imports/vroon.png";
import logoJanDeNul from "../../imports/Jan_De_Nul.png";
import logoBakerHughes from "../../imports/baker-hughes-logo.png";
import logoTullow from "../../imports/tullow_logo.png";
import logoBambini from "../../imports/bambini.jpg";
import logoBourbon from "../../imports/bourbon-logo.png";
import logoSeacor from "../../imports/seacor_logo.png";
import logoShearwater from "../../imports/shearwater_logo.png";
import logoTidewater from "../../imports/tidewater_logo.png";
import logoHalliburton from "../../imports/halliburton_logo.jpg";
import logoKosmos from "../../imports/kosmos-1.png";
import logoOceanInstaller from "../../imports/ocean_installer_logo.png";
import logoWoodside from "../../imports/woodside_senegal_.png";
import logoOceaneering from "../../imports/Oceaneering_International_logo.png";
import logoMiSwaco from "../../imports/mi-swaco.svg";
import logoTotalEnergiesFlagship from "../../imports/TotalEnergies_logo.svg";
import logoBP from "../../imports/BP_Helios_logo.svg";
import logoHalliburtonFlagship from "../../imports/halliburton_logo-1.jpg";
import logoPacific from "../../imports/pacific_logo.png";
import logoPetronas from "../../imports/petronas_carigali_0.png";
import imgSupplyBase from "../../imports/optimized/content/supply_base.webp";
import imgTankCleaning from "../../imports/new_project_1.jpg";
import imgFuelFacility from "../../imports/optimized/content/new_project_2-1.webp";
import imgChemicals from "../../imports/chemical_storage_project_1.jpg";
import imgMarineSupport from "../../imports/direct_quay_access.jpeg";
import imgWasteMgmt from "../../imports/large_scale_waste_export-2.jpeg";
import imgOilfieldEquip from "../../imports/optimized/content/oilfield_equipment.webp";
import imgOffshoreCargo from "../../imports/material_management_1.jpg";

/* ── Oil & Gas map — processed once at module level ── */
const _injectCss = `<style>
  header { display: none !important; }
  body { padding-top: 0 !important; margin-top: 0 !important; overflow: hidden; }
  .wrap { height: 100vh; display: flex; flex-direction: column; overflow: hidden; gap: 10px; }
  .phasebar, .filters { flex-shrink: 0; }
  .grid { flex: 1; min-height: 0; overflow: hidden; align-items: stretch; }
  @media (min-width: 960px) {
    .mapcard { position: static !important; align-self: stretch !important; display: flex; flex-direction: column; overflow: hidden; }
    .mapwrap { flex: 1; min-height: 0; overflow: hidden; }
    #map { height: 100% !important; min-height: 0 !important; }
    .ledger { display: flex; flex-direction: column; overflow: hidden; }
    .lhead { flex-shrink: 0; }
    .list { flex: 1; overflow-y: auto; min-height: 0; }
  }
  @media (max-width: 959px) {
    .wrap { overflow-y: auto; height: auto; }
    body { overflow: auto; }
    .grid { overflow: visible; }
    .ledger { overflow: visible; }
    .list { overflow: visible; max-height: none; }
    #map { height: clamp(320px, 55vh, 600px) !important; }
  }
</style>`;
const processedMapHtml = projectMapHtml
  .replace("</head>", _injectCss + "\n</head>");

/* ─────────────────────────────────────────────
   Featured project data (from the white paper)
───────────────────────────────────────────── */
const ISB_STATS = [
  { value: "~70,000 m²", label: "Developed Area" },
  { value: "7,200 m²", label: "Enclosed Warehouse" },
  { value: "250,000+", label: "LTI-Free Person-Hours" },
  { value: "99.7%+", label: "Inventory Accuracy" },
  { value: "16,000+", label: "Line Items Managed" },
  { value: "18 Months", label: "Sand to Fully Operational" },
];

const ISB_CAPABILITIES = [
  {
    number: "01",
    title: "Material Management",
    body: "The 7,200 m² main warehouse incorporates Very Narrow Aisle (VNA) systems, Kardex Vertical Lift Modules — the first in the region — climate-controlled preservation areas, overhead crane capabilities, and full ERP integration.",
    img: imgOffshoreCargo,
  },
  {
    number: "02",
    title: "Hazardous Goods & Chemical Storage",
    body: "A dedicated ~7,000 m² chemical area built to ATEX standards handles methanol, propane and ethylene. The facility incorporates AI-enabled gas cloud cameras, blast walls, segregated drainage, controlled access, and active firefighting systems.",
    img: imgChemicals,
  },
  {
    number: "03",
    title: "Direct Quay Access",
    body: "Purpose-built interfaces between warehousing, material management, and the quay reduce handling, limit port traffic interaction, shorten response times, and support safer, faster cargo movements for vessel operations.",
    img: imgMarineSupport,
  },
  {
    number: "04",
    title: "Safety Culture",
    body: "Over 250,000 person-hours completed during construction without a lost time injury. Toolbox talks, leadership engagement, observation programmes, hazard hunts, and continuous training embedded safety as a shared expectation — not a requirement.",
    img: imgSupplyBase,
  },
];

/* ─────────────────────────────────────────────
   Client references
───────────────────────────────────────────── */
const CLIENT_REFERENCES = [
  {
    client: "Petronas Carigali PTY LTD",
    location: "Nouakchott, Mauritania",
    years: "2013 – 2018",
    services: ["Supply base provision & management", "Qualified labour", "Mobile plant", "CCU rental", "Chemical products", "Waste management", "Supply & crew vessels"],
    note: "Multiple Gold Awards — only local sub-contractor to receive FOCUSED Recognition. Over 3,130 MT of waste treated.",
    tier: "flagship", logo: logoPetronas, logoScale: 1.1,
  },
  {
    client: "BP",
    location: "Mauritania & Senegal",
    years: "2017 – Present",
    services: ["CCU rental", "Tank cleaning", "Waste management"],
    note: "Tank cleaning and waste management formed a core part of BP's HSE function across the Bulge Region.",
    tier: "flagship", logo: logoBP, logoScale: 1.0,
  },
  {
    client: "Schlumberger / MI-SWACO",
    location: "Nouakchott, Mauritania",
    years: "2014 – Present",
    services: ["LMP site provision", "Qualified labour", "Mobile plant", "Waste management", "CCU rental", "Supply of goods"],
    note: "First and only solution in Mauritania for direct pumping of drilling fluids to supply vessels via the fuel jetty.",
    tier: "flagship", logo: logoMiSwaco, logoScale: 1.0,
  },
  {
    client: "TotalEnergies",
    location: "Nouakchott, Mauritania",
    years: "2017 – 2021",
    services: ["Facility rental", "Qualified labour", "Mobile plant", "Vessel agency", "ISPS & jetty operations", "CCU rental", "Waste management"],
    note: "Fully integrated services covering all port operations — recognised with an exceptional performance incentive.",
    tier: "flagship", logo: logoTotalEnergiesFlagship, logoScale: 1.0,
  },
  {
    client: "Halliburton",
    location: "Nouakchott, Mauritania",
    years: "2017 – 2021",
    services: ["Facility rental", "Qualified labour", "Mobile plant", "CCU rental", "Chemical provision", "Tank cleaning", "Waste management"],
    note: "Logistics support with a qualified team of supervisors and operators; LMP/Bulk plant installation on SEPCO premises.",
    tier: "flagship", logo: logoHalliburtonFlagship, logoScale: 2.2,
  },
  {
    client: "Pacific Drilling",
    location: "Nouakchott, Mauritania",
    years: "2017 – 2021",
    services: ["Facility rental", "Qualified labour", "Mobile plant", "Vessel agency", "ISPS & jetty operations", "Freight forwarding", "Waste management"],
    note: "Fully integrated cradle-to-grave services covering all operations in Mauritania.",
    tier: "flagship", logo: logoPacific, logoScale: 1.1,
  },
  { client: "Woodside Senegal", location: "Senegal", years: "2021 – Present", services: ["Waste management"], note: "Sangomar Project support.", tier: "standard", logo: logoWoodside, logoScale: 1.1 },
  { client: "Vroon", location: "Mauritania", years: "2020 – Present", services: ["Waste management", "Vessel agency", "Meet & Greet", "Customs clearance", "Supply of goods"], note: "", tier: "standard", logo: logoVroon, logoScale: 1.1 },
  { client: "Jan De Nul", location: "Mauritania", years: "2019 – Present", services: ["Waste management"], note: "", tier: "standard", logo: logoJanDeNul, logoScale: 1.1 },
  { client: "Oceaneering", location: "Mauritania", years: "2019 – Present", services: ["Meet & Greet", "Supply of goods"], note: "", tier: "standard", logo: logoOceaneering, logoScale: 1.0 },
  { client: "Kosmos Energy", location: "Mauritania", years: "2017 – 2018", services: ["Waste management", "CCU rental"], note: "Certificate of Recognition — KEM Shorebase 2015/2018.", tier: "standard", logo: logoKosmos, logoScale: 1.1 },
  { client: "Baker Hughes", location: "Mauritania", years: "2015", services: ["Waste management"], note: "", tier: "standard", logo: logoBakerHughes, logoScale: 1.5 },
  { client: "Tullow Oil", location: "Mauritania", years: "2012 – 2015", services: ["Waste management"], note: "", tier: "standard", logo: logoTullow, logoScale: 1.1 },
  { client: "Bambini", location: "Mauritania", years: "2016 – 2018", services: ["Vessel agency", "Meet & Greet", "Customs clearance", "Supply of goods", "Waste management"], note: "", tier: "standard", logo: logoBambini, logoScale: 1.1 },
  { client: "Bourbon", location: "Mauritania", years: "2018 – 2019", services: ["Vessel agency", "Meet & Greet", "Customs clearance", "Waste management"], note: "", tier: "standard", logo: logoBourbon, logoScale: 1.8 },
  { client: "Seacor", location: "Mauritania", years: "2017 – 2018", services: ["Vessel agency", "Meet & Greet", "Customs clearance", "Waste management"], note: "", tier: "standard", logo: logoSeacor, logoScale: 1.1 },
  { client: "Shearwater", location: "Mauritania", years: "2020", services: ["Admin support", "Vessel agency", "Port calls", "Customs clearance", "Qualified labour"], note: "", tier: "standard", logo: logoShearwater, logoScale: 1.1 },
  { client: "Tidewater", location: "Mauritania", years: "2019", services: ["Vessel agency", "Port calls", "Customs clearance", "Admin support"], note: "", tier: "standard", logo: logoTidewater, logoScale: 1.6 },
  { client: "Ocean Installer", location: "Mauritania", years: "2018", services: ["Vessel agency", "Customs clearance", "Waste management"], note: "", tier: "standard", logo: logoOceanInstaller, logoScale: 1.5 },
];

/* ─────────────────────────────────────────────
   Supporting case studies
───────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "01",
    client: "Major Oil Operator",
    title: "Methanol ISO Tank Logistics — Nouakchott Port",
    category: "Logistics & Port Operations",
    challenge: "Managing hazardous chemical delivery under strict timelines, safety protocols, and regulatory requirements at a remote African port.",
    solution: "Integrated ISO tank coordination, port operations, customs clearance, and safety management under a single SEPCO contract.",
    results: [
      "65 deliveries completed — zero failures",
      "250+ ISO tanks coordinated with full traceability",
      "Zero safety or regulatory incidents",
      "100% on-time delivery rate",
    ],
    img: imgChemicals,
    tags: ["Logistics", "Port Ops", "Chemicals"],
  },
  {
    id: "02",
    client: "International Energy Operator",
    title: "Port Call Management & Marine Coordination",
    category: "Marine Support Services",
    challenge: "Coordinating high-frequency vessel traffic at Nouakchott port with strict ISPS security requirements and crew change logistics.",
    solution: "SEPCO deployed dedicated marine coordination teams covering vessel scheduling, ISPS operations, and crew change management.",
    results: [
      "478+ port calls managed without incident",
      "267 crew changes coordinated seamlessly",
      "2 offtake operations completed on schedule",
      "344+ ISPS security operations executed",
    ],
    img: imgMarineSupport,
    tags: ["Marine", "ISPS", "Crew Management"],
  },
  {
    id: "03",
    client: "Offshore Operator",
    title: "Large-Scale Waste Export Programme",
    category: "Waste Management",
    challenge: "Disposing of significant volumes of offshore operational waste in full compliance with European and Mauritanian environmental regulations.",
    solution: "End-to-end waste management: collection, classification, documentation, and certified export to approved European treatment facilities.",
    results: [
      "5,647 MT successfully exported to Europe",
      "3,838 MT treated locally — zero landfill",
      "Full traceability documentation for all streams",
      "Zero environmental incidents or regulatory breaches",
    ],
    img: imgWasteMgmt,
    imgWide: true,
    tags: ["Waste Mgmt", "Environmental", "Compliance"],
  },
  {
    id: "04",
    client: "Multiple Operators",
    title: "ISPS Security Operations Programme",
    category: "Security & Marine Support",
    challenge: "Maintaining port security standards that meet both ISPS Code requirements and operator security protocols for vessels calling at Nouakchott.",
    solution: "Dedicated ISPS-trained security teams providing continuous port facility and vessel security management.",
    results: [
      "344+ ISPS operations completed",
      "Zero security incidents or compliance failures",
      "Full audit trail for all security activities",
      "Accredited for major operator security standards",
    ],
    img: imgOffshoreCargo,
    tags: ["ISPS", "Security", "Marine"],
  },
  {
    id: "05",
    client: "Major Energy Operator",
    title: "Offshore Equipment Mobilisation Programme",
    category: "Mobile Plant & Equipment",
    challenge: "Rapidly mobilising specialised oilfield equipment to support exploration activities across multiple locations.",
    solution: "SEPCO's mobile plant division deployed, operated, and maintained a comprehensive fleet of oilfield equipment with in-house technical support.",
    results: [
      "Zero unplanned equipment downtime",
      "Full preventive maintenance programme maintained",
      "Rapid mobilisation within 24-hour notice",
      "Significant cost saving vs. international equipment provision",
    ],
    img: imgOilfieldEquip,
    tags: ["Equipment", "Mobilisation", "Plant"],
  },
  {
    id: "06",
    client: "Multiple Operators",
    title: "Automated Tank Cleaning Programme — Supply Vessels & Rigs",
    category: "Tank Cleaning Services",
    challenge: "Operators required safe, compliant cleaning of multiple tank types — fuel, mud, and methanol — aboard supply vessels and rigs, with full waste capture and minimal downtime.",
    solution: "SEPCO deployed its Automatic Tank Cleaning (ATC) system alongside complementary techniques tailored to each tank type. Dedicated trained teams managed confined-space entry, gas-freeing, waste stream capture, and certified disposal within an integrated HSSE framework.",
    results: [
      "Fuel, mud, and methanol tanks cleaned to operator specification",
      "ATC technology deployed — first application of its kind in the region",
      "Zero confined-space incidents across all operations",
      "All waste streams captured, classified, and disposed of under SEPCO's waste management programme",
    ],
    img: imgFuelFacility,
    tags: ["Tank Cleaning", "ATC", "Marine", "Waste Management"],
  },
  {
    id: "07",
    client: "GTA Development — BP",
    title: "Fuel Supply Facility — Nouakchott Port",
    category: "Fuel Supply & Infrastructure",
    challenge: "Establishing a reliable, ATEX-compliant fuel supply capability capable of servicing offshore support vessels directly from the quayside at Nouakchott port.",
    solution: "SEPCO designed, built, and now operates a dedicated fuel supply facility with 975 m³ of ATEX-standard storage, connected via a purpose-built pipeline system to Berth 1 at Nouakchott port for direct vessel bunkering.",
    results: [
      "975 m³ ATEX-compliant storage capacity commissioned",
      "Direct pipeline connection to Berth 1 — no road tanker exposure",
      "Continuous vessel bunkering support with zero supply failures",
      "Full compliance with Mauritanian regulatory and international safety standards",
    ],
    img: null,
    tags: ["Fuel Supply", "ATEX", "Port Infrastructure", "Bunkering"],
  },
];

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export function Projects() {
  const [mapHeight, setMapHeight] = useState(820);

  useEffect(() => {
    const update = () => setMapHeight(Math.max(700, window.innerHeight - 100));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ backgroundColor: "#034e7c" }}>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${imgSupplyBase})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #034e7c 25%, rgba(3,78,124,0.45) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}>
                Projects &amp; Case Studies
              </span>
            </div>
            <h1 className="text-white uppercase mb-6 max-w-2xl" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05 }}>Real projects<br />Proven results<br /><span style={{ color: "rgba(255,255,255,0.72)" }}>Measurable impact</span></h1>
            <p className="max-w-xl leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>
              Every project below represents a real operational challenge solved through SEPCO's integrated approach — from the region's most advanced supply base to daily logistics and waste operations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURED: INTEGRATED SUPPLY BASE ─────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            {/* Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                Featured Project
              </span>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="uppercase leading-tight" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  SEPCO Integrated Supply Base
                </h2>
                <p className="mt-2 text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#64748B" }}>
                  Greater Tortue Ahmeyim (GTA) Development &nbsp;·&nbsp; Nouakchott, Mauritania &nbsp;·&nbsp; Client: BP
                </p>
              </div>
              <span className="text-xs px-3 py-1.5 tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, backgroundColor: "#034e7c", color: "#ffffff" }}>
                Integrated Supply Base
              </span>
            </div>
          </FadeIn>

          {/* Hero image + intro */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden mb-2" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            <div className="lg:col-span-3" style={{ minHeight: "380px", backgroundColor: "#F1F5F9" }}>
              <img src={imgSupplyBase} alt="SEPCO Integrated Supply Base aerial view" className="w-full h-full object-cover" style={{ minHeight: "380px" }} />
            </div>
            <div className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-center" style={{ backgroundColor: "#F8FAFC" }}>
              <FadeIn direction="right">
                <p className="leading-relaxed mb-6" style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.8, fontSize: "0.9375rem" }}>
                  Long before first gas was discovered in the GTA field, SEPCO believed that Mauritania would one day need a logistics platform capable of supporting world-class offshore operations. That belief became a long-term investment and, eventually, one of the most ambitious industrial projects undertaken by the company.
                </p>
                <p className="leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.8, fontSize: "0.9375rem" }}>
                  The SEPCO Integrated Supply Base stands today as an example of private-sector infrastructure development — the result of years of planning, partnerships, and persistence. It supports logistics, warehousing, material management, marine operations, waste management, fuel supply, and hazardous goods operations from a single location designed to serve the industry for many years to come.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Stats bar */}
          <FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" style={{ border: "1px solid rgba(0,0,0,0.07)", borderTop: "none" }}>
              {ISB_STATS.map((s, i) => (
                <div
                  key={s.label}
                  className="p-5 text-center"
                  style={{
                    borderRight: i < ISB_STATS.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
                    backgroundColor: i % 2 === 0 ? "#ffffff" : "#F8FAFC",
                  }}
                >
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "1.4rem", lineHeight: 1 }}>{s.value}</div>
                  <div className="mt-1 text-xs leading-tight" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ISB CAPABILITIES ──────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                Integrated Capabilities
              </span>
            </div>
            <h2 className="uppercase mb-12 max-w-2xl" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1 }}>One facility, Every capability</h2>
          </FadeIn>
          <div className="space-y-6">
            {ISB_CAPABILITIES.map((cap, i) => (
              <FadeIn key={cap.number} delay={i * 0.06}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  style={{ border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <div className={`lg:col-span-2 ${i % 2 === 1 ? "lg:order-2" : ""}`} style={{ minHeight: "240px", backgroundColor: "#F1F5F9" }}>
                    <img src={cap.img} alt={cap.title} className="w-full h-full object-cover" style={{ minHeight: "240px" }} />
                  </div>
                  <div className={`lg:col-span-3 p-8 md:p-10 flex flex-col justify-center bg-white ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-start gap-4 mb-3">
                      <span className="text-xs tracking-widest shrink-0 mt-0.5" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474" }}>{cap.number}</span>
                      <h3 className="uppercase" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.25rem, 2vw, 1.6rem)", lineHeight: 1.1 }}>{cap.title}</h3>
                    </div>
                    <p className="leading-relaxed ml-9" style={{ fontFamily: "Raleway, sans-serif", color: "#374151", lineHeight: 1.8, fontSize: "0.9375rem" }}>{cap.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILDING AT SCALE + LOCAL CONTENT ─────────── */}
      <section className="py-24" style={{ backgroundColor: "#034e7c" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}>Building at Scale</span>
              </div>
              <h3 className="text-white uppercase mb-5" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.1 }}>From sand and drawings to a fully operational platform in 18 months</h3>
              <p className="mb-6 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: "0.9375rem" }}>
                In May 2023, the site was little more than sand and drawings. Eighteen months later, it had become a fully operational logistics platform supporting one of the world's most demanding offshore developments. Behind those numbers was a team of engineers, contractors, and operators working to deliver a facility capable of supporting demanding offshore operations.
              </p>
              <div className="space-y-2">
                {[
                  "Design-build approach — evolving with operational requirements",
                  "Continuous collaboration with BP, port authorities, and civil protection",
                  "Chemical handling standards new to Mauritania — approved through months of regulatory engagement",
                  "Traffic segregation, drainage systems, and emergency infrastructure built in from day one",
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
                    <span className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.7)" }}>{pt}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.15em" }}>Investment in People</span>
              </div>
              <h3 className="text-white uppercase mb-5" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.1 }}>Infrastructure translated into real capability</h3>
              <p className="mb-6 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: "0.9375rem" }}>
                Throughout the project, local contractors and workers received safety and technical training alongside exposure to standards and technologies new to the region. As operations developed, increasing responsibility was transferred to Mauritanian personnel. This process continues today.
              </p>
              {/* Amadou Fall callout */}
              <div className="p-6" style={{ backgroundColor: "rgba(255,255,255,0.07)", borderLeft: "3px solid rgba(255,255,255,0.3)" }}>
                <p className="text-sm italic mb-3 leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.85)" }}>
                  "Amadou Fall joined the project during construction in a support role. Today, he works as Maintenance Supervisor — helping maintain the same equipment and facilities he helped build."
                </p>
                <p className="text-xs" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em" }}>— A story that reflects many.</p>
              </div>
              <div className="mt-5 space-y-2">
                {[
                  "Hundreds of direct and indirect jobs created",
                  "Local companies across construction, maintenance, transport, and security",
                  "Women successfully integrated into operational and support functions",
                  "Knowledge transfer and mentoring for lasting sector capability",
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
                    <span className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.7)" }}>{pt}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SUPPORTING CASE STUDIES ───────────────────── */}
      <section className="bg-white pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                Case Studies
              </span>
            </div>
            <h2 className="uppercase mb-12" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Further operational evidence</h2>
          </FadeIn>
        </div>
        <StaggerChildren className="max-w-7xl mx-auto px-6 pb-16 space-y-10">
          {PROJECTS.map((project, i) => (
            <StaggerItem key={project.id}>
              <div
                className="overflow-hidden"
                style={{ border: "1px solid rgba(0,0,0,0.07)" }}
              >
                {/* Wide image: full-width above content */}
                {"imgWide" in project && project.imgWide && project.img && (
                  <div className="w-full bg-white" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "24px 24px 0" }}>
                    <img
                      src={project.img}
                      alt={`SEPCO project: ${project.title}`}
                      className="w-full h-auto block"
                      style={{ maxHeight: "600px", objectFit: "contain", objectPosition: "center" }}
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Side image: normal layout */}
                {!("imgWide" in project && project.imgWide) && project.img && (
                  <div
                    className={`lg:col-span-2 ${i % 2 === 1 ? "lg:order-2" : ""}`}
                    style={{ minHeight: "280px", backgroundColor: "#F1F5F9" }}
                  >
                    <img
                      src={project.img}
                      alt={`SEPCO project: ${project.title}`}
                      className="w-full h-full object-cover"
                      style={{ minHeight: "280px" }}
                    />
                  </div>
                )}

                {/* Content */}
                <div className={`${!("imgWide" in project && project.imgWide) && project.img ? "lg:col-span-3" : "lg:col-span-5"} p-8 md:p-10 ${i % 2 === 1 && !("imgWide" in project && project.imgWide) ? "lg:order-1" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.12em" }}>
                      {project.id}
                    </span>
                    <span className="text-xs px-2 py-0.5" style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", backgroundColor: "#F1F5F9" }}>
                      {project.category}
                    </span>
                    {project.client && (
                      <span className="text-xs" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8" }}>
                        — {project.client}
                      </span>
                    )}
                  </div>

                  <h3 className="uppercase mb-6" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.25rem, 2vw, 1.75rem)", lineHeight: 1.1 }}>
                    {project.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#94A3B8" }}>Challenge</p>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#374151" }}>{project.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#94A3B8" }}>Approach</p>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#374151" }}>{project.solution}</p>
                    </div>
                  </div>

                  <div className="p-4 mb-5" style={{ backgroundColor: "#F8FAFC", borderLeft: "3px solid #7e8474" }}>
                    <p className="text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474" }}>Results Delivered</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {project.results.map((r) => (
                        <div key={r} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "#7e8474" }} />
                          <span className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#374151" }}>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 500, color: "#64748B", border: "1px solid rgba(0,0,0,0.1)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                </div>{/* end inner grid */}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* ── CLIENT REFERENCES ────────────────────────── */}
      <section className="py-24 bg-white" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                Company Experience &amp; References
              </span>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-3">
              <h2 className="uppercase" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                Trusted by the industry<br /><span style={{ color: "#7e8474" }}>since 2012</span>
              </h2>
            </div>
            <p className="max-w-2xl mb-12" style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", fontSize: "0.9375rem", lineHeight: 1.7 }}>
              Over more than a decade, SEPCO has delivered services to major operators and contractors across Mauritania and Senegal. The following references represent our key client relationships — many of them spanning multiple years and contract renewals.
            </p>
          </FadeIn>

          {/* Flagship clients */}
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {CLIENT_REFERENCES.filter(r => r.tier === "flagship").map((ref, i) => (
              <StaggerItem key={ref.client}>
                <div className="h-full flex flex-col p-6" style={{ border: "1px solid rgba(0,0,0,0.08)", backgroundColor: "#F8FAFC" }}>
                  {(ref as any).logo && (
                    <div className="mb-3" style={{ height: "36px", overflow: "hidden" }}>
                      <img
                        src={(ref as any).logo}
                        alt={ref.client}
                        style={{
                          maxHeight: "36px",
                          maxWidth: "140px",
                          width: "auto",
                          objectFit: "contain",
                          objectPosition: "left center",
                          mixBlendMode: "multiply",
                          transform: `scale(${(ref as any).logoScale ?? 1})`,
                          transformOrigin: "left center",
                        }}
                      />
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="uppercase" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "1.1rem", lineHeight: 1.1 }}>{ref.client}</h3>
                      <p className="text-xs mt-0.5" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8" }}>{ref.location}</p>
                    </div>
                    <span className="text-xs px-2 py-1 shrink-0 whitespace-nowrap" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, backgroundColor: "#034e7c", color: "#ffffff" }}>{ref.years}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {ref.services.map(s => (
                      <span key={s} className="text-xs px-2 py-0.5" style={{ fontFamily: "Raleway, sans-serif", color: "#475569", border: "1px solid rgba(0,0,0,0.09)" }}>{s}</span>
                    ))}
                  </div>
                  {ref.note && (
                    <p className="text-xs leading-relaxed mt-auto pt-3" style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", borderTop: "1px solid rgba(0,0,0,0.06)" }}>{ref.note}</p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Secondary clients grid */}
          <FadeIn>
            <div className="overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#F1F5F9", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474" }}>Additional Client References</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {CLIENT_REFERENCES.filter(r => r.tier === "standard").map((ref, i) => (
                  <div
                    key={ref.client}
                    className="p-5 flex flex-col"
                    style={{
                      borderRight: (i + 1) % 4 !== 0 ? "1px solid rgba(0,0,0,0.06)" : "none",
                      borderBottom: "1px solid rgba(0,0,0,0.06)",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    {/* Logo area — fixed height, overflow hidden so scale() zoom clips cleanly */}
                    <div className="flex items-center mb-3" style={{ height: "32px", overflow: "hidden" }}>
                      {ref.logo ? (
                        <img
                          src={ref.logo}
                          alt={ref.client}
                          style={{
                            maxHeight: "32px",
                            maxWidth: "120px",
                            width: "auto",
                            objectFit: "contain",
                            objectPosition: "left center",
                            mixBlendMode: "multiply",
                            transform: `scale(${(ref as any).logoScale ?? 1})`,
                            transformOrigin: "left center",
                          }}
                        />
                      ) : (
                        <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "0.95rem", letterSpacing: "0.02em" }}>{ref.client}</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      {ref.logo && <p className="text-xs font-semibold" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#1e3a5f" }}>{ref.client}</p>}
                      <span className="text-xs ml-auto shrink-0" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8" }}>{ref.years}</span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#64748B" }}>
                      {ref.services.join(" · ")}
                    </p>
                    {ref.note ? <p className="text-xs mt-2 italic" style={{ fontFamily: "Raleway, sans-serif", color: "#7e8474" }}>{ref.note}</p> : null}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── OIL & GAS PROJECT MAP ────────────────────── */}
      <section style={{ backgroundColor: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.06)" }} className="pt-20">
        <div className="max-w-7xl mx-auto px-6 pb-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}>
                Oil &amp; Gas Experience
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="uppercase" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}>
                Our oil &amp; gas<br />project history
              </h2>
              <p className="max-w-sm text-sm leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "#64748B" }}>
                From first seismic survey to final decommissioning — explore SEPCO's full project history across Mauritania and Senegal's offshore blocks.
              </p>
            </div>
          </FadeIn>
        </div>
        <iframe
          srcDoc={processedMapHtml}
          sandbox="allow-scripts"
          title="SEPCO Oil & Gas Project Map — Mauritania and Senegal"
          style={{ width: "100%", height: `${mapHeight}px`, border: "none", display: "block" }}
        />
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid rgba(0,0,0,0.06)" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="uppercase mb-4" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Similar project in mind?
            </h2>
            <p className="mb-8 max-w-lg mx-auto" style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", fontSize: "1rem" }}>
              Tell us about your operational challenge and we will show you how SEPCO's integrated approach can deliver the same results for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase"
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, letterSpacing: "0.08em", backgroundColor: "#034e7c", color: "#ffffff" }}
            >
              Discuss Your Project
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
