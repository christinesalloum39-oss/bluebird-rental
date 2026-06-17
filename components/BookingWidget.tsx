"use client";
import { useState } from "react";
import CustomDatePicker from "./CustomDatePicker";
import CustomTimePicker from "./CustomTimePicker";

export default function BookingWidget() {
  const [diffDrop, setDiffDrop] = useState(false);

  const today    = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [fromDate, setFromDate] = useState(today);
  const [toDate,   setToDate]   = useState(tomorrow);
  const [fromTime, setFromTime] = useState("07:00 AM");
  const [toTime,   setToTime]   = useState("07:00 AM");

  const LOCATIONS = ["Beirut – Downtown","Jounieh – Kaslik","Tripoli – City Centre","Saida – Highway"];
  const TIMES     = ["07:00 AM","08:00 AM","09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM","06:00 PM","07:00 PM","08:00 PM"];

  const labelCls = "block text-[.62rem] font-[700] tracking-[.14em] uppercase mb-1.5 text-white/50";
  const selCls   = "w-full min-w-0 rounded-xl px-2.5 py-2.5 text-[13px] sm:text-[14px] font-[500] text-white bg-white/10 border border-white/15 outline-none cursor-pointer appearance-none focus:border-white/40 focus:bg-white/15 transition-all";

  return (
    <div id="booking" className="w-full max-w-[580px] mx-auto rounded-2xl shadow-2xl shadow-purple-900/50"
      style={{ background:"rgba(30,10,60,.88)", border:"1px solid rgba(168,85,247,.25)", backdropFilter:"blur(24px)" }}>

      {/* Header bar */}
      <div className="flex items-center gap-3 px-5 sm:px-6 py-4 rounded-t-2xl"
        style={{ background:"linear-gradient(135deg,#6B21A8,#7C3AED)", borderBottom:"1px solid rgba(255,255,255,.12)" }}>
        <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
          <i className="fa-solid fa-car text-white" style={{ fontSize:".8rem" }}></i>
        </div>
        <div>
          <h3 className="font-barlow font-black text-white text-[1.1rem] tracking-tight uppercase leading-none">Book Now</h3>
          <p className="text-white/50 text-[.6rem] tracking-[.12em] uppercase mt-0.5"
            style={{ fontFamily:"'Cormorant Garamond',serif" }}>Instant confirmation · Free cancellation</p>
        </div>
      </div>

      {/* Form body */}
      <div className="px-5 sm:px-6 py-5 flex flex-col gap-4 min-w-0 rounded-b-2xl">

        {/* Pickup location */}
        <div>
          <label className={labelCls}>
            <i className="fa-solid fa-location-dot text-purple-300 mr-1.5 text-xs"></i>
            Pickup / Drop-off Location
          </label>
          <div className="relative">
            <select className={selCls} style={{ color:"rgba(255,255,255,.85)" }}>
              {LOCATIONS.map(l => <option key={l} style={{ background:"#2E1065" }}>{l}</option>)}
            </select>
            <i className="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-white/30 text-xs pointer-events-none"></i>
          </div>
        </div>

        {/* Different drop-off toggle */}
        <div className="flex items-center justify-between py-2.5 px-3 rounded-xl"
          style={{ background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.1)" }}>
          <span className="text-[.75rem] font-[500] text-white/50">
            <i className="fa-solid fa-arrows-left-right text-purple-300 mr-2 text-xs"></i>
            Different Drop-off Location
          </span>
          <button onClick={() => setDiffDrop(!diffDrop)}
            className="relative w-10 h-5 rounded-full transition-all duration-300 shrink-0 ml-3"
            style={{ background: diffDrop ? "linear-gradient(135deg,#7C3AED,#A855F7)" : "rgba(255,255,255,.15)" }}>
            <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-300 ${diffDrop ? "left-[22px]" : "left-0.5"}`}/>
          </button>
        </div>

        {diffDrop && (
          <div>
            <label className={labelCls}>
              <i className="fa-solid fa-flag-checkered text-purple-300 mr-1.5 text-xs"></i>
              Drop-off Location
            </label>
            <div className="relative">
              <select className={selCls} style={{ color:"rgba(255,255,255,.85)" }}>
                {LOCATIONS.map(l => <option key={l} style={{ background:"#2E1065" }}>{l}</option>)}
              </select>
              <i className="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-white/30 text-xs pointer-events-none"></i>
            </div>
          </div>
        )}

        {/* FROM row — custom date & time pickers, no native iOS overlap */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
              style={{ background:"linear-gradient(135deg,#6B21A8,#7C3AED)" }}>
              <i className="fa-solid fa-arrow-up text-white" style={{ fontSize:".45rem" }}></i>
            </div>
            <span className="text-[.62rem] font-[700] tracking-[.14em] uppercase text-white/50">From</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <CustomDatePicker value={fromDate} onChange={setFromDate} minDate={today}/>
            <CustomTimePicker value={fromTime} onChange={setFromTime} options={TIMES}/>
          </div>
        </div>

        {/* TO row */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-white/10"
              style={{ border:"1px solid rgba(255,255,255,.15)" }}>
              <i className="fa-solid fa-arrow-down text-white/60" style={{ fontSize:".45rem" }}></i>
            </div>
            <span className="text-[.62rem] font-[700] tracking-[.14em] uppercase text-white/50">To</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <CustomDatePicker value={toDate} onChange={setToDate} minDate={fromDate}/>
            <CustomTimePicker value={toTime} onChange={setToTime} options={TIMES}/>
          </div>
        </div>

        {/* Make a Reservation — intentionally inert for now, no navigation/action */}
        <button
          type="button"
          onClick={(e) => e.preventDefault()}
          className="w-full flex items-center justify-center gap-2.5 text-white font-barlow font-black text-[.95rem] tracking-[.1em] uppercase py-3.5 rounded-xl transition-all duration-200 hover:brightness-110 active:scale-[.99] mt-1 cursor-pointer"
          style={{ background:"linear-gradient(135deg,#6B21A8,#7C3AED)", boxShadow:"0 8px 24px rgba(107,33,168,.45)" }}>
          <i className="fa-solid fa-calendar-check text-sm"></i>
          Make a Reservation
        </button>

        <div className="flex items-center justify-center gap-4 text-white/25 text-[.65rem] font-[400] tracking-wide flex-wrap">
          <span><i className="fa-solid fa-circle-check text-purple-400 mr-1 text-xs"></i>Free cancellation</span>
          <span><i className="fa-solid fa-shield-halved text-purple-400 mr-1 text-xs"></i>No hidden fees</span>
          <span><i className="fa-solid fa-bolt text-purple-400 mr-1 text-xs"></i>Instant confirm</span>
        </div>
      </div>
    </div>
  );
}
