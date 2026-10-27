import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import imgArticleBoardroom from "../../imports/optimized/news/article_1_-_pic_2.webp";
import imgArticleMoU from "../../imports/optimized/news/article_2_-_pic_1.webp";
import imgArticleMSGBC from "../../imports/optimized/news/article_3_-_pic_2.webp";
import imgArticleGreenFuture from "../../imports/optimized/news/article_4_-_pic_1.webp";
import imgArticleSupplyBase from "../../imports/optimized/news/article_7_-_pic_3.webp";
import imgArticleMauritanides from "../../imports/optimized/news/article_5_-_pic_8.webp";
import imgArticleSonatrach from "../../imports/optimized/news/article_6_-_pic_1.webp";
import imgNewsHero from "../../imports/WhatsApp_Image_2026-07-21_at_15.30.38.jpeg";

const ARTICLES = [
  {
    id: "ims-recertification",
    category: "Certification",
    title: "SEPCO Industries Successfully Completes IMS Recertification Audit",
    excerpt:
      "SEPCO Industries is pleased to announce the successful completion of the Group audit for an Integrated Management System (IMS), reaffirming the company's ongoing commitment to operational excellence, quality, safety and environmental responsibility.",
    date: "May 2, 2025",
    readTime: "3 min read",
    img: imgArticleBoardroom,
    featured: true,
    hasPage: true,
  },
  {
    id: "mou-mauritania",
    category: "Partnerships",
    title: "SEPCO Industries Signs Strategic MoU with Bioko Consulting at MSGBC Oil, Gas & Power 2025",
    excerpt:
      "SEPCO Industries has signed a strategic Memorandum of Understanding with Bioko Consulting, strengthening collaboration across the African energy sector.",
    date: "December 12, 2025",
    readTime: "2 min read",
    img: imgArticleMoU,
    featured: false,
    hasPage: true,
  },
  {
    id: "msgc-gold-exhibitor",
    category: "Industry Events",
    title: "SEPCO Industries Participates as Gold Exhibitor at MSGBC Oil, Gas & Power 2025",
    excerpt:
      "SEPCO Industries participated as a Gold Exhibitor at MSGBC Oil, Gas & Power 2025, sharing technical expertise and practical insights with regional industry stakeholders.",
    date: "December 8, 2025",
    readTime: "4 min read",
    img: imgArticleMSGBC,
    featured: false,
    hasPage: true,
  },
  {
    id: "kids-planting-day",
    category: "Community",
    title: "Green Future, Kids Planting Day",
    excerpt:
      "SEPCO Industries brought children and its community together for a hands-on planting day, inspiring environmental awareness and sustainable values.",
    date: "November 15, 2025",
    readTime: "2 min read",
    img: imgArticleGreenFuture,
    featured: false,
    hasPage: true,
  },
  {
    id: "gold-sponsor-mauritania-2025",
    category: "Industry Events",
    title: "SEPCO Industries, Gold Sponsor, at Mauritanides 2025",
    excerpt:
      "As a Gold Sponsor of Mauritanides 2025, SEPCO Industries reaffirmed its commitment to safety, sustainability, and long-term growth across the energy and mining sectors.",
    date: "September 8, 2025",
    readTime: "2 min read",
    img: imgArticleMauritanides,
    featured: false,
    hasPage: true,
  },
  {
    id: "sonatrach-visit",
    category: "Partnerships",
    title: "SONATRACH and SMH Visit SEPCO Industries GTA Logistics Base in Nouakchott",
    excerpt:
      "A SONATRACH and SMH delegation visited SEPCO Industries' GTA logistics base, highlighting its HSE standards, logistics capability, and strategic role in regional gas operations.",
    date: "July 2, 2025",
    readTime: "2 min read",
    img: imgArticleSonatrach,
    featured: false,
    hasPage: true,
  },
  {
    id: "supply-base-inauguration",
    category: "Operations",
    title: "SEPCO Industries Inaugurates Integrated Supply Base at the Port of Nouakchott",
    excerpt:
      "SEPCO Industries has officially inaugurated its Integrated Supply Base, a strategic logistics hub supporting GTA offshore operations and regional energy infrastructure.",
    date: "June 5, 2025",
    readTime: "3 min read",
    img: imgArticleSupplyBase,
    featured: false,
    hasPage: true,
  },
];

const CATEGORIES = ["All", "Certification", "Partnerships", "Industry Events", "Community", "Operations"];

export function News() {
  const [activeCategory, setActiveCategory] = useState("All");
  const isAllArticles = activeCategory === "All";
  const featured = isAllArticles ? ARTICLES.find((article) => article.featured) : undefined;
  const rest = isAllArticles
    ? ARTICLES.filter((article) => !article.featured)
    : ARTICLES.filter((article) => article.category === activeCategory);

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
            backgroundImage: `url(${imgNewsHero})`,
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
                News & Insights
              </span>
            </div>
            <h1
              className="text-white uppercase mb-6 max-w-2xl"
              style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}
            >Intelligence from<br />the field<br /><span style={{ color: "rgba(255,255,255,0.72)" }}>Insights that matter</span></h1>
            <p
              className="max-w-xl leading-relaxed"
              style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}
            >
              Industry analysis, operational insights, and project updates from SEPCO's
              teams on the ground — content designed to help energy operators make better decisions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CATEGORY FILTER (visual) */}
      <section className="bg-white border-b" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-0 py-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className="px-5 py-4 text-xs tracking-widest uppercase whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#034e7c]"
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: activeCategory === cat ? "#7e8474" : "#64748B",
                  background: "none",
                  border: "none",
                  borderBottom: activeCategory === cat ? "2px solid #7e8474" : "2px solid transparent",
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      {featured && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div
                className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
                style={{ border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <div style={{ backgroundColor: "#F1F5F9", minHeight: "400px" }}>
                  <ImageWithFallback
                    src={featured.img}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                    style={{ minHeight: "400px" }}
                  />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="px-2 py-0.5 text-xs"
                      style={{
                        fontFamily: "Raleway, sans-serif",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        backgroundColor: "#eef0ec",
                        color: "#7e8474",
                      }}
                    >
                      Featured
                    </span>
                    <span
                      className="px-2 py-0.5 text-xs"
                      style={{
                        fontFamily: "Raleway, sans-serif",
                        color: "#64748B",
                        backgroundColor: "#F1F5F9",
                      }}
                    >
                      {featured.category}
                    </span>
                  </div>
                  <h2
                    className="uppercase mb-4"
                    style={{
                      fontFamily: "Barlow Condensed, sans-serif",
                      fontWeight: 800,
                      color: "#034e7c",
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      lineHeight: 1.1,
                    }}
                  >
                    <Link to={`/news/${featured.id}`} className="transition-colors hover:text-[#7e8474]">
                      {featured.title}
                    </Link>
                  </h2>
                  <p
                    className="mb-6 leading-relaxed"
                    style={{ fontFamily: "Raleway, sans-serif", color: "#64748B", fontSize: "0.9375rem" }}
                  >
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} style={{ color: "#94A3B8" }} />
                      <span className="text-xs" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8" }}>
                        {featured.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} style={{ color: "#94A3B8" }} />
                      <span className="text-xs" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8" }}>
                        {featured.readTime}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={featured.hasPage ? `/news/${featured.id}` : "#"}
                    className="inline-flex items-center gap-2 text-sm tracking-wider uppercase transition-all duration-200 hover:gap-4 self-start"
                    style={{
                      fontFamily: "Raleway, sans-serif",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      color: "#034e7c",
                    }}
                  >
                    Read Full Article
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ARTICLE GRID */}
      <section style={{ backgroundColor: "#F8FAFC" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <div key={article.id}>
                <div
                  className="relative bg-white overflow-hidden group h-full flex flex-col"
                  style={{ border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  {article.hasPage && (
                    <Link to={`/news/${article.id}`} className="absolute inset-0 z-10" aria-label={`Read ${article.title}`} />
                  )}
                  <div
                    className="aspect-video overflow-hidden"
                    style={{ backgroundColor: "#F1F5F9" }}
                  >
                    <ImageWithFallback
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="px-2 py-0.5 text-xs"
                        style={{
                          fontFamily: "Raleway, sans-serif",
                          color: "#64748B",
                          backgroundColor: "#F1F5F9",
                        }}
                      >
                        {article.category}
                      </span>
                    </div>
                    <h3
                      className="uppercase mb-3 group-hover:text-[#034e7c] transition-colors duration-200"
                      style={{
                        fontFamily: "Barlow Condensed, sans-serif",
                        fontWeight: 800,
                        color: "#034e7c",
                        fontSize: "1.25rem",
                        lineHeight: 1.15,
                      }}
                    >
                      {article.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4 flex-1"
                      style={{ fontFamily: "Raleway, sans-serif", color: "#64748B" }}
                    >
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={11} style={{ color: "#94A3B8" }} />
                          <span className="text-xs" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8" }}>
                            {article.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={11} style={{ color: "#94A3B8" }} />
                          <span className="text-xs" style={{ fontFamily: "Raleway, sans-serif", color: "#94A3B8" }}>
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                      <ArrowRight size={14} style={{ color: "#7e8474" }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER / CTA */}
      <section style={{ background: "linear-gradient(135deg, #034e7c 0%, #1a6e9f 100%)" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2
              className="text-white uppercase mb-4"
              style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}
            >Stay ahead of the field</h2>
            <p
              className="mb-8 max-w-lg mx-auto"
              style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}
            >
              Operational insights, industry analysis, and project updates — direct to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 text-sm"
                style={{
                  fontFamily: "Raleway, sans-serif",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#ffffff",
                  outline: "none",
                }}
              />
              <button
                className="px-6 py-3 text-sm tracking-wider uppercase"
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  backgroundColor: "#034e7c",
                  color: "#ffffff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </div>
            <p
              className="mt-4 text-xs"
              style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.25)" }}
            >
              No spam. Unsubscribe anytime.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
