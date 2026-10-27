import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "../components/FadeIn";

const SERVICE_OPTIONS = [
  "Integrated Supply Base & Port Operations",
  "Logistics & Customs Clearance",
  "Mobile Plant & Oilfield Equipment",
  "Tank Cleaning",
  "Provision & Handling of Chemicals",
  "Offshore Cargo Carrying Units (DNV)",
  "Marine Support Services",
  "Waste Management",
  "Multiple Services / General Enquiry",
];

const ENTRY_POINTS = [
  {
    icon: "🚢",
    title: "Marine & Port Operations",
    desc: "Port call management, ISPS operations, crew changes, vessel coordination.",
    link: "Marine support enquiry",
  },
  {
    icon: "🚛",
    title: "Logistics & Supply Chain",
    desc: "Import/export logistics, customs clearance, ISO tank management.",
    link: "Logistics enquiry",
  },
  {
    icon: "♻️",
    title: "Waste Management",
    desc: "Offshore waste collection, classification, export, and certified disposal.",
    link: "Waste management enquiry",
  },
  {
    icon: "⚙️",
    title: "Equipment & Supply Base",
    desc: "Mobile plant, oilfield equipment, supply base management.",
    link: "Equipment enquiry",
  },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    scope: "",
    timeline: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "9ec8af1f-f3df-4b8b-b54a-3bcc23a55e6a",
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Submission failed. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

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
            backgroundImage: `url(https://images.unsplash.com/photo-1661263989552-d82526d03b0f?w=1920&h=900&fit=crop&auto=format)`,
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
                Get in Touch
              </span>
            </div>
            <h1
              className="text-white uppercase mb-6 max-w-2xl"
              style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}
            >Let's discuss<br />how we support<br /><span style={{ color: "rgba(255,255,255,0.72)" }}>your operations</span></h1>
            <p
              className="max-w-xl leading-relaxed"
              style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}
            >
              Our team will respond within 24 hours with a tailored assessment of how
              SEPCO can support your specific operational requirements.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ENTRY POINTS */}
      

      {/* FORM + INFO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
                  >
                    Send an Enquiry
                  </span>
                </div>

                {submitted ? (
                  <div
                    className="p-10 text-center"
                    style={{ backgroundColor: "#F8FAFC", border: "1px solid rgba(0,0,0,0.07)" }}
                  >
                    <CheckCircle2 size={40} className="mx-auto mb-4" style={{ color: "#7e8474" }} />
                    <h3
                      className="uppercase mb-3"
                      style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c", fontSize: "2rem" }}
                    >
                      Enquiry Received
                    </h3>
                    <p style={{ fontFamily: "Raleway, sans-serif", color: "#64748B" }}>
                      Thank you. Our operations team will review your requirements and respond
                      within 24 hours with a tailored assessment.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {[
                        { name: "name", label: "Full Name", type: "text", placeholder: "John Smith" },
                        { name: "company", label: "Company / Organisation", type: "text", placeholder: "Energy Operator Ltd." },
                        { name: "email", label: "Email Address", type: "email", placeholder: "j.smith@company.com" },
                        { name: "phone", label: "Phone Number", type: "tel", placeholder: "+1 000 000 0000" },
                      ].map((field) => (
                        <div key={field.name}>
                          <label
                            className="block text-xs tracking-widest uppercase mb-2"
                            style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#374151", letterSpacing: "0.1em" }}
                          >
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={(form as any)[field.name]}
                            onChange={handleChange}
                            required={field.name === "name" || field.name === "email"}
                            className="w-full px-4 py-3 text-sm transition-all duration-200"
                            style={{
                              fontFamily: "Raleway, sans-serif",
                              backgroundColor: "#F8FAFC",
                              border: "1px solid rgba(0,0,0,0.1)",
                              color: "#034e7c",
                              outline: "none",
                            }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "#7e8474")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)")}
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label
                        className="block text-xs tracking-widest uppercase mb-2"
                        style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#374151", letterSpacing: "0.1em" }}
                      >
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm"
                        style={{
                          fontFamily: "Raleway, sans-serif",
                          backgroundColor: "#F8FAFC",
                          border: "1px solid rgba(0,0,0,0.1)",
                          color: form.service ? "#034e7c" : "#94A3B8",
                          outline: "none",
                        }}
                      >
                        <option value="" disabled>Select a service area</option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          className="block text-xs tracking-widest uppercase mb-2"
                          style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#374151", letterSpacing: "0.1em" }}
                        >
                          Project Scope
                        </label>
                        <select
                          name="scope"
                          value={form.scope}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm"
                          style={{
                            fontFamily: "Raleway, sans-serif",
                            backgroundColor: "#F8FAFC",
                            border: "1px solid rgba(0,0,0,0.1)",
                            color: form.scope ? "#034e7c" : "#94A3B8",
                            outline: "none",
                          }}
                        >
                          <option value="" disabled>Project size</option>
                          <option>Single operation / short-term</option>
                          <option>Ongoing contract (1–2 years)</option>
                          <option>Long-term partnership (3+ years)</option>
                          <option>Framework agreement</option>
                          <option>Not yet defined</option>
                        </select>
                      </div>
                      <div>
                        <label
                          className="block text-xs tracking-widest uppercase mb-2"
                          style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#374151", letterSpacing: "0.1em" }}
                        >
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={form.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm"
                          style={{
                            fontFamily: "Raleway, sans-serif",
                            backgroundColor: "#F8FAFC",
                            border: "1px solid rgba(0,0,0,0.1)",
                            color: form.timeline ? "#034e7c" : "#94A3B8",
                            outline: "none",
                          }}
                        >
                          <option value="" disabled>When do you need this?</option>
                          <option>Immediately / urgent</option>
                          <option>Within 1–3 months</option>
                          <option>3–6 months</option>
                          <option>6+ months / planning stage</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-xs tracking-widest uppercase mb-2"
                        style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#374151", letterSpacing: "0.1em" }}
                      >
                        Tell Us About Your Requirements
                      </label>
                      <textarea
                        name="message"
                        placeholder="Describe your operational challenge or project requirements. The more detail you provide, the more tailored our response will be."
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 text-sm resize-none"
                        style={{
                          fontFamily: "Raleway, sans-serif",
                          backgroundColor: "#F8FAFC",
                          border: "1px solid rgba(0,0,0,0.1)",
                          color: "#034e7c",
                          outline: "none",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#7e8474")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)")}
                      />
                    </div>

                    {error && (
                      <p className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#dc2626" }}>
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase transition-all duration-200"
                      style={{
                        fontFamily: "Raleway, sans-serif",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        backgroundColor: submitting ? "#7e8474" : "#034e7c",
                        color: "#ffffff",
                        border: "none",
                        cursor: submitting ? "not-allowed" : "pointer",
                      }}
                      onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = "#023d63"; }}
                      onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = "#034e7c"; }}
                    >
                      {submitting ? "Sending…" : "Submit Enquiry"}
                      {!submitting && <ArrowRight size={16} />}
                    </button>
                  </form>
                )}
              </FadeIn>
            </div>

            {/* Sidebar Info */}
            <div>
              <FadeIn delay={0.1} direction="right">
                <div className="space-y-8">
                  {/* Trust signals */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
                      <span
                        className="text-xs tracking-widest uppercase"
                        style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
                      >
                        What to Expect
                      </span>
                    </div>
                    <div className="space-y-4">
                      {[
                        { icon: <Clock size={14} />, text: "Response within 24 hours — usually same business day." },
                        { icon: <CheckCircle2 size={14} />, text: "Tailored assessment of your specific requirements, not a generic brochure." },
                        { icon: <CheckCircle2 size={14} />, text: "Full confidentiality — your enquiry stays between you and our team." },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="shrink-0 mt-0.5" style={{ color: "#7e8474" }}>
                            {item.icon}
                          </span>
                          <span className="text-sm" style={{ fontFamily: "Raleway, sans-serif", color: "#374151" }}>
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct contacts */}
                  <div
                    className="p-6"
                    style={{ backgroundColor: "#034e7c" }}
                  >
                    <p
                      className="text-xs tracking-widest uppercase mb-5"
                      style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.65)", letterSpacing: "0.15em" }}
                    >
                      Our Offices
                    </p>
                    <div className="space-y-5">
                      {/* Mauritania */}
                      <div>
                        <p className="text-xs mb-2" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700, color: "#ffffff", letterSpacing: "0.05em" }}>
                          Mauritania — Headquarters
                        </p>
                        <div className="space-y-2 pl-0">
                          <div className="flex items-start gap-3">
                            <MapPin size={13} className="shrink-0 mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }} />
                            <p className="text-xs leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.5)" }}>
                              SOCOGIM No. 33, BP 5336<br />Nouakchott, Mauritania
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone size={13} style={{ color: "rgba(255,255,255,0.5)" }} />
                            <a href="tel:+22245255013" className="text-xs hover:text-white transition-colors" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.5)" }}>
                              +222 45 25 50 13
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Senegal */}
                      <div>
                        <p className="text-xs mb-2" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700, color: "#ffffff", letterSpacing: "0.05em" }}>
                          Sénégal
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-3">
                            <MapPin size={13} className="shrink-0 mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }} />
                            <p className="text-xs leading-relaxed" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.5)" }}>
                              Domaine Industriel de Diamniadio<br />Dakar, Sénégal
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone size={13} style={{ color: "rgba(255,255,255,0.5)" }} />
                            <a href="tel:+221339262292" className="text-xs hover:text-white transition-colors" style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.5)" }}>
                              +221 33 926 22 92
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="pt-1 space-y-2 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                      <div className="flex items-center gap-3 pt-2">
                        <Mail size={13} style={{ color: "rgba(255,255,255,0.5)" }} />
                        <div>
                          <p className="text-xs mb-0.5" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#ffffff" }}>
                            General Enquiries
                          </p>
                          <a
                            href="mailto:contact@sepco-ogi.com"
                            className="text-xs hover:text-white transition-colors"
                            style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.5)" }}
                          >
                            contact@sepco-ogi.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={13} style={{ color: "rgba(255,255,255,0.5)" }} />
                        <div>
                          <p className="text-xs mb-0.5" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#ffffff" }}>
                            Recruitment
                          </p>
                          <a
                            href="mailto:recrutement@sepco-ogi.com"
                            className="text-xs hover:text-white transition-colors"
                            style={{ fontFamily: "Raleway, sans-serif", color: "rgba(255,255,255,0.5)" }}
                          >
                            recrutement@sepco-ogi.com
                          </a>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>

                  {/* Credibility */}
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase mb-4"
                      style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#94A3B8", letterSpacing: "0.15em" }}
                    >
                      Trusted By
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Kosmos", "TotalEnergies", "BP", "Halliburton", "Petronas", "Schlumberger"].map((client) => (
                        <span
                          key={client}
                          className="px-2 py-1 text-xs"
                          style={{
                            fontFamily: "Raleway, sans-serif",
                            color: "#64748B",
                            border: "1px solid rgba(0,0,0,0.1)",
                          }}
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
