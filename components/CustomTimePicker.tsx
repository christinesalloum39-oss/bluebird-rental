"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  value: string;
  onChange: (t: string) => void;
  options: string[];
}

export default function CustomTimePicker({ value, onChange, options }: Props) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 140 });
  const [mounted, setMounted] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!open) return;
    const update = () => {
      const r = btnRef.current?.getBoundingClientRect();
      if (!r) return;
      const popupHeight = 240;
      const spaceBelow = window.innerHeight - r.bottom;
      const openUpward = spaceBelow < popupHeight && r.top > popupHeight;
      const width = Math.min(150, window.innerWidth - 24);
      let left = r.right - width;
      if (left < 12) left = 12;
      if (left + width > window.innerWidth - 12) left = window.innerWidth - width - 12;
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

  const popup = open && (
    <div
      ref={popRef}
      className="fixed z-[999] rounded-2xl shadow-2xl py-2 overflow-y-auto"
      style={{
        top: coords.top,
        left: coords.left,
        width: coords.width,
        maxHeight: "240px",
        background: "#1E0A3C",
        border: "1px solid rgba(168,85,247,.3)",
      }}>
      {options.map(t => (
        <button
          key={t}
          type="button"
          onClick={() => { onChange(t); setOpen(false); }}
          className="w-full text-left px-4 py-2 text-[.78rem] font-[500] transition-colors"
          style={{
            background: t === value ? "rgba(124,58,237,.25)" : "transparent",
            color: t === value ? "#fff" : "rgba(255,255,255,.65)",
          }}>
          {t}
        </button>
      ))}
    </div>
  );

  return (
    <div className="relative">
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full min-w-0 rounded-xl px-2.5 py-2.5 text-[13px] sm:text-[14px] font-[500] text-white bg-white/10 border border-white/15 outline-none focus:border-white/40 focus:bg-white/15 transition-all flex items-center justify-between gap-2">
        <span className="truncate">{value}</span>
        <i className="fa-regular fa-clock text-white/30 text-xs shrink-0"></i>
      </button>

      {mounted && popup && createPortal(popup, document.body)}
    </div>
  );
}
