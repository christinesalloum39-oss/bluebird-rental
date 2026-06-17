// ── BRANDS ──
export function Brands() {
  const BRANDS = ["Mercedes-Benz","Rolls Royce","Bentley","Audi","BMW","Jaguar","Porsche","Range Rover","Lexus","Maserati"];
  const d = [...BRANDS,...BRANDS];
  return (
    <div className="overflow-hidden bg-white py-5 border-y border-purple-100">
      <div className="flex animate-marquee w-max gap-16 items-center">
        {d.map((b,i)=>(
          <span key={i} className="flex items-center gap-4 shrink-0">
            <span className="text-purple-light text-[.5rem]">◆</span>
            <span className="font-barlow font-[700] text-[.9rem] tracking-[.2em] uppercase whitespace-nowrap text-ink/25 hover:text-ink/50 transition-colors">{b}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
