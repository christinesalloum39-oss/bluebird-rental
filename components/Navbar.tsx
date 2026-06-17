"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import BookingModal from "./BookingModal";

const NAV = [
  { label:"Home",     href:"/" },
  { label:"About Us", href:"/about" },
  { label:"Services", href:"/#services" },
  { label:"Our Fleet",href:"/fleet" },
  { label:"Contact",  href:"/contact" },
];

export default function Navbar() {
  const [open,    setOpen]    = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const [modal,   setModal]   = useState(false);
  const [darkMode,setDarkMode] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const handler = () => setModal(true);
    window.addEventListener("openBooking", handler);
    return () => window.removeEventListener("openBooking", handler);
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem("bluebird-theme");
    setDarkMode(saved === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", darkMode);
    window.localStorage.setItem("bluebird-theme", darkMode ? "dark" : "original");
  }, [darkMode]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg shadow-purple-900/8 border-b border-purple-100"
          : "bg-white border-b border-purple-100/60"
      }`}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 h-[72px] flex items-center justify-between gap-8">

          {/* Logo — always visible */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-purple-200 transition-transform duration-300 group-hover:scale-105"
              style={{ background:"linear-gradient(135deg,#6B21A8,#7C3AED)" }}>
              <i className="fa-solid fa-car text-white" style={{ fontSize:".9rem" }}></i>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-barlow font-black text-[1.6rem] tracking-tight text-ink leading-none">
                Blue<span className="text-purple-grad">Bird</span>
              </span>
              <span className="text-[.46rem] tracking-[.28em] uppercase mt-0.5 text-purple-light/60"
                style={{ fontFamily:"'Cormorant Garamond',serif" }}>
                Premium Car Rental
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map(l => (
              <Link key={l.href} href={l.href}
                className="px-4 py-2 text-[.8rem] font-[500] tracking-[.04em] text-ink/50 hover:text-ink rounded-lg hover:bg-purple-50 transition-all duration-200">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 rounded-xl border border-ink/10 text-ink/55 hover:text-purple-DEFAULT hover:border-purple-200 bg-white/80 hover:bg-purple-50 transition-all duration-200 flex items-center justify-center"
              aria-label={`Switch to ${darkMode ? "original" : "dark"} mode`}>
              <i className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"} text-[.88rem]`}></i>
            </button>
            <a href="https://rentworksplus.com" target="_blank" rel="noopener noreferrer"
              className="text-[.8rem] font-[600] text-ink/40 hover:text-ink border border-ink/10 hover:border-purple-200 px-4 py-2 rounded-xl transition-all duration-200">
              Login
            </a>
            <button
              onClick={() => setModal(true)}
              className="flex items-center gap-0 rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
              style={{ boxShadow:"0 8px 24px rgba(107,33,168,.28)" }}>
              <span className="font-[700] text-[.8rem] tracking-[.06em] uppercase text-white px-5 py-2.5"
                style={{ background:"linear-gradient(135deg,#6B21A8,#7C3AED)" }}>
                Book A Rental
              </span>
              <span className="w-10 h-10 flex items-center justify-center text-white bg-[#4C1D95]">
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </span>
            </button>
          </div>

          {/* Burger */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="menu">
            <div className={`w-6 h-0.5 bg-ink/60 transition-all mb-1.5 ${open?"rotate-45 translate-y-2":""}`}/>
            <div className={`w-6 h-0.5 bg-ink/60 transition-all mb-1.5 ${open?"opacity-0":""}`}/>
            <div className={`w-6 h-0.5 bg-ink/60 transition-all ${open?"-rotate-45 -translate-y-2":""}`}/>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-purple-100 ${open?"max-h-96":"max-h-0"}`}>
          <div className="px-8 py-4 flex flex-col gap-2">
            {NAV.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-[500] text-ink/60 hover:text-purple-DEFAULT border-b border-purple-50 transition-colors">
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-11 flex items-center justify-center text-sm font-[600] text-ink/60 border border-purple-100 rounded-xl transition-all"
              aria-label={`Switch to ${darkMode ? "original" : "dark"} mode`}>
              <i className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"} text-purple-DEFAULT`}></i>
            </button>
            <div className="flex gap-3 pt-3">
              <a href="https://rentworksplus.com" target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center text-sm border border-ink/10 text-ink/50 py-2.5 rounded-xl">Login</a>
              <button onClick={() => { setOpen(false); setModal(true); }}
                className="flex-1 text-center text-sm font-[700] text-white py-2.5 rounded-xl"
                style={{ background:"linear-gradient(135deg,#6B21A8,#7C3AED)" }}>Book Now</button>
            </div>
          </div>
        </div>
      </header>

      <BookingModal isOpen={modal} onClose={() => setModal(false)} />
    </>
  );
}
