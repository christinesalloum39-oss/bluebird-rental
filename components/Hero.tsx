"use client";
import { useEffect, useRef } from "react";
import BookingWidget from "./BookingWidget";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const ref      = useRef<HTMLElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
    ref.current?.querySelectorAll(".rev").forEach((el, i) => {
      setTimeout(() => el.classList.add("in"), 300 + i * 180);
    });
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">

      {/* Fallback car photo */}
      <div className="absolute inset-0 z-0"
        style={{ backgroundImage:"url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=90')", backgroundSize:"cover", backgroundPosition:"center 40%", filter:"brightness(.35) contrast(1.05) saturate(.7)" }}/>

      {/* Local video */}
      <video ref={videoRef} autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover z-[1]"
        style={{ filter:"brightness(.38) contrast(1.05) saturate(.7)" }}>
        <source src="/car.mp4" type="video/mp4"/>
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 z-[2] pointer-events-none"
        style={{ background:"linear-gradient(to right,rgba(18,5,40,.95) 0%,rgba(18,5,40,.75) 45%,rgba(18,5,40,.15) 100%)" }}/>
      <div className="absolute inset-0 z-[2] pointer-events-none"
        style={{ background:"linear-gradient(to top,rgba(18,5,40,.7) 0%,transparent 40%)" }}/>
      <div className="absolute top-0 left-0 right-0 h-32 z-[2] pointer-events-none"
        style={{ background:"linear-gradient(to bottom,rgba(18,5,40,.6),transparent)" }}/>
      <div className="absolute top-0 left-0 w-[600px] h-[600px] z-[2] pointer-events-none"
        style={{ background:"radial-gradient(ellipse at 0 0,rgba(107,33,168,.18),transparent 60%)" }}/>

      {/* Content — two column: text left, widget right */}
      <div className="relative z-[3] w-full max-w-[1320px] mx-auto px-4 sm:px-8 pt-24 pb-12 overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_540px] gap-8 lg:gap-12 items-center">

          {/* LEFT — headline + stats */}
          <div className="min-w-0 w-full">

            <div className="rev reveal mb-7">
              <span className="eyebrow-dark">Premium Car Rental Lebanon</span>
            </div>

            <h1 className="rev reveal d1 font-barlow font-black text-white leading-[.88] mb-6 break-words"
              style={{ fontSize:"clamp(2.4rem,5.2vw,5rem)", letterSpacing:"-2px", textTransform:"uppercase" }}>
              DRIVE<br/>EVERY<br/>ROAD WITH<br/>
              <span style={{ background:"linear-gradient(135deg,#A855F7,#C084FC)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                CONFIDENCE
              </span>
            </h1>

            <div className="rev reveal d2 mb-6">
              <div className="w-12 h-px" style={{ background:"linear-gradient(90deg,#8B5CF6,transparent)" }}/>
            </div>

            <p className="rev reveal d2 mb-10 max-w-[400px]"
              style={{ fontSize:".95rem", fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontStyle:"italic", color:"rgba(255,255,255,.5)", lineHeight:1.85, letterSpacing:".04em" }}>
              Premium vehicles, white-glove service, and loyalty rewards that honour every kilometre.
            </p>

            <a href="/fleet" className="rev reveal d3 btn-outline-dark inline-flex">
              <span className="lbl">
                <i className="fa-solid fa-car-side mr-2 text-xs"></i>
                Browse Our Fleet
              </span>
              <span className="ico"><i className="fa-solid fa-arrow-right text-sm"></i></span>
            </a>

            {/* Stats */}
            <div className="rev reveal d4 mt-10 sm:mt-12 pt-8 sm:pt-10 flex items-center gap-6 sm:gap-10 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
              style={{ borderTop:"1px solid rgba(168,85,247,.15)" }}>
              {[["500+","Vehicles"],["12K+","Clients"],["4","Locations"],["10+","Years"]].map(([n,l],i) => (
                <div key={l} className="flex items-center gap-6 sm:gap-10 shrink-0">
                  <div>
                    <div className="font-barlow font-black text-white leading-none"
                      style={{ fontSize:"clamp(1.2rem,2vw,2rem)", letterSpacing:"-.02em" }}>
                      {n}<span style={{ color:"#A855F7", fontSize:".6em" }}>.</span>
                    </div>
                    <div className="text-white/30 text-[.55rem] font-[500] tracking-[.14em] uppercase mt-1">{l}</div>
                  </div>
                  {i < 3 && <div className="h-6 sm:h-7 w-px shrink-0" style={{ background:"rgba(168,85,247,.15)" }}/>}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Booking widget always visible */}
          <div className="rev reveal d2 min-w-0 w-full">
            <BookingWidget />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint-mobile-hide absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2">
        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:".55rem", letterSpacing:".28em", textTransform:"uppercase", color:"rgba(168,85,247,.4)" }}>Scroll</div>
        <div className="w-px h-8" style={{ background:"linear-gradient(to bottom,rgba(168,85,247,.35),transparent)" }}/>
      </div>
    </section>
  );
}
