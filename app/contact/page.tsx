"use client";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const iCls = "border border-gray-200 rounded-xl px-4 py-3.5 text-[.85rem] text-ink placeholder-ink/25 bg-[#F8F7FF] outline-none focus:border-purple-DEFAULT focus:bg-white transition-all tracking-wide w-full";

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden"
        style={{ background:"linear-gradient(135deg,#1A1A2E 0%,#2E1065 60%,#4C1D95 100%)" }}>
        <div className="absolute inset-0 opacity-[.04] pointer-events-none"
          style={{ backgroundImage:"linear-gradient(rgba(168,85,247,1) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,1) 1px,transparent 1px)", backgroundSize:"60px 60px" }}/>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background:"radial-gradient(circle at 100% 0,rgba(139,92,246,.2),transparent 65%)" }}/>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative">
          <div className="flex items-center gap-2 mb-6 text-[.75rem]">
            <a href="/" className="text-white/30 hover:text-white/60 transition-colors">Home</a>
            <span className="text-white/20">/</span>
            <span className="text-purple-300">Contact Us</span>
          </div>
          <p className="eyebrow-dark mb-4">Get In Touch</p>
          <h1 className="font-barlow font-black text-white leading-[.9] tracking-[-2px] mb-5"
            style={{ fontSize:"clamp(2.2rem,6vw,5rem)", textTransform:"uppercase" }}>
            WE&apos;D LOVE TO<br/>
            <span style={{ background:"linear-gradient(135deg,#A855F7,#C084FC)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              HEAR FROM YOU
            </span>
          </h1>
          <p className="text-white/40 font-[300] max-w-[420px] leading-[1.8]"
            style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1rem" }}>
            Four branches across Lebanon — always close to where you need us, with 24/7 concierge support.
          </p>
        </div>
      </section>

      {/* Map + Form */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* LEFT — Map */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-purple-100/40"
                style={{ height:380, border:"1.5px solid rgba(107,33,168,.15)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424399.13817581!2d35.2667!3d33.8547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sLebanon!5e0!3m2!1sen!2slb!4v1700000000000!5m2!1sen!2slb"
                  width="100%" height="100%"
                  style={{ border:0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Branch info */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name:"Beirut – Downtown", phone:"+961 1 234 567", active:true },
                  { name:"Jounieh – Kaslik",  phone:"+961 9 000 001", active:false },
                  { name:"Tripoli – City",    phone:"+961 6 000 002", active:false },
                  { name:"Saida – Highway",   phone:"+961 7 000 003", active:false },
                ].map(b => (
                  <div key={b.name}
                    className={`rounded-xl p-3 border flex items-center gap-3 ${b.active ? "border-purple-DEFAULT bg-purple-50" : "border-purple-100 bg-[#F8F7FF]"}`}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: b.active ? "linear-gradient(135deg,#6B21A8,#7C3AED)" : "rgba(107,33,168,.08)" }}>
                      <i className="fa-solid fa-location-dot"
                        style={{ color: b.active ? "white" : "#6B21A8", fontSize:".7rem" }}></i>
                    </div>
                    <div>
                      <div className={`font-[600] text-[.75rem] leading-tight ${b.active ? "text-purple-DEFAULT" : "text-ink"}`}>{b.name}</div>
                      <a href={`tel:${b.phone.replace(/\s/g,"")}`}
                        className="text-[.67rem] font-[400] text-ink/40 hover:text-purple-DEFAULT transition-colors">{b.phone}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Contact form */}
            <div>
              {!sent ? (
                <>
                  <h2 className="font-barlow font-black text-ink mb-2"
                    style={{ fontSize:"clamp(1.6rem,3vw,2.4rem)", textTransform:"uppercase", letterSpacing:"-1px" }}>
                    GET IN TOUCH WITH US
                  </h2>
                  <p className="text-ink/40 text-[.85rem] font-[300] mb-7">
                    We will be happy to assist you with any questions you may have.
                  </p>

                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="NAME" className={iCls}/>
                      <input type="email" placeholder="EMAIL" className={iCls}/>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="tel" placeholder="PHONE" className={iCls}/>
                      <input type="text" placeholder="SUBJECT" className={iCls}/>
                    </div>
                    <textarea rows={5} placeholder="MESSAGE" className={iCls+" resize-none"}/>

                    <button onClick={() => setSent(true)}
                      className="w-full flex items-center justify-center gap-3 text-white font-barlow font-black text-[.95rem] tracking-[.12em] uppercase py-4 rounded-xl transition-all duration-200 hover:brightness-110 active:scale-[.99] shadow-lg shadow-purple-200"
                      style={{ background:"linear-gradient(135deg,#6B21A8,#7C3AED)" }}>
                      <i className="fa-solid fa-paper-plane text-sm"></i>
                      SEND MESSAGE
                    </button>

                    {/* Call / Email shortcuts */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                      <a href="tel:+9611234567"
                        className="flex items-center justify-center gap-2 border border-purple-200 hover:border-purple-DEFAULT text-purple-DEFAULT hover:bg-purple-50 py-3 rounded-xl text-[.78rem] font-[600] transition-all duration-200">
                        <i className="fa-solid fa-phone text-xs"></i>
                        Call Now
                      </a>
                      <a href="mailto:info@bluebird.lb"
                        className="flex items-center justify-center gap-2 border border-purple-200 hover:border-purple-DEFAULT text-purple-DEFAULT hover:bg-purple-50 py-3 rounded-xl text-[.78rem] font-[600] transition-all duration-200">
                        <i className="fa-solid fa-envelope text-xs"></i>
                        Email Us
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-5 shadow-xl shadow-purple-200"
                    style={{ background:"linear-gradient(135deg,#6B21A8,#7C3AED)" }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 className="font-barlow font-black text-ink text-[2rem] uppercase tracking-tight mb-2">MESSAGE SENT!</h3>
                  <p className="text-ink/40 font-[300] leading-[1.7] max-w-xs"
                    style={{ fontFamily:"'Cormorant Garamond',serif" }}>
                    Thank you. Our team will be in touch within one business day.
                  </p>
                  <button onClick={() => setSent(false)}
                    className="mt-6 text-purple-DEFAULT text-[.82rem] font-[500] hover:underline">
                    Send another message
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
