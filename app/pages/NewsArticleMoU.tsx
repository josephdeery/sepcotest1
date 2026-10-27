import { Link } from "react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import imgGallery1 from "../../imports/optimized/news/article_2_-_pic_1.webp";
import imgGallery2 from "../../imports/optimized/news/article_2_-_pic_2.webp";
import imgGallery3 from "../../imports/optimized/news/article_2_-_pic_3.webp";

const F = "Raleway, sans-serif";
const H = "Barlow Condensed, sans-serif";

const gallery = [
  { img: imgGallery1, alt: "SEPCO Industries and Bioko Consulting representatives shaking hands after signing the agreement" },
  { img: imgGallery2, alt: "SEPCO Industries and Bioko Consulting representatives exchanging signed documents" },
  { img: imgGallery3, alt: "Bioko Consulting representative signing the memorandum of understanding" },
];

export function NewsArticleMoU() {
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
              <span className="px-2 py-0.5 text-xs text-white/80" style={{ fontFamily: F, fontWeight: 600, backgroundColor: "rgba(255,255,255,0.12)" }}>Partnerships</span>
            </div>
            <h1 className="mb-6 text-white uppercase" style={{ fontFamily: H, fontWeight: 800, lineHeight: 1.05 }}>
              SEPCO Industries Signs Strategic MoU with Bioko Consulting at MSGBC Oil, Gas &amp; Power 2025
            </h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Calendar size={13} className="text-white/40" />
                <span className="text-sm text-white/60" style={{ fontFamily: F }}>December 12, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-white/40" />
                <span className="text-sm text-white/60" style={{ fontFamily: F }}>2 min read</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-24">
        <FadeIn className="pt-8">
          <p className="mb-10 border-l-4 border-[#034e7c] bg-[#f8fafc] px-7 py-6 text-xl italic leading-relaxed text-[#455467]" style={{ fontFamily: F }}>
            On 12 December 2025, SEPCO Industries officially signed a strategic Memorandum of Understanding (MoU) with Bioko Consulting during MSGBC Oil, Gas &amp; Power 2025 in Dakar, strengthening collaboration across the African energy sector.
          </p>

          <div className="space-y-6 text-[1rem] leading-relaxed text-[#374151]" style={{ fontFamily: F, lineHeight: 1.8 }}>
            <p>
              On 12 December 2025, and on the sidelines of MSGBC Oil, Gas &amp; Power 2025 held in Dakar, SEPCO Industries officially signed a strategic Memorandum of Understanding (MoU) with Bioko Consulting, through its Energy to Africa initiative.
            </p>
            <p>
              This partnership strengthens collaboration in key areas including logistics, local content development, and regional integration, supporting the development of energy projects across the MSGBC basin and beyond.
            </p>
            <p>
              By aligning strategic vision with strong local industrial capabilities, the agreement reinforces SEPCO Industries&apos; commitment to delivering reliable, compliant, and internationally aligned solutions for the African energy sector.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-2 border-b border-black/[0.07] pb-10">
            {["Strategic Partnership", "Bioko Consulting", "MSGBC 2025", "Energy to Africa", "Local Content"].map((tag) => (
              <span key={tag} className="border border-black/10 px-3 py-1 text-xs text-[#64748b]" style={{ fontFamily: F }}>
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <section className="mt-14" aria-labelledby="mou-gallery-heading">
            <h2 id="mou-gallery-heading" className="mb-8 uppercase text-[#034e7c]" style={{ fontFamily: H, fontWeight: 800, fontSize: "2rem" }}>
              Media Gallery
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {gallery.map((item) => (
                <div key={item.alt} className="aspect-[4/3] overflow-hidden bg-[#f1f5f9]">
                  <ImageWithFallback src={item.img} alt={item.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16 flex items-center justify-between border-t border-black/[0.07] pt-8">
            <Link to="/news" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#034e7c] transition-all hover:gap-3" style={{ fontFamily: F, fontWeight: 600 }}>
              <ArrowLeft size={14} /> Back to News
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#034e7c] px-6 py-3 text-sm uppercase tracking-wider text-white" style={{ fontFamily: F, fontWeight: 600 }}>
              Contact Us
            </Link>
          </div>
        </FadeIn>
      </article>
    </div>
  );
}
