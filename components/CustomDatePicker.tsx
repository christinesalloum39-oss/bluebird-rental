"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  value: Date;
  onChange: (d: Date) => void;
  label?: string;
  minDate?: Date;
}

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS   = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function fmt(d: Date) {
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export default function CustomDatePicker({ value, onChange, minDate }: Props) {
  const [open, setOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(new Date(value.getFullYear(), value.getMonth(), 1));
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 280 });
  const [mounted, setMounted] = useState(false);
  const btnRef  = useRef<HTMLButtonElement>(null);
  const popRef  = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function onClick(e: MouseEvent | TouchEvent) {
      const t = e.target as Node;
      if (btnRef.current?.contains(t)) return;
      if (popRef.current?.contains(t)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("touchstart", onClick);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("touchstart", onClick);
    };
  }, []);

  // Reposition on open / scroll / resize so the popup always tracks the button,
  // and flips above the button if there's not enough room below.
  useEffect(() => {
    if (!open) return;
    const update = () => {
      const r = btnRef.current?.getBoundingClientRect();
      if (!r) return;
      const popupHeight = 360;
      const spaceBelow = window.innerHeight - r.bottom;
      const openUpward = spaceBelow < popupHeight && r.top > popupHeight;
      const width = Math.min(280, window.innerWidth - 24);
      let left = r.left;
      if (left + width > window.innerWidth - 12) left = window.innerWidth - width - 12;
      if (left < 12) left = 12;
      setCoords({
        top: openUpward ? r.top - popupHeight - 8 : r.bottom + 8,
        left,
        width,
      });
    };
    update();
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [open]);

  const firstDay  = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), 1);
  const startWeek = firstDay.getDay();
  const daysInMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 0).getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeek; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(viewMonth.getFullYear(), viewMonth.getMonth(), d));

  const isDisabled = (d: Date) => minDate && d < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());

  const popup = open && (
    <div
      ref={popRef}
      className="fixed z-[999] rounded-2xl shadow-2xl p-4"
      style={{
        top: coords.top,
        left: coords.left,
        width: coords.width,
        background: "#1E0A3C",
        border: "1px solid rgba(168,85,247,.3)",
      }}>
      {/* Header: month nav */}
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={() => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1))}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <span className="text-white text-[.82rem] font-[600]">
          {MONTHS[viewMonth.getMonth()]} {viewMonth.getFullYear()}
        </span>
        <button
          type="button"
          onClick={() => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1))}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {DAYS.map(d => (
          <div key={d} className="text-center text-[.6rem] font-[600] text-white/30 py-1">{d}</div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((d, i) => {
          if (!d) return <div key={i} />;
          const selected = sameDay(d, value);
          const disabled = isDisabled(d);
          return (
            <button
              key={i}
              type="button"
              disabled={!!disabled}
              onClick={() => { onChange(d); setOpen(false); }}
              className="aspect-square rounded-lg text-[.75rem] font-[500] flex items-center justify-center transition-all duration-150"
              style={{
                background: selected ? "linear-gradient(135deg,#6B21A8,#7C3AED)" : "transparent",
                color: disabled ? "rgba(255,255,255,.18)" : selected ? "#fff" : "rgba(255,255,255,.75)",
                cursor: disabled ? "not-allowed" : "pointer",
              }}>
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="relative">
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full min-w-0 rounded-xl px-2.5 py-2.5 text-[13px] sm:text-[14px] font-[500] text-white bg-white/10 border border-white/15 outline-none focus:border-white/40 focus:bg-white/15 transition-all flex items-center justify-between gap-2">
        <span className="truncate">{fmt(value)}</span>
        <i className="fa-regular fa-calendar text-white/30 text-xs shrink-0"></i>
      </button>

      {mounted && popup && createPortal(popup, document.body)}
    </div>
  );
}
