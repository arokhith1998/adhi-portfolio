"use client";

const clients = [
  "Skoda",
  "MyGlamm",
  "Sensata",
  "Plug Power",
  "Narayana Group",
  "GroupM",
  "Hotstar",
  "ITC",
  "GoIbibo",
  "Ixigo",
  "L&T Realty",
  "Spotify",
  "NoBroker",
];

export default function Clients() {
  // Duplicate the list so the marquee loops seamlessly.
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
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap group-hover:[animation-play-state:paused]">
          {loop.map((c, i) => (
            <div
              key={`${c}-${i}`}
              className="flex items-center justify-center h-16 px-8 rounded-xl border border-zinc-200 bg-white text-zinc-700 font-semibold text-lg tracking-tight min-w-[180px]"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
