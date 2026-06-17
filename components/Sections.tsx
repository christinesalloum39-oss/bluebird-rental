"use client";
import { useEffect, useRef } from "react";

const WHY = [
  {n:"01",icon:"⚡",title:"Instant Booking Confirmation",   desc:"Reserve your vehicle in under 2 minutes. Immediate confirmation — no delays, no callbacks required."},
  {n:"02",icon:"🚗",title:"Premium, Well-Maintained Fleet",  desc:"Every vehicle meticulously inspected before each rental. Always immaculate, serviced, and road-ready."},
  {n:"03",icon:"💬",title:"24/7 Concierge Support",         desc:"Roadside assistance or a simple enquiry — our team is available around the clock for you."},
  {n:"04",icon:"💰",title:"Best Price Guarantee",           desc:"Transparent, all-inclusive rates. Find a lower comparable rate and we will match it without question."},
  {n:"05",icon:"📍",title:"Four Premier Locations",         desc:"Branches in Beirut, Jounieh, Tripoli, and Saida — always within reach, wherever you need us."},
  {n:"06",icon:"🎯",title:"Prestige Loyalty Programme",     desc:"Every rental earns prestige points. Redeem for upgrades, free days, and exclusive member benefits."},
];

const WHY_ICON_NAMES = ["bolt", "car", "support", "tag", "pin", "award"];

function WhyIcon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "car") {
    return (
      <svg {...common}>
        <path d="M7 17h10"/>
        <path d="M5 17V11.8L7.1 7c.3-.7 1-1 1.7-1h6.4c.7 0 1.4.4 1.7 1L19 11.8V17"/>
        <path d="M6.5 12h11"/>
        <path d="M7 17v1.2M17 17v1.2"/>
        <path d="M8 14h.01M16 14h.01"/>
      </svg>
    );
  }

  if (name === "support") {
    return (
      <svg {...common}>
        <path d="M4 12a8 8 0 0 1 16 0"/>
        <path d="M5 12v3a2 2 0 0 0 2 2h1v-7H7a2 2 0 0 0-2 2Z"/>
        <path d="M19 12v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z"/>
        <path d="M14 19h-2a3 3 0 0 1-3-3"/>
      </svg>
    );
  }

  if (name === "tag") {
    return (
      <svg {...common}>
        <path d="M20 13.5 13.5 20 4 10.5V4h6.5L20 13.5Z"/>
        <path d="M8 8h.01"/>
        <path d="M11 9.5 14.5 13"/>
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg {...common}>
        <path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"/>
        <circle cx="12" cy="10" r="2.2"/>
      </svg>
    );
  }

  if (name === "award") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="4"/>
        <path d="m8.8 11.1-1.1 8 4.3-2.6 4.3 2.6-1.1-8"/>
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="m13 2-8 12h6l-1 8 9-13h-6l0-7Z"/>
    </svg>
  );
}

export function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  useEffect(()=>{
    const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.1});
    ref.current?.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
    return()=>obs.disconnect();
  },[]);

  return (
    <section ref={ref} id="why" className="py-32 bg-ink" style={{background:"linear-gradient(135deg,#1A1A2E,#2E1065)"}}>
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-16 reveal">
          <div className="mb-6"><span className="eyebrow-dark">Why BlueBird</span></div>
          <h2 className="font-barlow font-black text-white leading-[.92] tracking-tight" style={{fontSize:"clamp(2.4rem,5vw,5rem)"}}>
            WHY <span style={{background:"linear-gradient(135deg,#A855F7,#C084FC)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>CHOOSE US</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY.map((w,i)=>(
            <div key={w.title}
              className={`reveal d${(i%3)+1} group cursor-default rounded-xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10`}
              style={{background:"rgba(255,255,255,.045)",border:"1px solid rgba(255,255,255,.09)"}}>
              <div className="text-[.6rem] font-[700] tracking-[.22em] uppercase mb-5" style={{color:"rgba(192,132,252,.55)"}}>{w.n}</div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-purple-bright transition-all duration-300 group-hover:bg-white group-hover:text-purple-DEFAULT"
                style={{background:"rgba(255,255,255,.06)",border:"1px solid rgba(192,132,252,.2)"}}>
                <WhyIcon name={WHY_ICON_NAMES[i]} />
              </div>
              <h4 className="font-[600] text-[.95rem] text-white mb-3 transition-colors">{w.title}</h4>
              <p className="text-[.8rem] leading-[1.8] font-[300] text-white/45 group-hover:text-white/60 transition-colors">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIS = [
  {init:"KM",name:"Karim M.", loc:"Beirut, Lebanon",           text:"Booked in minutes, car was immaculate, and the team at pickup was extraordinarily professional. This is exactly what a premium experience should feel like."},
  {init:"LH",name:"Lara H.",  loc:"Corporate Client, Jounieh", text:"BlueBird manages our company's entire monthly fleet. Transparent invoicing, zero surprises, and outstanding rates. A genuinely exceptional partner."},
  {init:"RA",name:"Rami A.",  loc:"Tripoli, Lebanon",          text:"When my car went in for service, BlueBird had a replacement within an hour through my insurer. Seamless, professional, and completely stress-free."},
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  useEffect(()=>{
    const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.1});
    ref.current?.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
    return()=>obs.disconnect();
  },[]);

  return (
    <section ref={ref} id="testimonials" className="py-32 bg-[#F8F7FF]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-16 reveal">
          <div className="mb-6"><span className="eyebrow-bb">Client Voices</span></div>
          <h2 className="font-barlow font-black text-ink leading-[.92] tracking-tight" style={{fontSize:"clamp(2.4rem,5vw,5rem)"}}>
            TRUSTED BY <span className="text-purple-grad">THOUSANDS</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIS.map((t,i)=>(
            <div key={t.name}
              className={`reveal d${i+1} group bg-white border border-purple-100 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100 hover:border-purple-200 relative overflow-hidden cursor-default`}>
              <div className="absolute top-4 right-6 font-barlow font-black text-[4.5rem] leading-none select-none pointer-events-none" style={{color:"rgba(107,33,168,.05)"}}>
                "
              </div>
              <div className="flex gap-1 mb-5">
                {Array(5).fill(0).map((_,j)=>(
                  <svg key={j} className="w-3.5 h-3.5" fill="#7C3AED" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-[.9rem] leading-[1.85] font-[300] mb-7 italic text-ink/50"
                style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1rem"}}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-purple-50">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[.78rem] font-[700] text-white shrink-0"
                  style={{background:"linear-gradient(135deg,#6B21A8,#7C3AED)"}}>
                  {t.init}
                </div>
                <div>
                  <div className="font-[600] text-[.88rem] text-ink">{t.name}</div>
                  <div className="text-[.72rem] mt-0.5 text-purple-DEFAULT/50">{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BRANCHES = [
  {name:"Beirut – Downtown",    sub:"Head Office",  hours:"Mon–Sat 8AM–7PM, Sun 9AM–3PM", shortHours:"8AM – 7PM", active:true},
  {name:"Jounieh – Kaslik",     sub:"North Branch", hours:"Mon–Sat 8AM–7PM, Sun 9AM–3PM", shortHours:"8AM – 7PM", active:false},
  {name:"Tripoli – City Centre",sub:"North Branch", hours:"Mon–Sat 8AM–6PM",               shortHours:"8AM – 6PM", active:false},
  {name:"Saida – Highway",      sub:"South Branch", hours:"Mon–Sat 8AM–6PM",               shortHours:"8AM – 6PM", active:false},
];

const BRANCH_MARKERS = [
  {name:"Beirut - Downtown", x:"48%", y:"48%"},
  {name:"Jounieh - Kaslik", x:"53%", y:"35%"},
  {name:"Tripoli - City Centre", x:"53%", y:"12%"},
  {name:"Saida - Highway", x:"42%", y:"78%"},
];

export function MapSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(()=>{
    const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.1});
    ref.current?.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
    return()=>obs.disconnect();
  },[]);

  return (
    <section ref={ref} id="locations" className="py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-16 reveal">
          <div className="mb-6"><span className="eyebrow-bb">Find Us</span></div>
          <h2 className="font-barlow font-black text-ink leading-[.92] tracking-tight" style={{fontSize:"clamp(2.4rem,5vw,5rem)"}}>
            OUR <span className="text-purple-grad">LOCATIONS</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-[1fr_300px] gap-5 reveal d1">
          <div className="relative rounded-2xl overflow-hidden border border-purple-100 shadow-sm" style={{height:460}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424399!2d35.3487!3d33.8547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sLebanon!5e0!3m2!1sen!2slb!4v1700000000000"
              width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              {BRANCH_MARKERS.map(marker=>(
                <div key={marker.name} className="absolute -translate-x-1/2 -translate-y-full" style={{left:marker.x,top:marker.y}}>
                  <div className="relative flex flex-col items-center">
                    <div className="absolute top-2 w-8 h-8 rounded-full bg-red-500/25 animate-ping"/>
                    <div className="relative w-7 h-7 rounded-full bg-red-600 border-[3px] border-white shadow-lg shadow-red-950/25 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-white"/>
                    </div>
                    <div className="w-3 h-3 -mt-1 rotate-45 bg-red-600 border-r-[3px] border-b-[3px] border-white shadow-md"/>
                    <div className="mt-2 rounded-full bg-white/95 px-2.5 py-1 text-[.65rem] font-[700] text-red-700 shadow-sm border border-red-100 whitespace-nowrap">
                      {marker.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {BRANCHES.map(b=>(
              <div key={b.name} className={`rounded-xl p-4 border cursor-pointer transition-all duration-200 hover:-translate-x-1 ${b.active?"border-purple-DEFAULT bg-purple-50":"border-purple-100 bg-[#F8F7FF] hover:border-purple-200"}`}>
                <div className="flex items-center gap-2.5 mb-1">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${b.active?"bg-purple-DEFAULT animate-pulse":"bg-purple-200"}`}/>
                  <span className={`font-[600] text-[.88rem] ${b.active?"text-purple-DEFAULT":"text-ink"}`}>{b.name}</span>
                </div>
                <p className="text-[.72rem] text-ink/35 pl-[18px]">{b.hours}</p>
              </div>
            ))}
            <div className="rounded-xl p-4 mt-1" style={{background:"linear-gradient(135deg,#6B21A8,#7C3AED)",border:"1px solid rgba(107,33,168,.2)"}}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"/>
                <span className="font-[600] text-[.88rem] text-white">24/7 Concierge Support</span>
              </div>
              <p className="text-[.72rem] text-white/50 pl-4">Always here when you need us most</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
