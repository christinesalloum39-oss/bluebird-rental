"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{background:"linear-gradient(135deg,#1A1A2E,#2E1065)",borderTop:"1px solid rgba(168,85,247,.12)"}}>
      <div className="max-w-[1320px] mx-auto px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{background:"linear-gradient(135deg,#6B21A8,#7C3AED)"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 17H3a2 2 0 01-2-2v-4a2 2 0 012-2h1l2-4h10l2 4h1a2 2 0 012 2v4a2 2 0 01-2 2h-2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7.5" cy="17.5" r="2.5" stroke="white" strokeWidth="2"/>
                  <circle cx="16.5" cy="17.5" r="2.5" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-barlow font-black text-[1.5rem] tracking-tight text-white">
                  Blue<span style={{background:"linear-gradient(135deg,#A855F7,#C084FC)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Bird</span>
                </span>
                <span className="text-[.45rem] tracking-[.28em] uppercase mt-0.5 text-purple-bright/40"
                  style={{fontFamily:"'Cormorant Garamond',serif"}}>Premium Car Rental</span>
              </div>
            </Link>
            <p className="font-[300] leading-[1.85] max-w-[280px] text-white/30"
              style={{fontSize:".875rem",fontFamily:"'Cormorant Garamond',serif",letterSpacing:".03em"}}>
              Lebanon's most distinguished car rental service. Premium vehicles, white-glove service, and a commitment to excellence.
            </p>
          </div>

          <div>
            <h4 className="text-[.58rem] font-[600] tracking-[.2em] uppercase mb-5 text-purple-bright/40">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {[["Home","/"],["About Us","/about"],["Services","/#services"],["Our Fleet","/#fleet"],["Contact","/contact"],["RentWorks+","https://rentworksplus.com"]].map(([l,h])=>(
                <li key={h}>
                  <Link href={h} className="text-[.875rem] font-[300] text-white/30 hover:text-purple-bright transition-colors duration-200">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[.58rem] font-[600] tracking-[.2em] uppercase mb-5 text-purple-bright/40">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="tel:+9611234567" className="text-[.875rem] font-[300] text-white/30 hover:text-purple-bright transition-colors">+961 1 234 567</a></li>
              <li><a href="mailto:info@bluebird.lb" className="text-[.875rem] font-[300] text-white/30 hover:text-purple-bright transition-colors">info@bluebird.lb</a></li>
              <li className="text-[.875rem] font-[300] text-white/30">Mon–Sat: 8AM – 7PM</li>
              <li className="text-[.82rem] font-[500] text-purple-bright">24/7 Concierge</li>
            </ul>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{borderTop:"1px solid rgba(168,85,247,.1)"}}>
          <p className="text-[.75rem] font-[300] text-white/20">© 2026 BlueBird Software. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-[.75rem] font-[300] text-white/20 hover:text-purple-bright transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="text-[.75rem] font-[300] text-white/20 hover:text-purple-bright transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
