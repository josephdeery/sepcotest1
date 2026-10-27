import { Link } from "react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import imgGallery1 from "../../imports/optimized/news/article_1_-_pic_1.webp";
import imgGallery2 from "../../imports/optimized/news/article_1_-_pic_2.webp";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const F = "Raleway, sans-serif";
const H = "Barlow Condensed, sans-serif";

export function NewsArticleIMS() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: "#034e7c" }}>
        <div className="absolute inset-0 bg-[#023c61]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(3,78,124,0.1),rgba(1,37,64,0.5))]" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6">
          <FadeIn>
            <Link to="/news" className="inline-flex items-center gap-2 mb-8 text-xs tracking-widest uppercase hover:text-white transition-colors" style={{ fontFamily: F, fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em" }}>
              <ArrowLeft size={12} /> Back to News
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="px-2 py-0.5 text-xs" style={{ fontFamily: F, fontWeight: 600, backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)" }}>Certification</span>
            </div>
            <h1 className="text-white uppercase mb-6" style={{ fontFamily: H, fontWeight: 800, lineHeight: 1.05 }}>
              SEPCO Industries Successfully
              <br />Completes IMS Recertification Audit
            </h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Calendar size={13} style={{ color: "rgba(255,255,255,0.4)" }} />
                <span className="text-sm" style={{ fontFamily: F, color: "rgba(255,255,255,0.5)" }}>May 2, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} style={{ color: "rgba(255,255,255,0.4)" }} />
                <span className="text-sm" style={{ fontFamily: F, color: "rgba(255,255,255,0.5)" }}>3 min read</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="max-w-4xl mx-auto px-6 pb-24">
        <FadeIn className="pt-8">
          {/* Location dateline */}

          {/* Opening */}
          <p className="mb-6 leading-relaxed" style={{ fontFamily: F, color: "#374151", fontSize: "1.0625rem", lineHeight: 1.8 }}>
            SEPCO Industries is pleased to announce the successful completion of the Group audit for an Integrated Management System (IMS), reaffirming the company's ongoing commitment to operational excellence, quality, safety, and environmental responsibility.
          </p>

          {/* Certified standards box */}
          <div className="my-10 p-8" style={{ backgroundColor: "#F8FAFC", borderLeft: "4px solid #034e7c" }}>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ fontFamily: F, fontWeight: 700, color: "#034e7c", letterSpacing: "0.15em" }}>
              Recertification covers the following internationally recognised standards:
            </p>
            <ul className="space-y-3">
              {[
                { code: "ISO 9001:2015", label: "Quality Management" },
                { code: "ISO 14001:2015", label: "Environmental Management" },
                { code: "ISO 45001:2018", label: "Occupational Health & Safety" },
              ].map((s) => (
                <li key={s.code} className="flex items-start gap-4">
                  <span className="text-sm font-bold shrink-0 min-w-[130px]" style={{ fontFamily: F, color: "#034e7c" }}>{s.code}</span>
                  <span className="text-sm" style={{ fontFamily: F, color: "#64748B" }}>– {s.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mb-6 leading-relaxed" style={{ fontFamily: F, color: "#374151", fontSize: "1rem", lineHeight: 1.8 }}>
            Successfully completing recertification reflects SEPCO Industries' continuous efforts to examine and improve its management systems on a constant basis. This milestone is the result of thorough preparation, rigorous assessment, and a dedicated commitment to operational excellence.
          </p>

          <p className="mb-6 leading-relaxed" style={{ fontFamily: F, color: "#374151", fontSize: "1rem", lineHeight: 1.8 }}>
            The recertification further reinforces our integrated approach, incorporating key value areas at the heart of all our operations — Quality Control, Responsible Business Practice, and a sustained focus on health, safety, efficiency, and effectiveness across every service line.
          </p>

          {/* Pull quote */}
          <blockquote className="my-12 py-8 px-10 relative" style={{ backgroundColor: "#034e7c" }}>
            <div className="absolute top-4 left-8 text-6xl leading-none" style={{ color: "rgba(255,255,255,0.15)", fontFamily: H, fontWeight: 800 }}>"</div>
            <p className="relative text-white leading-relaxed" style={{ fontFamily: H, fontWeight: 700, fontSize: "1.4rem", lineHeight: 1.3 }}>
              This recertification highlights our dedication to maintaining the highest standards of quality, environmental responsibility, and operational safety, while remaining focused on facility efficiency and customer satisfaction.
            </p>
            <p className="mt-4 text-sm" style={{ fontFamily: F, color: "rgba(255,255,255,0.5)" }}>
              — SEPCO Industries Management
            </p>
          </blockquote>

          <p className="mb-6 leading-relaxed" style={{ fontFamily: F, color: "#374151", fontSize: "1rem", lineHeight: 1.8 }}>
            This achievement reflects SEPCO's belief that operational excellence extends beyond technical competence and skills to encompass the management and operational systems that support every activity. These systems are actively and continuously maintained to meet the needs of the people and sectors the company serves.
          </p>

          <p className="mb-10 leading-relaxed" style={{ fontFamily: F, color: "#374151", fontSize: "1rem", lineHeight: 1.8 }}>
            The successful IMS recertification further positions SEPCO Industries as a partner of choice for international oil and gas operators across West Africa, offering the assurance of internationally benchmarked quality, environmental, and safety management.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pb-10" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
            {["IMS Certification", "ISO 9001", "ISO 14001", "ISO 45001", "QHSE", "Quality Management"].map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs" style={{ fontFamily: F, color: "#64748B", border: "1px solid rgba(0,0,0,0.1)" }}>
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* MEDIA GALLERY */}
        <FadeIn delay={0.1}>
          <div className="mt-14">
            <h2 className="uppercase mb-8" style={{ fontFamily: H, fontWeight: 800, color: "#034e7c", fontSize: "2rem" }}>
              Media Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { img: imgGallery1, alt: "SEPCO team conducting a site walkthrough in a logistics facility" },
                { img: imgGallery2, alt: "SEPCO team meeting in a boardroom" },
              ].map((item) => (
                <div key={item.alt} className="aspect-video overflow-hidden bg-[#F1F5F9]">
                  <ImageWithFallback src={item.img} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* BACK / MORE ARTICLES */}
        <FadeIn delay={0.15}>
          <div className="mt-16 pt-8 flex items-center justify-between" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
            <Link to="/news" className="inline-flex items-center gap-2 text-sm tracking-wider uppercase hover:gap-3 transition-all" style={{ fontFamily: F, fontWeight: 600, color: "#034e7c" }}>
              <ArrowLeft size={14} /> Back to News
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wider uppercase" style={{ fontFamily: F, fontWeight: 600, backgroundColor: "#034e7c", color: "#ffffff" }}>
              Contact Us
            </Link>
          </div>
        </FadeIn>
      </article>
    </div>
  );
}
