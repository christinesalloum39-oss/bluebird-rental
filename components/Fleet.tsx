"use client";
import { useState, useRef, useEffect, type TouchEvent } from "react";
import { useRouter } from "next/navigation";

const CARS = [
  { id:0, name:"Mercedes S-Class",  type:"Flagship Sedan",  img:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=700&q=85", doors:4, pax:5, trans:"Auto" },
  { id:1, name:"BMW 7 Series",      type:"Executive Sedan", img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=700&q=85",    doors:4, pax:5, trans:"Auto" },
  { id:2, name:"Audi Q8",           type:"Luxury SUV",      img:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=700&q=85", doors:5, pax:5, trans:"Auto" },
  { id:3, name:"Range Rover HSE",   type:"Premium 4×4",     img:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=700&q=85", doors:5, pax:5, trans:"Auto" },
  { id:4, name:"Porsche Cayenne",   type:"Sport SUV",       img:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=85", doors:5, pax:5, trans:"Auto" },
  { id:5, name:"Mercedes GLE",      type:"Luxury SUV",      img:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=700&q=85", doors:5, pax:7, trans:"Auto" },
];

export default function Fleet() {
  const [cur, setCur] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); // safe mobile-first default
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const router = useRouter();

  // Swipe state
  const touchStartX = useRef(0);
  const touchDeltaX  = useRef(0);
  const isDragging   = useRef(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };
    update();
    setMounted(true);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => { setCur(0); }, [visibleCount]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const max = Math.max(0, CARS.length - visibleCount);
  const gapPx = 16;
  const cardWidth = `calc((100% - ${(visibleCount - 1) * gapPx}px) / ${visibleCount})`;

  const goPrev = () => setCur(c => Math.max(0, c - 1));
  const goNext = () => setCur(c => Math.min(max, c + 1));

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    isDragging.current = true;
  };
  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const threshold = 40; // px swipe needed to trigger a slide change
    if (touchDeltaX.current < -threshold) goNext();
    else if (touchDeltaX.current > threshold) goPrev();
    touchDeltaX.current = 0;
  };

  return (
    <section ref={ref} id="fleet" className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">

        <div className="flex items-end justify-between mb-8 sm:mb-10 reveal">
          <div>
            <div className="mb-3"><span className="eyebrow-bb">Our Fleet</span></div>
            <h2 className="font-barlow font-black text-ink leading-[.92] tracking-tight"
              style={{ fontSize: "clamp(1.8rem,5vw,5rem)" }}>
              PREMIUM VEHICLES<br/>
              <span className="text-purple-grad">FOR EVERY JOURNEY</span>
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-4 pb-2">
            <span className="font-barlow font-black text-ink text-3xl">{String(cur + 1).padStart(2, "0")}</span>
            <div className="w-12 h-px bg-purple-200"/>
            <span className="font-barlow text-lg text-ink/30">{String(CARS.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div
          className="overflow-hidden reveal touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          <div
            className={mounted ? "flex gap-4 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]" : "flex gap-4"}
            style={{ transform: `translateX(calc(-${cur} * (${cardWidth} + ${gapPx}px)))` }}>
            {CARS.map((car, i) => (
              <div
                key={car.name}
                className="flex-shrink-0 rounded-2xl overflow-hidden bg-white"
                style={{
                  width: cardWidth,
                  minWidth: cardWidth,
                  maxWidth: cardWidth,
                  border: i === cur ? "1.5px solid #7C3AED" : "1px solid rgba(107,33,168,.1)",
                  boxShadow: i === cur
                    ? "0 20px 50px rgba(107,33,168,.15)"
                    : "0 2px 12px rgba(107,33,168,.05)",
                }}>
                <div className="relative overflow-hidden" style={{ height: 180 }}>
                  <img src={car.img} alt={car.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(26,26,46,.5) 0%,transparent 60%)" }} />
                  <div className="absolute top-3 left-3">
                    <span className="text-[.58rem] font-[600] tracking-[.12em] uppercase px-2.5 py-1 rounded-full bg-white/90 text-purple-DEFAULT border border-purple-100"
                      style={{ backdropFilter: "blur(8px)" }}>
                      {car.type}
                    </span>
                  </div>
                  {i === cur && <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-purple-500 animate-pulse" />}
                </div>

                <div className="px-4 pb-4 pt-3">
                  <h3 className="font-barlow font-black text-ink text-[1.05rem] tracking-tight mb-3 uppercase">
                    {car.name}
                  </h3>
                  <div className="flex flex-col gap-1.5 pb-3 mb-3 border-b border-purple-50">
                    <div className="flex justify-between items-center">
                      <span className="text-[.72rem] font-[300] text-ink/40">Doors</span>
                      <span className="text-[.72rem] font-[600] text-ink/70">{car.doors}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[.72rem] font-[300] text-ink/40">Passengers</span>
                      <span className="text-[.72rem] font-[600] text-ink/70">{car.pax}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[.72rem] font-[300] text-ink/40">Transmission</span>
                      <span className="text-[.72rem] font-[600] text-ink/70">{car.trans}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => router.push("/book")}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-[.75rem] font-[600] tracking-wide uppercase transition-all duration-200 hover:brightness-110"
                    style={{ background: "linear-gradient(135deg,#6B21A8,#7C3AED)" }}>
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 reveal">
          <a href="/fleet" className="btn-primary">
            <span className="lbl"><i className="fa-solid fa-car-side mr-2 text-xs"></i>View Full Fleet</span>
            <span className="ico"><i className="fa-solid fa-arrow-right text-sm"></i></span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8 reveal">
          <button
            onClick={goPrev}
            disabled={cur === 0}
            className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200"
            style={{
              borderColor: cur === 0 ? "#E9D5FF" : "#7C3AED",
              color: cur === 0 ? "#E9D5FF" : "#7C3AED",
              cursor: cur === 0 ? "not-allowed" : "pointer",
            }}>
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCur(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === cur ? "22px" : "9px",
                  height: "9px",
                  background: i === cur ? "linear-gradient(135deg,#6B21A8,#7C3AED)" : "rgba(107,33,168,.2)",
                }}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={cur === max}
            className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200"
            style={{
              borderColor: cur === max ? "#E9D5FF" : "#7C3AED",
              color: cur === max ? "#E9D5FF" : "#7C3AED",
              cursor: cur === max ? "not-allowed" : "pointer",
            }}>
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
