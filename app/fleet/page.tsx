"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CATEGORIES = ["All", "Sedan", "SUV", "Luxury", "Sport"];

const CARS = [
  { id:0, name:"Mercedes S-Class",  type:"Sedan",  category:"Luxury", img:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=85", doors:4, pax:5, trans:"Auto",  engine:"3.0L V6",  fuel:"Petrol" },
  { id:1, name:"BMW 7 Series",      type:"Sedan",  category:"Sedan",  img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=85",    doors:4, pax:5, trans:"Auto",  engine:"3.0L B6",  fuel:"Petrol" },
  { id:2, name:"Audi Q8",           type:"SUV",    category:"SUV",    img:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=85",  doors:5, pax:5, trans:"Auto",  engine:"3.0L V6",  fuel:"Petrol" },
  { id:3, name:"Range Rover HSE",   type:"SUV",    category:"SUV",    img:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=85",  doors:5, pax:5, trans:"Auto",  engine:"3.0L D6",  fuel:"Diesel" },
  { id:4, name:"Porsche Cayenne",   type:"Sport",  category:"Sport",  img:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=85",  doors:5, pax:5, trans:"Auto",  engine:"3.6L V6",  fuel:"Petrol" },
  { id:5, name:"Mercedes GLE",      type:"SUV",    category:"SUV",    img:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=85",  doors:5, pax:7, trans:"Auto",  engine:"3.0L V6",  fuel:"Petrol" },
  { id:6, name:"BMW 5 Series",      type:"Sedan",  category:"Sedan",  img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=85",    doors:4, pax:5, trans:"Auto",  engine:"2.0L B4",  fuel:"Petrol" },
  { id:7, name:"Audi A8",           type:"Sedan",  category:"Luxury", img:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=85", doors:4, pax:5, trans:"Auto",  engine:"4.0L V8",  fuel:"Petrol" },
];

export default function FleetPage() {
  const [active, setActive] = useState("All");
  const [hoveredId, setHoveredId] = useState<number|null>(null);
  const router = useRouter();

  const filtered = active==="All" ? CARS : CARS.filter(c=>c.category===active);

  return (
    <div className="min-h-screen bg-[#F8F7FF]">

      {/* ── HEADER ── */}
      <section className="relative pt-28 pb-16 overflow-hidden"
        style={{ background:"linear-gradient(135deg,#1A1A2E 0%,#2E1065 60%,#4C1D95 100%)" }}>
        <div className="absolute inset-0 opacity-[.04] pointer-events-none"
          style={{ backgroundImage:"linear-gradient(rgba(168,85,247,1) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,1) 1px,transparent 1px)", backgroundSize:"60px 60px" }}/>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background:"radial-gradient(circle at 100% 0,rgba(139,92,246,.2),transparent 65%)" }}/>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative">
          <div className="flex items-center gap-2 mb-6 text-[.72rem] font-[500]">
            <a href="/" className="text-white/30 hover:text-white/60 transition-colors">Home</a>
            <span className="text-white/20">/</span>
            <span className="text-purple-300">Our Fleet</span>
          </div>

          <p className="eyebrow-dark mb-4">Premium Vehicles</p>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-barlow font-black text-white mb-4"
                style={{ fontSize:"clamp(2.2rem,6vw,5.5rem)", letterSpacing:"-1.5px", lineHeight:".92", textTransform:"uppercase" }}>
                CHOOSE YOUR<br/>
                <span style={{ background:"linear-gradient(135deg,#A855F7,#C084FC)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  PERFECT VEHICLE
                </span>
              </h1>
              <p className="text-white/40 font-[300] max-w-[400px] leading-[1.8]"
                style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1rem" }}>
                Every vehicle is immaculately maintained, fully insured, and ready to deliver an exceptional experience.
              </p>
            </div>
            <div className="flex items-center gap-6 text-white/30 text-[.8rem] font-[500]">
              <div className="text-center">
                <div className="font-barlow font-black text-white text-3xl">{CARS.length}</div>
                <div className="text-[.65rem] tracking-[.12em] uppercase mt-0.5">Vehicles</div>
              </div>
              <div className="w-px h-10 bg-white/10"/>
              <div className="text-center">
                <div className="font-barlow font-black text-white text-3xl">4</div>
                <div className="text-[.65rem] tracking-[.12em] uppercase mt-0.5">Categories</div>
              </div>
              <div className="w-px h-10 bg-white/10"/>
              <div className="text-center">
                <div className="font-barlow font-black text-white text-3xl">24/7</div>
                <div className="text-[.65rem] tracking-[.12em] uppercase mt-0.5">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <div className="bg-white border-b border-purple-100 sticky top-[76px] z-50 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex items-center gap-2 py-3 overflow-x-auto scrollbar-none">
          {CATEGORIES.map(cat=>(
            <button key={cat} onClick={()=>setActive(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[.75rem] font-[600] tracking-[.06em] uppercase whitespace-nowrap transition-all duration-200 ${
                active===cat
                  ? "text-white shadow-lg shadow-purple-200"
                  : "text-ink/40 hover:text-ink/70 bg-[#F8F7FF] border border-purple-100"
              }`}
              style={active===cat?{background:"linear-gradient(135deg,#6B21A8,#7C3AED)"}:{}}>
              <i className={`fa-solid ${
                cat==="All"?"fa-th-large":
                cat==="Sedan"?"fa-car":
                cat==="SUV"?"fa-truck-monster":
                cat==="Luxury"?"fa-gem":
                "fa-flag-checkered"
              } text-xs`}></i>
              {cat} {active===cat && `(${filtered.length})`}
            </button>
          ))}
        </div>
      </div>

      {/* ── GRID ── */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map(car=>(
              <div key={car.id}
                className="group rounded-2xl overflow-hidden bg-white cursor-default transition-all duration-500"
                style={{
                  border: hoveredId===car.id ? "1.5px solid #7C3AED" : "1px solid rgba(107,33,168,.1)",
                  boxShadow: hoveredId===car.id ? "0 24px 56px rgba(107,33,168,.18)" : "0 2px 16px rgba(107,33,168,.05)",
                  transform: hoveredId===car.id ? "translateY(-6px)" : "translateY(0)",
                }}
                onMouseEnter={()=>setHoveredId(car.id)}
                onMouseLeave={()=>setHoveredId(null)}>

                {/* Image */}
                <div className="relative overflow-hidden" style={{ height:180 }}>
                  <img src={car.img} alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                  <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(26,26,46,.65) 0%,transparent 55%)" }}/>

                  {/* Category */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[.6rem] font-[600] tracking-[.1em] uppercase px-2.5 py-1 rounded-full bg-white/90 text-purple-DEFAULT"
                      style={{ backdropFilter:"blur(8px)" }}>
                      {car.type}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-barlow font-black text-ink text-[1.15rem] uppercase tracking-tight mb-3 leading-none">
                    {car.name}
                  </h3>

                  {/* Specs grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { icon:"fa-door-open",   label:"Doors",        val:car.doors },
                      { icon:"fa-users",       label:"Passengers",   val:car.pax },
                      { icon:"fa-gears",       label:"Transmission", val:car.trans },
                      { icon:"fa-gauge-high",  label:"Engine",       val:car.engine },
                      { icon:"fa-gas-pump",    label:"Fuel",         val:car.fuel },
                    ].map(s=>(
                      <div key={s.label} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background:"rgba(107,33,168,.07)" }}>
                          <i className={`fa-solid ${s.icon} text-purple-DEFAULT`} style={{ fontSize:".6rem" }}></i>
                        </div>
                        <div>
                          <div className="text-[.55rem] font-[600] tracking-[.1em] uppercase text-ink/30">{s.label}</div>
                          <div className="text-[.73rem] font-[500] text-ink/70">{s.val}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-purple-50 mb-4"/>

                  {/* Footer - Book Now only, no price */}
                  <button
                    onClick={()=>router.push("/book")}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-[.78rem] font-[600] tracking-[.06em] uppercase transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                    style={{ background:"linear-gradient(135deg,#6B21A8,#7C3AED)" }}>
                    <i className="fa-solid fa-calendar-check text-xs"></i>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="font-barlow font-black text-ink text-2xl mb-2">No vehicles found</h3>
              <p className="text-ink/40">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
