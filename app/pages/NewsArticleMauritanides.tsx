import { Link } from "react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import imgGallery1 from "../../imports/optimized/news/article_5_-_pic_1.webp";
import imgGallery2 from "../../imports/optimized/news/article_5_-_pic_2.webp";
import imgGallery3 from "../../imports/optimized/news/article_5_-_pic_3.webp";
import imgGallery4 from "../../imports/optimized/news/article_5_-_pic_4.webp";
import imgGallery5 from "../../imports/optimized/news/article_5_-_pic_5.webp";
import imgGallery6 from "../../imports/optimized/news/article_5_-_pic_6.webp";
import imgGallery7 from "../../imports/optimized/news/article_5_-_pic_7.webp";
import imgGallery8 from "../../imports/optimized/news/article_5_-_pic_8.webp";

const F = "Raleway, sans-serif";
const H = "Barlow Condensed, sans-serif";

const gallery = [
  { img: imgGallery1, alt: "Visitors meet the SEPCO Industries team at the Mauritanides 2025 booth" },
  { img: imgGallery2, alt: "SEPCO Industries representative presenting the supply-base model to delegates" },
  { img: imgGallery3, alt: "Delegates learning about SEPCO Industries capabilities at the exhibition stand" },
  { img: imgGallery4, alt: "Industry delegates discussing opportunities with the SEPCO Industries team" },
  { img: imgGallery5, alt: "Mauritanides 2025 visitors viewing the SEPCO Industries stand and model" },
  { img: imgGallery6, alt: "SEPCO Industries presentation on why local content is important" },
  { img: imgGallery7, alt: "SEPCO Industries team welcoming guests at the Mauritanides 2025 booth" },
  { img: imgGallery8, alt: "Delegates and the SEPCO Industries team networking at the exhibition" },
];

export function NewsArticleMauritanides() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#034e7c] pt-32 pb-16">
        <div className="absolute inset-0 bg-[#023c61]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(3,78,124,0.1),rgba(1,37,64,0.5))]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6">
          <FadeIn>
            <Link to="/news" className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 transition-colors hover:text-white" style={{ fontFamily: F, fontWeight: 600, letterSpacing: "0.12em" }}><ArrowLeft size={12} /> Back to News</Link>
            <div className="mb-5 flex items-center gap-3"><span className="px-2 py-0.5 text-xs text-white/80" style={{ fontFamily: F, fontWeight: 600, backgroundColor: "rgba(255,255,255,0.12)" }}>Industry Events</span></div>
            <h1 className="mb-6 text-white uppercase" style={{ fontFamily: H, fontWeight: 800, lineHeight: 1.05 }}>SEPCO Industries, Gold Sponsor, at Mauritanides 2025</h1>
            <div className="flex items-center gap-6"><div className="flex items-center gap-2"><Calendar size={13} className="text-white/40" /><span className="text-sm text-white/60" style={{ fontFamily: F }}>September 8, 2025</span></div><div className="flex items-center gap-2"><Clock size={13} className="text-white/40" /><span className="text-sm text-white/60" style={{ fontFamily: F }}>2 min read</span></div></div>
          </FadeIn>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-24">
        <FadeIn className="pt-8">
          <p className="mb-10 border-l-4 border-[#7e8474] bg-[#f8fafc] px-7 py-6 text-xl italic leading-relaxed text-[#455467]" style={{ fontFamily: F }}>As a Gold Sponsor of Mauritanides 2025, SEPCO Industries reaffirmed its commitment to safety, sustainability, and long-term growth within the energy, oil, gas, and mining sectors.</p>
          <div className="space-y-6 text-[1rem] leading-relaxed text-[#374151]" style={{ fontFamily: F, lineHeight: 1.8 }}>
            <p>SEPCO Industries participated as a <strong>Gold Sponsor at Mauritanides 2025</strong>, reaffirming its commitment to supporting the development of Mauritania&apos;s mining, oil, gas, and energy sectors. The event was marked by the visit of <strong>Mohamed Ould Cheikh El Ghazouani</strong> to the SEPCO Industries booth. This high-level presence underscores the strategic importance of industrial and energy projects in Mauritania and reflects confidence in SEPCO Industries&apos; long-term vision and ambition.</p>
            <p>During the event, SEPCO Industries delivered presentations highlighting its corporate journey, key performance indicators, and strategic vision, with a strong emphasis on safety, sustainability, and operational excellence as core pillars of the company&apos;s operations.</p>
            <p>The quality of exchanges, partnerships, and recognition received throughout Mauritanides 2025 further strengthens SEPCO Industries&apos; position as a trusted partner in the regional energy and mining ecosystem. As a Gold Sponsor, SEPCO Industries remains committed to contributing to the sustainable growth and future of the sector.</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-2 border-b border-black/[0.07] pb-10">{["Mauritanides 2025", "Gold Sponsor", "Mining", "Energy", "Local Content"].map((tag) => <span key={tag} className="border border-black/10 px-3 py-1 text-xs text-[#64748b]" style={{ fontFamily: F }}>{tag}</span>)}</div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <section className="mt-14" aria-labelledby="mauritanides-gallery-heading">
            <h2 id="mauritanides-gallery-heading" className="mb-8 uppercase text-[#034e7c]" style={{ fontFamily: H, fontWeight: 800, fontSize: "2rem" }}>Media Gallery</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{gallery.map((item) => <div key={item.alt} className="aspect-[4/3] overflow-hidden bg-[#f1f5f9]"><ImageWithFallback src={item.img} alt={item.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" /></div>)}</div>
          </section>
        </FadeIn>

        <FadeIn delay={0.15}><div className="mt-16 flex items-center justify-between border-t border-black/[0.07] pt-8"><Link to="/news" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#034e7c] transition-all hover:gap-3" style={{ fontFamily: F, fontWeight: 600 }}><ArrowLeft size={14} /> Back to News</Link><Link to="/contact" className="inline-flex items-center gap-2 bg-[#034e7c] px-6 py-3 text-sm uppercase tracking-wider text-white" style={{ fontFamily: F, fontWeight: 600 }}>Contact Us</Link></div></FadeIn>
      </article>
    </div>
  );
}
