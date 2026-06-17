"use client";
import { useState, useEffect } from "react";

interface Props { isOpen: boolean; onClose: () => void; }

export default function BookingModal({ isOpen, onClose }: Props) {
  const [diffDrop, setDiffDrop] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    setFromDate(today.toISOString().split("T")[0]);
    setToDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const LOCATIONS = ["Beirut – Downtown","Jounieh – Kaslik","Tripoli – City Centre","Saida – Highway"];
  const AGES = ["18–24","25–29","30–64","65–69","70+"];
  const TIMES = ["07:00 AM","08:00 AM","09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM","06:00 PM","07:00 PM","08:00 PM"];

  const selCls = "w-full border border-purple-100 rounded-xl px-4 py-3 text-[.88rem] font-[400] text-ink bg-[#F8F7FF] outline-none cursor-pointer appearance-none focus:border-purple-DEFAULT focus:bg-white transition-all";
  const inCls  = "w-full border border-purple-100 rounded-xl px-4 py-3 text-[.88rem] font-[400] text-ink bg-[#F8F7FF] outline-none focus:border-purple-DEFAULT focus:bg-white transition-all [color-scheme:light]";

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[500] bg-black/60 backdrop-blur-sm" onClick={onClose}/>

      {/* Modal */}
      <div className="fixed inset-0 z-[501] flex items-center justify-center p-4 pointer-events-none">
        <div className="w-full max-w-[520px] rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/40 pointer-events-auto"
          style={{ background:"#fff", animation:"modalIn .3s cubic-bezier(.16,1,.3,1)" }}>

          {/* Header */}
          <div className="flex items-center justify-between px-7 py-5"
            style={{ background:"linear-gradient(135deg,#6B21A8,#7C3AED)" }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                <i className="fa-solid fa-car text-white" style={{ fontSize:".85rem" }}></i>
              </div>
              <h2 className="font-barlow font-black text-white text-[1.4rem] tracking-tight uppercase">Book Now</h2>
            </div>
            <button onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-all duration-200">
              <i className="fa-solid fa-xmark text-sm"></i>
            </button>
          </div>

          {/* Body */}
          <div className="px-7 py-6 flex flex-col gap-5">

            {/* Pickup location */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[.7rem] font-[700] tracking-[.12em] uppercase text-ink/50">
                <i className="fa-solid fa-location-dot text-purple-DEFAULT mr-1.5 text-xs"></i>
                Pickup / Drop-off Location
              </label>
              <div className="relative">
                <select className={selCls}>
                  {LOCATIONS.map(l => <option key={l}>{l}</option>)}
                </select>
                <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-ink/30 text-xs pointer-events-none"></i>
              </div>
            </div>

            {/* Different drop-off toggle */}
            <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-[#F8F7FF] border border-purple-100">
              <span className="text-[.82rem] font-[500] text-ink/60">
                <i className="fa-solid fa-arrows-left-right text-purple-DEFAULT mr-2 text-xs"></i>
                Different Drop-off Location
              </span>
              <button onClick={() => setDiffDrop(!diffDrop)}
                className="relative w-11 h-6 rounded-full transition-all duration-300"
                style={{ background: diffDrop ? "linear-gradient(135deg,#6B21A8,#7C3AED)" : "#E5E7EB" }}>
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-all duration-300 ${diffDrop ? "left-[22px]" : "left-0.5"}`}/>
              </button>
            </div>

            {/* Drop-off location (conditional) */}
            {diffDrop && (
              <div className="flex flex-col gap-1.5">
                <label className="text-[.7rem] font-[700] tracking-[.12em] uppercase text-ink/50">
                  <i className="fa-solid fa-flag-checkered text-purple-DEFAULT mr-1.5 text-xs"></i>
                  Drop-off Location
                </label>
                <div className="relative">
                  <select className={selCls}>
                    {LOCATIONS.map(l => <option key={l}>{l}</option>)}
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-ink/30 text-xs pointer-events-none"></i>
                </div>
              </div>
            )}

            {/* From */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[.7rem] font-[700] tracking-[.12em] uppercase text-ink/50">
                <div className="w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background:"linear-gradient(135deg,#6B21A8,#7C3AED)" }}>
                  <i className="fa-solid fa-arrow-up text-white" style={{ fontSize:".5rem" }}></i>
                </div>
                From
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input type="date" value={fromDate} onChange={e=>setFromDate(e.target.value)} className={inCls}/>
                <div className="relative">
                  <select className={selCls}>
                    {TIMES.map(t => <option key={t}>{t}</option>)}
                  </select>
                  <i className="fa-solid fa-clock absolute right-3 top-1/2 -translate-y-1/2 text-ink/25 text-xs pointer-events-none"></i>
                </div>
              </div>
            </div>

            {/* To */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[.7rem] font-[700] tracking-[.12em] uppercase text-ink/50">
                <div className="w-5 h-5 rounded-full flex items-center justify-center bg-purple-100">
                  <i className="fa-solid fa-arrow-down text-purple-DEFAULT" style={{ fontSize:".5rem" }}></i>
                </div>
                To
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input type="date" value={toDate} onChange={e=>setToDate(e.target.value)} className={inCls}/>
                <div className="relative">
                  <select className={selCls}>
                    {TIMES.map(t => <option key={t}>{t}</option>)}
                  </select>
                  <i className="fa-solid fa-clock absolute right-3 top-1/2 -translate-y-1/2 text-ink/25 text-xs pointer-events-none"></i>
                </div>
              </div>
            </div>

            {/* Age + Promo */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[.7rem] font-[700] tracking-[.12em] uppercase text-ink/50">
                  <i className="fa-solid fa-user text-purple-DEFAULT mr-1.5 text-xs"></i>
                  Driver Age
                </label>
                <div className="relative">
                  <select className={selCls}>
                    <option value="">Select Age</option>
                    {AGES.map(a => <option key={a}>{a}</option>)}
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-ink/30 text-xs pointer-events-none"></i>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[.7rem] font-[700] tracking-[.12em] uppercase text-ink/50">
                  <i className="fa-solid fa-tag text-purple-DEFAULT mr-1.5 text-xs"></i>
                  Promo Code
                </label>
                <input type="text" placeholder="Optional" className={inCls}/>
              </div>
            </div>

            {/* Search button */}
            <button
              onClick={() => { onClose(); window.location.href = "/book"; }}
              className="w-full flex items-center justify-center gap-3 text-white font-barlow font-black text-[1rem] tracking-[.1em] uppercase py-4 rounded-xl transition-all duration-200 hover:brightness-110 active:scale-[.99] mt-1"
              style={{ background:"linear-gradient(135deg,#6B21A8,#7C3AED)", boxShadow:"0 8px 24px rgba(107,33,168,.35)" }}>
              <i className="fa-solid fa-calendar-check text-sm"></i>
              Book Now
            </button>

            <p className="text-center text-[.72rem] text-ink/30 font-[300]">
              Free cancellation · No hidden fees · Instant confirmation
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity:0; transform:scale(.95) translateY(12px); }
          to   { opacity:1; transform:scale(1) translateY(0); }
        }
      `}</style>
    </>
  );
}
