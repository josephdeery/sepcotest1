import { Link } from "react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import imgGallery1 from "../../imports/optimized/news/article_3_-_pic_1.webp";
import imgGallery2 from "../../imports/optimized/news/article_3_-_pic_2.webp";
import imgGallery3 from "../../imports/optimized/news/article_3_-_pic_3.webp";
import imgGallery4 from "../../imports/optimized/news/article_3_-_pic_4.webp";
import imgGallery5 from "../../imports/optimized/news/article_3_-_pic_5.webp";

const F = "Raleway, sans-serif";
const H = "Barlow Condensed, sans-serif";

const gallery = [
  { img: imgGallery1, alt: "Delegates attend a keynote address at MSGBC Oil, Gas & Power 2025" },
  { img: imgGallery2, alt: "Delegates gather at the SEPCO Industries exhibition stand" },
  { img: imgGallery3, alt: "SEPCO Industries team members speaking with delegates at the exhibition" },
  { img: imgGallery4, alt: "Speaker contributing to a high-level MSGBC panel discussion" },
  { img: imgGallery5, alt: "MSGBC Oil, Gas & Power 2025 panel participants posing together" },
];

export function NewsArticleMSGBC() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#034e7c] pt-32 pb-16">
        <div className="absolute inset-0 bg-[#023c61]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(3,78,124,0.1),rgba(1,37,64,0.5))]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6">
          <FadeIn>
            <Link to="/news" className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 transition-colors hover:text-white" style={{ fontFamily: F, fontWeight: 600, letterSpacing: "0.12em" }}>
              <ArrowLeft size={12} /> Back to News
            </Link>
            <div className="mb-5 flex items-center gap-3">
              <span className="px-2 py-0.5 text-xs text-white/80" style={{ fontFamily: F, fontWeight: 600, backgroundColor: "rgba(255,255,255,0.12)" }}>Industry Events</span>
            </div>
            <h1 className="mb-6 text-white uppercase" style={{ fontFamily: H, fontWeight: 800, lineHeight: 1.05 }}>
              SEPCO Industries Participates as Gold Exhibitor at MSGBC Oil, Gas &amp; Power 2025
            </h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2"><Calendar size={13} className="text-white/40" /><span className="text-sm text-white/60" style={{ fontFamily: F }}>December 8, 2025</span></div>
              <div className="flex items-center gap-2"><Clock size={13} className="text-white/40" /><span className="text-sm text-white/60" style={{ fontFamily: F }}>4 min read</span></div>
            </div>
          </FadeIn>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-24">
        <FadeIn className="pt-8">
          <div className="mb-10 border-l-4 border-[#034e7c] bg-[#f8fafc] px-7 py-6 text-lg leading-relaxed text-[#455467]" style={{ fontFamily: F }}>
            <p>SEPCO Industries participated as a Gold Exhibitor at <strong>MSGBC Oil, Gas &amp; Power 2025</strong>, reinforcing its commitment to environmental responsibility, operational excellence, and sustainable local development across the MSGBC region.</p>
            <p className="mt-4">During the event, SEPCO Industries actively contributed to the conference programme through both a technical workshop and a high-level panel discussion, sharing operational expertise and practical insights with industry stakeholders.</p>
          </div>

          <div className="space-y-8 text-[1rem] leading-relaxed text-[#374151]" style={{ fontFamily: F, lineHeight: 1.8 }}>
            <section>
              <h2 className="mb-4 uppercase text-[#034e7c]" style={{ fontFamily: H, fontWeight: 800, fontSize: "1.75rem" }}>Technical Workshop</h2>
              <p>On 08 December 2025, at the Terrou-Bi Hotel in Dakar, SEPCO Industries delivered a technical workshop entitled:</p>
              <p className="my-5 border-l-2 border-[#7e8474] pl-5 italic text-[#455467]">Reducing Environmental Liabilities in the MSGBC Basin: Modern Approaches to Oil &amp; Gas Waste Management.</p>
              <p>The workshop was delivered by:</p>
              <ul className="my-4 list-disc space-y-1 pl-6"><li><strong>Fatoumata Thiam, Waste Coordinator</strong></li><li><strong>Wilfred B. Johnson, Waste Manager</strong></li></ul>
              <p>The session addressed:</p>
              <ul className="mt-4 list-disc space-y-1 pl-6"><li>Environmental, financial, and regulatory risks associated with inadequate waste management</li><li>Good practice standards for oil and gas waste management in 2025</li><li>Practical implementation of modern and compliant waste-management systems</li><li>Case studies and lessons learned from SEPCO Industries&apos; regional operations</li></ul>
            </section>

            <section>
              <h2 className="mb-4 uppercase text-[#034e7c]" style={{ fontFamily: H, fontWeight: 800, fontSize: "1.75rem" }}>High-Level Panel Discussion</h2>
              <p>On 10 December 2025, SEPCO Industries was represented on the main-stage panel entitled:</p>
              <p className="my-5 border-l-2 border-[#7e8474] pl-5 italic text-[#455467]">The Real Cost of Local Content: Balancing Investor Dependence and Ensuring Inclusive Local Participation.</p>
              <p>The panel featured <strong>Malik Ndoye, Country Manager</strong>, who highlighted how effective local content policies contribute to job creation, value retention within host countries, and long-term sustainable development across the MSGBC basin.</p>
            </section>

            <section>
              <h2 className="mb-4 uppercase text-[#034e7c]" style={{ fontFamily: H, fontWeight: 800, fontSize: "1.75rem" }}>Commitment to the Regional Energy Ecosystem</h2>
              <p>Through its participation as a Gold Exhibitor, SEPCO Industries demonstrated its role as a responsible and engaged partner within the regional energy ecosystem, contributing operational experience, technical expertise, and practical solutions to support environmental performance and inclusive growth.</p>
            </section>
          </div>

          <div className="mt-12 flex flex-wrap gap-2 border-b border-black/[0.07] pb-10">
            {["MSGBC 2025", "Gold Exhibitor", "Waste Management", "Local Content", "Energy Sector"].map((tag) => <span key={tag} className="border border-black/10 px-3 py-1 text-xs text-[#64748b]" style={{ fontFamily: F }}>{tag}</span>)}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <section className="mt-14" aria-labelledby="msgbc-gallery-heading">
            <h2 id="msgbc-gallery-heading" className="mb-8 uppercase text-[#034e7c]" style={{ fontFamily: H, fontWeight: 800, fontSize: "2rem" }}>Media Gallery</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item) => <div key={item.alt} className="aspect-[4/3] overflow-hidden bg-[#f1f5f9]"><ImageWithFallback src={item.img} alt={item.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" /></div>)}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16 flex items-center justify-between border-t border-black/[0.07] pt-8">
            <Link to="/news" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#034e7c] transition-all hover:gap-3" style={{ fontFamily: F, fontWeight: 600 }}><ArrowLeft size={14} /> Back to News</Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#034e7c] px-6 py-3 text-sm uppercase tracking-wider text-white" style={{ fontFamily: F, fontWeight: 600 }}>Contact Us</Link>
          </div>
        </FadeIn>
      </article>
    </div>
  );
}
