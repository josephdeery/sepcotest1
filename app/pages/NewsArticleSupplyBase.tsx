import { Link } from "react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import imgGallery1 from "../../imports/optimized/news/article_7_-_pic_1.webp";
import imgGallery2 from "../../imports/optimized/news/article_7_-_pic_2.webp";
import imgGallery3 from "../../imports/optimized/news/article_7_-_pic_3.webp";
import imgGallery4 from "../../imports/optimized/news/article_7_-_pic_4.webp";
import imgGallery5 from "../../imports/optimized/news/article_7_-_pic_5.webp";

const F = "Raleway, sans-serif";
const H = "Barlow Condensed, sans-serif";

const gallery = [
  { img: imgGallery1, alt: "Mauritanian, Senegalese and BP flags inside the SEPCO Integrated Supply Base" },
  { img: imgGallery2, alt: "SEPCO Industries warehouse operative managing storage inventory" },
  { img: imgGallery3, alt: "Forklift operator working in a high-bay supply-base warehouse" },
  { img: imgGallery4, alt: "SEPCO Industries warehouse team coordinating forklift operations" },
  { img: imgGallery5, alt: "Oil, chemicals and lubricants storage area at the supply base" },
];

export function NewsArticleSupplyBase() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#034e7c] pt-32 pb-16">
        <div className="absolute inset-0 bg-[#023c61]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(3,78,124,0.1),rgba(1,37,64,0.5))]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6"><FadeIn>
          <Link to="/news" className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 transition-colors hover:text-white" style={{ fontFamily: F, fontWeight: 600, letterSpacing: "0.12em" }}><ArrowLeft size={12} /> Back to News</Link>
          <div className="mb-5 flex items-center gap-3"><span className="px-2 py-0.5 text-xs text-white/80" style={{ fontFamily: F, fontWeight: 600, backgroundColor: "rgba(255,255,255,0.12)" }}>Operations</span></div>
          <h1 className="mb-6 text-white uppercase" style={{ fontFamily: H, fontWeight: 800, lineHeight: 1.05 }}>SEPCO Industries Inaugurates Integrated Supply Base at the Port of Nouakchott</h1>
          <div className="flex items-center gap-6"><div className="flex items-center gap-2"><Calendar size={13} className="text-white/40" /><span className="text-sm text-white/60" style={{ fontFamily: F }}>June 5, 2025</span></div><div className="flex items-center gap-2"><Clock size={13} className="text-white/40" /><span className="text-sm text-white/60" style={{ fontFamily: F }}>3 min read</span></div></div>
        </FadeIn></div>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-24">
        <FadeIn className="pt-8">
          <p className="mb-10 border-l-4 border-[#034e7c] bg-[#f8fafc] px-7 py-6 text-xl italic leading-relaxed text-[#455467]" style={{ fontFamily: F }}>SEPCO Industries has officially inaugurated its Integrated Supply Base at the Port of Nouakchott, a strategic logistics hub designed to support GTA offshore operations and strengthen regional energy infrastructure in Mauritania and Senegal.</p>
          <div className="space-y-6 text-[1rem] leading-relaxed text-[#374151]" style={{ fontFamily: F, lineHeight: 1.8 }}>
            <p>SEPCO Industries is proud to announce the official inauguration of its <strong>Integrated Supply Base at the Port of Nouakchott</strong>, marking a major milestone in the company&apos;s commitment to supporting offshore energy operations in the MSGBC region.</p>
            <p>Developed as a world-class logistics hub, the Integrated Supply Base brings together <strong>material management, logistics, vessel management, chemical handling, and waste management</strong> within a single, integrated facility. This centralized model is designed to enhance operational efficiency, ensure high safety standards, and deliver reliable support to offshore partners involved in <strong>GTA operations</strong>.</p>
            <p>The inauguration ceremony was attended by senior representatives from <strong>BP</strong>, reflecting the strong collaboration between SEPCO Industries and its key clients. SEPCO Industries also extends its sincere appreciation to <strong>SMH, Petrosen, and Kosmos Energy</strong> for their continued confidence and partnership.</p>
            <p>This inauguration represents more than the launch of a new facility. It marks the beginning of a new phase in SEPCO Industries&apos; role as a <strong>one-stop provider of integrated oilfield, logistics, and maritime services</strong>, supporting the sustainable development of the energy sector in <strong>Mauritania and Senegal</strong>.</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-2 border-b border-black/[0.07] pb-10">{["Supply Base", "GTA", "Port of Nouakchott", "Logistics", "Operations"].map((tag) => <span key={tag} className="border border-black/10 px-3 py-1 text-xs text-[#64748b]" style={{ fontFamily: F }}>{tag}</span>)}</div>
        </FadeIn>
        <FadeIn delay={0.1}><section className="mt-14" aria-labelledby="supply-base-gallery-heading"><h2 id="supply-base-gallery-heading" className="mb-8 uppercase text-[#034e7c]" style={{ fontFamily: H, fontWeight: 800, fontSize: "2rem" }}>Media Gallery</h2><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{gallery.map((item) => <div key={item.alt} className="aspect-[4/3] overflow-hidden bg-[#f1f5f9]"><ImageWithFallback src={item.img} alt={item.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" /></div>)}</div></section></FadeIn>
        <FadeIn delay={0.15}><div className="mt-16 flex items-center justify-between border-t border-black/[0.07] pt-8"><Link to="/news" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#034e7c] transition-all hover:gap-3" style={{ fontFamily: F, fontWeight: 600 }}><ArrowLeft size={14} /> Back to News</Link><Link to="/contact" className="inline-flex items-center gap-2 bg-[#034e7c] px-6 py-3 text-sm uppercase tracking-wider text-white" style={{ fontFamily: F, fontWeight: 600 }}>Contact Us</Link></div></FadeIn>
      </article>
    </div>
  );
}
