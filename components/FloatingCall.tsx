"use client";
import { useState } from "react";

export default function FloatingCall() {
  const [hov, setHov] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-[200] flex flex-row items-center gap-3">
      {/* Tooltip — appears to the right of the button */}
      <div
        className={`bg-white rounded-xl px-3.5 py-2.5 shadow-xl border border-purple-100 transition-all duration-300 whitespace-nowrap pointer-events-none select-none order-2 ${
          hov ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}>
        <div className="text-[.72rem] font-[700] text-ink leading-tight">Call Us Now</div>
        <div className="text-[.68rem] mt-0.5 text-purple-DEFAULT font-[500]">+961 1 234 567</div>
      </div>

      {/* Call button */}
      <a
        href="tel:+9611234567"
        aria-label="Call BlueBird"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="order-1 relative w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
        style={{
          background: "linear-gradient(135deg,#6B21A8,#7C3AED)",
          boxShadow: "0 6px 20px rgba(107,33,168,.45)",
        }}>
        {/* Ping ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-purple-500"/>
        {/* Phone icon */}
        <svg
          width="20" height="20"
          fill="none" viewBox="0 0 24 24"
          stroke="currentColor" strokeWidth={2}
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.12 1.23 2 2 0 012.1.01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
        </svg>
      </a>
    </div>
  );
}
