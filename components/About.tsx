"use client";
import { useEffect, useRef } from "react";

const FEATS = [
  { icon:"🎁", title:"Loyalty Rewards on Every Rental",   desc:"Earn prestige points with every journey. Redeem for upgrades, priority reservations, and exclusive member privileges." },
  { icon:"💎", title:"Transparent Pricing, No Surprises", desc:"The price you see is the price you pay. Full breakdown before you confirm — every time, without exception." },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  useEffect(()=>{
    const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.1});
    ref.current?.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
    return()=>obs.disconnect();
  },[]);

  return (
    <section ref={ref} id="about" className="py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Visual */}
          <div className="reveal relative" style={{minHeight:520}}>
            <div className="absolute left-0 top-8 w-[360px] h-[360px] rounded-full overflow-hidden shadow-2xl shadow-purple-200"
              style={{border:"3px solid rgba(107,33,168,.15)"}}>
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80" alt="Luxury car" className="w-full h-full object-cover"/>
              <div className="absolute inset-0" style={{background:"linear-gradient(145deg,rgba(107,33,168,.08),transparent)"}}/>
            </div>
            <div className="absolute right-4 bottom-4 w-[240px] h-[240px] rounded-full overflow-hidden shadow-xl z-10"
              style={{border:"3px solid rgba(107,33,168,.12)"}}>
              <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&q=80" alt="Car interior" className="w-full h-full object-cover"/>
            </div>
            <div className="absolute top-2 right-20 text-4xl select-none" style={{color:"rgba(107,33,168,.15)",fontFamily:"'Cormorant Garamond',serif"}}>◆</div>
            <div className="absolute bottom-0 left-32 z-20 rounded-2xl px-7 py-5 text-center bg-white shadow-xl"
              style={{border:"1px solid rgba(107,33,168,.12)"}}>
              <div className="font-barlow font-black text-ink text-4xl leading-none">10<span className="text-purple-grad">+</span></div>
              <div className="mt-1 text-[.6rem] tracking-[.2em] uppercase" style={{color:"rgba(107,33,168,.5)",fontFamily:"'Cormorant Garamond',serif"}}>Years of Service</div>
            </div>
            <div className="absolute top-0 right-0 z-20 rounded-full px-4 py-2 flex items-center gap-2 bg-white shadow-lg"
              style={{border:"1px solid rgba(107,33,168,.1)"}}>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
              <span className="text-[.7rem] font-[400] text-ink/50">24/7 Support</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="reveal mb-6"><span className="eyebrow-bb">About Us</span></div>
            <h2 className="reveal d1 font-barlow font-black text-ink leading-[.92] tracking-tight mb-2"
              style={{fontSize:"clamp(2.2rem,4vw,3.6rem)"}}>
              YOUR TRUSTED PARTNER IN
            </h2>
            <h2 className="reveal d1 font-barlow font-black leading-[.92] tracking-tight mb-6 text-purple-grad"
              style={{fontSize:"clamp(2.2rem,4vw,3.6rem)"}}>
              RELIABLE CAR RENTAL
            </h2>
            <div className="w-12 h-px mb-7 reveal d2"
              style={{background:"linear-gradient(90deg,#6B21A8,transparent)"}}/>
            <p className="reveal d2 font-[300] leading-[1.9] mb-10 max-w-[480px]"
              style={{color:"rgba(26,26,46,.5)",fontSize:".95rem",fontFamily:"'Cormorant Garamond',serif",letterSpacing:".03em"}}>
              At BlueBird, we believe every journey deserves a vehicle worthy of the occasion. No compromises, no fine print — simply impeccable service.
            </p>

            <div className="reveal d3 flex flex-col border-t border-purple-50">
              {FEATS.map(f=>(
                <div key={f.title} className="py-5 group border-b border-purple-50">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-1 h-4 rounded-full shrink-0" style={{background:"linear-gradient(135deg,#6B21A8,#7C3AED)"}}/>
                    <h4 className="font-[600] text-[.9rem] text-ink group-hover:text-purple-DEFAULT transition-colors">{f.title}</h4>
                  </div>
                  <p className="text-[.8rem] leading-[1.7] font-[300] text-ink/40 pl-3.5">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="reveal d4 mt-8">
              <a href="/contact" className="btn-primary">
                <span className="lbl">Contact Us</span>
                <span className="ico"><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/></svg></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
