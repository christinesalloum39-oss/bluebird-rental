"use client";
import { useEffect, useRef } from "react";

const SVCS = [
  { icon:"💼", tag:"Enterprise",   title:"Business & Corporate Rentals",    desc:"Dedicated account management, priority fleet allocation, and flexible invoicing for organisations of every size.", featured:false },
  { icon:"🔄", tag:"Fast Track",   title:"Insurance Replacement Vehicles",  desc:"When your vehicle is in service, we respond immediately — coordinated directly with your insurer, zero delay.", featured:true },
  { icon:"✨", tag:"Bespoke",      title:"Extras & Add-Ons",                desc:"Child seats, GPS, additional drivers, roadside assistance. Every detail tailored to your precise requirements.", featured:false },
  { icon:"📅", tag:"Flexible",     title:"Daily, Weekly & Monthly Rentals", desc:"Rates that reward commitment. Whether a single day or an extended arrangement, the perfect plan awaits.", featured:false },
];

const SERVICE_ICON_NAMES = ["briefcase", "shield", "sparkles", "calendar"];

function ServiceIcon({ name }: { name: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 3 19 6v5.2c0 4.6-2.9 7.9-7 9.8-4.1-1.9-7-5.2-7-9.8V6l7-3Z"/>
        <path d="m9.5 12 1.7 1.7 3.5-3.7"/>
      </svg>
    );
  }

  if (name === "sparkles") {
    return (
      <svg {...common}>
        <path d="M12 3l1.5 4.1L17.5 9l-4 1.9L12 15l-1.5-4.1L6.5 9l4-1.9L12 3Z"/>
        <path d="M5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z"/>
        <path d="M19 13l.7 1.8 1.8.7-1.8.7L19 18l-.7-1.8-1.8-.7 1.8-.7L19 13Z"/>
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg {...common}>
        <path d="M7 3v3"/>
        <path d="M17 3v3"/>
        <path d="M4 8h16"/>
        <rect x="4" y="5" width="16" height="16" rx="3"/>
        <path d="M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"/>
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M9 7V6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v1"/>
      <rect x="4" y="7" width="16" height="13" rx="2.5"/>
      <path d="M4 12h16"/>
      <path d="M10 12v1.5h4V12"/>
    </svg>
  );
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  useEffect(()=>{
    const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.08});
    ref.current?.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
    return()=>obs.disconnect();
  },[]);

  return (
    <section ref={ref} id="services" className="py-32 bg-[#F8F7FF]">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="text-center mb-16 reveal">
          <div className="mb-6"><span className="eyebrow-bb">What We Offer</span></div>
          <h2 className="font-barlow font-black text-ink leading-[.92] tracking-tight" style={{fontSize:"clamp(2.4rem,5vw,5rem)"}}>
            EXPLORE OUR WIDE RANGE<br/><span className="text-purple-grad">OF RENTAL SERVICES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
          {SVCS.map((s,i)=>(
            <div key={s.title}
              className={`reveal d${i+1} group relative flex flex-col rounded-2xl p-7 cursor-default overflow-hidden transition-all duration-400 bg-white border border-purple-100 shadow-sm hover:shadow-2xl hover:shadow-purple-200 hover:-translate-y-4 hover:border-transparent`}>
              {/* Purple overlay — only on hover */}
              <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100" style={{background:"linear-gradient(145deg,#6B21A8,#7C3AED)"}}/>

              <span className="relative z-10 self-start text-[.58rem] font-[700] tracking-[.12em] uppercase px-2.5 py-1 rounded-full mb-5 transition-all duration-300 text-purple-DEFAULT bg-purple-50 border border-purple-100 group-hover:text-white/80 group-hover:bg-white/15 group-hover:border-white/10">
                {s.tag}
              </span>

              <div className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-6 transition-all duration-300 bg-purple-50 border border-purple-100 group-hover:bg-white/15 group-hover:border-white/10`}>
                <span className="transition-colors duration-300 text-purple-DEFAULT group-hover:text-white">
                  <ServiceIcon name={SERVICE_ICON_NAMES[i]} />
                </span>
              </div>

              <h3 className={`relative z-10 font-barlow font-[800] text-[1.2rem] leading-tight mb-3 uppercase tracking-[.01em] transition-colors duration-300 ${"text-ink group-hover:text-white"}`}>{s.title}</h3>
              <p className={`relative z-10 text-[.8rem] leading-[1.75] font-[300] flex-1 mb-8 transition-colors duration-300 ${"text-ink/40 group-hover:text-white/65"}`}>{s.desc}</p>

              <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                s.featured
                  ? "bg-white/15 text-white group-hover:bg-white group-hover:text-purple-DEFAULT"
                  : "bg-purple-50 border border-purple-100 text-purple-DEFAULT group-hover:bg-white group-hover:border-white group-hover:text-purple-DEFAULT"
              }`}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <p className="font-[300] leading-[1.85] max-w-md mx-auto mb-7 text-ink/40"
            style={{fontSize:".9rem",fontFamily:"'Cormorant Garamond',serif",letterSpacing:".03em"}}>
            Discover our complete range of services, designed to elevate every journey.
          </p>
          <a href="#services" className="btn-primary">
            <span className="lbl">View All Services</span>
            <span className="ico"><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/></svg></span>
          </a>
        </div>
      </div>
    </section>
  );
}
