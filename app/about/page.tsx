import type { Metadata } from "next";
export const metadata: Metadata = { title:"About Us – BlueBird Car Rental" };

const stats = [
  { num:"500+", label:"Premium Vehicles" },
  { num:"12K+", label:"Clients Served" },
  { num:"4",    label:"Locations" },
  { num:"10+",  label:"Years of Service" },
];

const values = [
  { icon:"fa-handshake", title:"Integrity",   desc:"We say what we do and do what we say. Full transparency in every interaction — no exceptions." },
  { icon:"fa-star",      title:"Excellence",  desc:"Every vehicle, every interaction, every detail is held to the highest standard we can deliver." },
  { icon:"fa-rotate",    title:"Reliability", desc:"On time, as promised, with the exact vehicle you reserved. Every single time." },
  { icon:"fa-lightbulb", title:"Innovation",  desc:"We continuously refine our service and technology to exceed your expectations tomorrow." },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO BANNER ── */}
      <section className="relative pt-32 pb-24 overflow-hidden"
        style={{ background:"linear-gradient(135deg,#1A1A2E 0%,#2E1065 60%,#4C1D95 100%)" }}>
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[.04] pointer-events-none"
          style={{ backgroundImage:"linear-gradient(rgba(168,85,247,1) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,1) 1px,transparent 1px)", backgroundSize:"60px 60px" }}/>
        {/* Glow orb */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background:"radial-gradient(circle at 100% 0,rgba(139,92,246,.2) 0%,transparent 65%)" }}/>

        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-[.72rem] font-[500] tracking-wide">
            <a href="/" className="text-white/30 hover:text-white/60 transition-colors">Home</a>
            <span className="text-white/20">/</span>
            <span className="text-purple-300">About Us</span>
          </div>

          <p className="eyebrow-dark mb-5">Who We Are</p>

          <h1 className="font-barlow font-black text-white mb-6"
            style={{ fontSize:"clamp(2.8rem,6vw,5.5rem)", letterSpacing:"-1.5px", lineHeight:".92", textTransform:"uppercase" }}>
            BUILDING TRUST<br/>
            <span style={{ background:"linear-gradient(135deg,#A855F7,#C084FC)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              ONE JOURNEY AT A TIME
            </span>
          </h1>

          <p className="text-white/45 max-w-[520px] leading-[1.85] font-[300]"
            style={{ fontSize:"1rem", fontFamily:"'Cormorant Garamond',serif", letterSpacing:".03em" }}>
            A Lebanese company built on the conviction that every journey deserves a vehicle worthy of the occasion — for every client, every time.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-6 mt-14 pt-10"
            style={{ borderTop:"1px solid rgba(168,85,247,.18)" }}>
            {stats.map(s=>(
              <div key={s.label}>
                <div className="font-barlow font-black text-white leading-none mb-1"
                  style={{ fontSize:"clamp(2rem,3.5vw,3rem)", letterSpacing:"-.02em" }}>
                  {s.num}<span style={{ color:"#A855F7" }}>.</span>
                </div>
                <div className="text-white/35 text-[.68rem] font-[600] tracking-[.14em] uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── clean, no emojis ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8">

          <div className="text-center mb-16">
            <p className="eyebrow-bb mb-4">Our Foundation</p>
            <h2 className="font-barlow font-black text-ink"
              style={{ fontSize:"clamp(2rem,4vw,3.2rem)", letterSpacing:"-1px", textTransform:"uppercase", lineHeight:".95" }}>
              The Vision & Mission<br/><span className="text-purple-grad">That Drive Us</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            {/* VISION */}
            <div className="relative rounded-2xl overflow-hidden"
              style={{ background:"#F8F7FF", border:"1px solid rgba(107,33,168,.1)" }}>
              {/* Top accent bar */}
              <div className="h-1 w-full" style={{ background:"linear-gradient(90deg,#6B21A8,#7C3AED,transparent)" }}/>

              <div className="p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background:"linear-gradient(135deg,#6B21A8,#7C3AED)" }}>
                    <i className="fa-solid fa-eye text-white text-sm"></i>
                  </div>
                  <span className="font-[700] text-[.7rem] tracking-[.16em] uppercase text-purple-DEFAULT">Our Vision</span>
                </div>

                <h3 className="font-barlow font-black text-ink mb-4"
                  style={{ fontSize:"clamp(1.6rem,2.5vw,2.2rem)", letterSpacing:"-.5px", textTransform:"uppercase", lineHeight:".95" }}>
                  TO REDEFINE<br/>
                  <span className="text-purple-grad">MOBILITY IN LEBANON</span>
                </h3>

                <div className="w-8 h-px mb-6" style={{ background:"linear-gradient(90deg,#6B21A8,transparent)" }}/>

                <p className="leading-[1.85] font-[300] mb-8 text-ink/50"
                  style={{ fontSize:".95rem", fontFamily:"'Cormorant Garamond',serif", letterSpacing:".02em" }}>
                  We envision a Lebanon where every driver has access to a reliable, premium vehicle with full transparency and complete peace of mind.
                </p>

                <div className="flex flex-col gap-3">
                  {[
                    "A rental experience so exceptional, clients never consider anyone else",
                    "Technology that makes booking and extending rentals effortless",
                    "A nationwide presence that puts BlueBird within reach of everyone",
                  ].map(p=>(
                    <div key={p} className="flex items-start gap-3">
                      <div className="mt-1.5 shrink-0">
                        <i className="fa-solid fa-circle-check text-purple-DEFAULT" style={{ fontSize:".75rem" }}></i>
                      </div>
                      <p className="text-[.85rem] font-[400] leading-[1.65] text-ink/55">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MISSION */}
            <div className="relative rounded-2xl overflow-hidden"
              style={{ background:"linear-gradient(145deg,#6B21A8,#7C3AED)" }}>
              <div className="h-1 w-full" style={{ background:"rgba(255,255,255,.2)" }}/>

              <div className="p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/15">
                    <i className="fa-solid fa-bullseye text-white text-sm"></i>
                  </div>
                  <span className="font-[700] text-[.7rem] tracking-[.16em] uppercase text-white/60">Our Mission</span>
                </div>

                <h3 className="font-barlow font-black text-white mb-4"
                  style={{ fontSize:"clamp(1.6rem,2.5vw,2.2rem)", letterSpacing:"-.5px", textTransform:"uppercase", lineHeight:".95" }}>
                  DELIVERING TRUST,<br/>
                  <span style={{ color:"rgba(255,255,255,.75)" }}>EVERY RENTAL</span>
                </h3>

                <div className="w-8 h-px mb-6 bg-white/25"/>

                <p className="leading-[1.85] font-[300] mb-8 text-white/55"
                  style={{ fontSize:".95rem", fontFamily:"'Cormorant Garamond',serif", letterSpacing:".02em" }}>
                  To provide Lebanon's individuals and businesses with a premium rental experience built on honest pricing, dependable vehicles, and genuine care.
                </p>

                <div className="flex flex-col gap-3">
                  {[
                    "A fleet that is always immaculate, inspected, and road-ready",
                    "Prices that are exactly what you pay — no hidden fees, ever",
                    "Concierge support available 24 hours a day, 7 days a week",
                  ].map(p=>(
                    <div key={p} className="flex items-start gap-3">
                      <div className="mt-1.5 shrink-0">
                        <i className="fa-solid fa-circle-check text-white/60" style={{ fontSize:".75rem" }}></i>
                      </div>
                      <p className="text-[.85rem] font-[400] leading-[1.65] text-white/65">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 bg-[#F8F7FF]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow-bb mb-4">Our Core Values</p>
            <h2 className="font-barlow font-black text-ink"
              style={{ fontSize:"clamp(2rem,4vw,3rem)", letterSpacing:"-1px", textTransform:"uppercase", lineHeight:".95" }}>
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v,i)=>(
              <div key={v.title}
                className="card-lift bg-white rounded-2xl p-7 border border-purple-100 group cursor-default"
                style={{ boxShadow:"0 2px 12px rgba(107,33,168,.05)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                  style={{ background:"linear-gradient(135deg,#6B21A8,#7C3AED)" }}>
                  <i className={`fa-solid ${v.icon} text-white`} style={{ fontSize:".95rem" }}></i>
                </div>
                <h4 className="font-barlow font-black text-ink text-[1.1rem] tracking-[.04em] uppercase mb-2 group-hover:text-purple-DEFAULT transition-colors">{v.title}</h4>
                <p className="text-[.8rem] font-[300] leading-[1.65] text-ink/40">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM CTA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 text-center">
          <h2 className="font-barlow font-black text-ink mb-4"
            style={{ fontSize:"clamp(2rem,4vw,3rem)", letterSpacing:"-1px", textTransform:"uppercase" }}>
            Ready to Drive with <span className="text-purple-grad">Confidence?</span>
          </h2>
          <p className="text-ink/40 font-[300] mb-8 max-w-md mx-auto leading-[1.8]"
            style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1rem" }}>
            Experience the BlueBird difference. Book your vehicle today and discover what premium car rental truly feels like.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/#booking"
              className="flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-white font-barlow font-black text-[.85rem] tracking-[.08em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              style={{ background:"linear-gradient(135deg,#6B21A8,#7C3AED)", boxShadow:"0 8px 24px rgba(107,33,168,.32)", minWidth:"180px" }}>
              <i className="fa-solid fa-car text-xs"></i>
              Book a Rental
            </a>
            <a href="/contact"
              className="flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-barlow font-black text-[.85rem] tracking-[.08em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-50 text-purple-DEFAULT border-2 border-purple-DEFAULT/30 hover:border-purple-DEFAULT bg-white"
              style={{ minWidth:"180px" }}>
              Contact Us
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
