import { Link } from "react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import imgGallery1 from "../../imports/optimized/news/article_6_-_pic_1.webp";
import imgGallery2 from "../../imports/optimized/news/article_6_-_pic_2.webp";
import imgGallery3 from "../../imports/optimized/news/article_6_-_pic_3.webp";
import imgGallery4 from "../../imports/optimized/news/article_6_-_pic_4.webp";

const F = "Raleway, sans-serif";
const H = "Barlow Condensed, sans-serif";

const gallery = [
  { img: imgGallery1, alt: "SONATRACH and SMH delegation touring SEPCO Industries warehouse infrastructure" },
  { img: imgGallery2, alt: "Delegation in PPE touring SEPCO Industries GTA logistics base" },
  { img: imgGallery3, alt: "SEPCO Industries team demonstrating warehouse technology to the visiting delegation" },
  { img: imgGallery4, alt: "SONATRACH and SMH delegation meeting with SEPCO Industries leaders" },
];

export function NewsArticleSonatrach() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#034e7c] pt-32 pb-16">
        <div className="absolute inset-0 bg-[#023c61]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(3,78,124,0.1),rgba(1,37,64,0.5))]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6">
          <FadeIn>
            <Link to="/news" className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 transition-colors hover:text-white" style={{ fontFamily: F, fontWeight: 600, letterSpacing: "0.12em" }}><ArrowLeft size={12} /> Back to News</Link>
            <div className="mb-5 flex items-center gap-3"><span className="px-2 py-0.5 text-xs text-white/80" style={{ fontFamily: F, fontWeight: 600, backgroundColor: "rgba(255,255,255,0.12)" }}>Partnerships</span></div>
            <h1 className="mb-6 text-white uppercase" style={{ fontFamily: H, fontWeight: 800, lineHeight: 1.05 }}>SONATRACH and SMH Visit SEPCO Industries GTA Logistics Base in Nouakchott</h1>
            <div className="flex items-center gap-6"><div className="flex items-center gap-2"><Calendar size={13} className="text-white/40" /><span className="text-sm text-white/60" style={{ fontFamily: F }}>July 2, 2025</span></div><div className="flex items-center gap-2"><Clock size={13} className="text-white/40" /><span className="text-sm text-white/60" style={{ fontFamily: F }}>2 min read</span></div></div>
          </FadeIn>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-24">
        <FadeIn className="pt-8">
          <p className="mb-10 border-l-4 border-[#034e7c] bg-[#f8fafc] px-7 py-6 text-xl italic leading-relaxed text-[#455467]" style={{ fontFamily: F }}>SEPCO Industries welcomed a delegation from SONATRACH and SMH for a field visit to its GTA petroleum logistics base in Nouakchott, highlighting its infrastructure, HSE standards, and strategic role in supporting regional gas operations.</p>
          <div className="space-y-6 text-[1rem] leading-relaxed text-[#374151]" style={{ fontFamily: F, lineHeight: 1.8 }}>
            <p>SEPCO Industries was honored to welcome a delegation from <strong>SONATRACH</strong>, alongside representatives of <strong>SMH</strong>, for a field visit to its <strong>GTA petroleum logistics base</strong> located in the port area of <strong>Port of Nouakchott</strong>.</p>
            <p>The visit provided an opportunity to present SEPCO Industries&apos; <strong>storage and warehousing infrastructure, HSE-compliant operations and safety systems, advanced logistics technologies and IT solutions</strong>, as well as the company&apos;s <strong>strategic role in supporting GTA gas field activities</strong>.</p>
            <p>During the exchange, SEPCO Industries&apos; professionalism, strong safety culture, and operational standards were acknowledged, reflecting the daily commitment of its teams to operational excellence and alignment with international oil and gas best practices.</p>
            <p>Such engagements play a key role in strengthening regional cooperation within the energy sector. SEPCO Industries remains fully committed to supporting the development of the GTA project and contributing to the continued growth of the oil and gas ecosystem in <strong>Mauritania and the wider region</strong>.</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-2 border-b border-black/[0.07] pb-10">{["SONATRACH", "SMH", "GTA", "Logistics", "HSE"].map((tag) => <span key={tag} className="border border-black/10 px-3 py-1 text-xs text-[#64748b]" style={{ fontFamily: F }}>{tag}</span>)}</div>
        </FadeIn>

        <FadeIn delay={0.1}><section className="mt-14" aria-labelledby="sonatrach-gallery-heading"><h2 id="sonatrach-gallery-heading" className="mb-8 uppercase text-[#034e7c]" style={{ fontFamily: H, fontWeight: 800, fontSize: "2rem" }}>Media Gallery</h2><div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{gallery.map((item) => <div key={item.alt} className="aspect-[4/3] overflow-hidden bg-[#f1f5f9]"><ImageWithFallback src={item.img} alt={item.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" /></div>)}</div></section></FadeIn>
        <FadeIn delay={0.15}><div className="mt-16 flex items-center justify-between border-t border-black/[0.07] pt-8"><Link to="/news" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#034e7c] transition-all hover:gap-3" style={{ fontFamily: F, fontWeight: 600 }}><ArrowLeft size={14} /> Back to News</Link><Link to="/contact" className="inline-flex items-center gap-2 bg-[#034e7c] px-6 py-3 text-sm uppercase tracking-wider text-white" style={{ fontFamily: F, fontWeight: 600 }}>Contact Us</Link></div></FadeIn>
      </article>
    </div>
  );
}
