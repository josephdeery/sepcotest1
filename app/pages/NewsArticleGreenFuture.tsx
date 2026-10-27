import { Link } from "react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import imgGallery1 from "../../imports/optimized/news/article_4_-_pic_1.webp";
import imgGallery2 from "../../imports/optimized/news/article_4_-_pic_2.webp";
import imgGallery3 from "../../imports/optimized/news/article_4_-_pic_3.webp";
import imgGallery4 from "../../imports/optimized/news/article_4_-_pic_4.webp";
import imgGallery5 from "../../imports/optimized/news/article_4_-_pic_5.webp";
import imgGallery6 from "../../imports/optimized/news/article_4_-_pic_6.webp";
import imgGallery7 from "../../imports/optimized/news/article_4_-_pic_7.webp";

const F = "Raleway, sans-serif";
const H = "Barlow Condensed, sans-serif";

const gallery = [
  { img: imgGallery1, alt: "Children and SEPCO team members at the Green Future Kids Planting Day" },
  { img: imgGallery2, alt: "Children in Green Future Kids Planting Day caps and shirts" },
  { img: imgGallery3, alt: "Two children celebrating at the Green Future Kids Planting Day" },
  { img: imgGallery4, alt: "SEPCO team member speaking with children before the planting activity" },
  { img: imgGallery5, alt: "Child watering a newly planted tree" },
  { img: imgGallery6, alt: "Child watering a young banana plant" },
  { img: imgGallery7, alt: "Green Future Kids Planting Day sign in the newly planted garden" },
];

export function NewsArticleGreenFuture() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#034e7c] pt-32 pb-16">
        <div className="absolute inset-0 bg-[#023c61]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(3,78,124,0.1),rgba(1,37,64,0.5))]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6">
          <FadeIn>
            <Link to="/news" className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 transition-colors hover:text-white" style={{ fontFamily: F, fontWeight: 600, letterSpacing: "0.12em" }}><ArrowLeft size={12} /> Back to News</Link>
            <div className="mb-5 flex items-center gap-3"><span className="px-2 py-0.5 text-xs text-white/80" style={{ fontFamily: F, fontWeight: 600, backgroundColor: "rgba(255,255,255,0.12)" }}>Community</span></div>
            <h1 className="mb-6 text-white uppercase" style={{ fontFamily: H, fontWeight: 800, lineHeight: 1.05 }}>Green Future, Kids Planting Day</h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2"><Calendar size={13} className="text-white/40" /><span className="text-sm text-white/60" style={{ fontFamily: F }}>November 15, 2025</span></div>
              <div className="flex items-center gap-2"><Clock size={13} className="text-white/40" /><span className="text-sm text-white/60" style={{ fontFamily: F }}>2 min read</span></div>
            </div>
          </FadeIn>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-24">
        <FadeIn className="pt-8">
          <p className="mb-10 border-l-4 border-[#7e8474] bg-[#f8fafc] px-7 py-6 text-xl italic leading-relaxed text-[#455467]" style={{ fontFamily: F }}>Inspiring Environmental Awareness Through Kids Planting Day</p>
          <div className="space-y-6 text-[1rem] leading-relaxed text-[#374151]" style={{ fontFamily: F, lineHeight: 1.8 }}>
            <p>SEPCO Industries is proud to have organized a social community initiative, Kids Planting Day, held on 13 November 2025, as part of its ongoing commitment to social responsibility and environmental sustainability.</p>
            <p>Designed to strengthen ties with the local community and inspire younger generations, this initiative provided children with a meaningful and educational experience centered on the importance of nature and environmental protection. Throughout the day, children had the opportunity to learn about the role of trees, participate in tree-planting activities alongside SEPCO teams, name their plants to create a personal connection, and share a friendly brunch in a warm and engaging atmosphere.</p>
            <p>These activities helped foster a sense of responsibility and care for the environment, while contributing to the creation of greener shared spaces for the community.</p>
            <p>SEPCO Industries extends its sincere appreciation to <strong>Les Ménarée School</strong> for its valuable collaboration and support, which played a key role in the success of this initiative.</p>
            <p>At SEPCO Industries, social responsibility begins with our community, and initiatives such as Kids Planting Day reflect our commitment to nurturing sustainable values and contributing positively to the environments in which we operate.</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-2 border-b border-black/[0.07] pb-10">{["Green Future", "Community", "Environmental Awareness", "Sustainability", "Kids Planting Day"].map((tag) => <span key={tag} className="border border-black/10 px-3 py-1 text-xs text-[#64748b]" style={{ fontFamily: F }}>{tag}</span>)}</div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <section className="mt-14" aria-labelledby="green-future-gallery-heading">
            <h2 id="green-future-gallery-heading" className="mb-8 uppercase text-[#034e7c]" style={{ fontFamily: H, fontWeight: 800, fontSize: "2rem" }}>Media Gallery</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{gallery.map((item) => <div key={item.alt} className="aspect-[4/3] overflow-hidden bg-[#f1f5f9]"><ImageWithFallback src={item.img} alt={item.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" /></div>)}</div>
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
