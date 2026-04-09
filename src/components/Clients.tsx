"use client";

// Logos are fetched from Clearbit's free logo CDN (logo.clearbit.com/<domain>).
// If any logo fails to load, the brand name text is shown as a fallback.
const clients = [
  { name: "Skoda", domain: "skoda-auto.com" },
  { name: "MyGlamm", domain: "myglamm.com" },
  { name: "Sensata", domain: "sensata.com" },
  { name: "Plug Power", domain: "plugpower.com" },
  { name: "Narayana Group", domain: "narayanagroup.com" },
  { name: "GroupM", domain: "groupm.com" },
  { name: "Hotstar", domain: "hotstar.com" },
  { name: "ITC", domain: "itcportal.com" },
  { name: "GoIbibo", domain: "goibibo.com" },
  { name: "Ixigo", domain: "ixigo.com" },
  { name: "L&T Realty", domain: "lntrealty.com" },
  { name: "Spotify", domain: "spotify.com" },
  { name: "NoBroker", domain: "nobroker.in" },
];

export default function Clients() {
  const loop = [...clients, ...clients];

  return (
    <section className="py-20 border-t border-zinc-200 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
          Clients & Companies
        </h2>
        <p className="mt-3 text-zinc-600 max-w-2xl">
          Brands and teams I&apos;ve partnered with across performance
          marketing, analytics, and growth.
        </p>
      </div>

      <div className="relative mt-10 group">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap group-hover:[animation-play-state:paused]">
          {loop.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="flex items-center justify-center h-20 px-8 rounded-xl border border-zinc-200 bg-white min-w-[180px]"
              title={c.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://logo.clearbit.com/${c.domain}?size=200`}
                alt={`${c.name} logo`}
                className="max-h-10 max-w-[140px] object-contain grayscale hover:grayscale-0 transition"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "block";
                }}
              />
              <span
                className="hidden text-zinc-700 font-semibold text-lg tracking-tight"
              >
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
