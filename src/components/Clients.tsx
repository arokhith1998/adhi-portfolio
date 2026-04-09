"use client";

import { useState } from "react";

// Logos are sourced from Google's favicon service, which reliably resolves
// for every live domain. If even that fails, a text-only fallback is shown.
const clients = [
  { name: "Skoda", domain: "skoda-auto.com" },
  { name: "MyGlamm", domain: "myglamm.com" },
  { name: "Sensata", domain: "sensata.com" },
  { name: "Plug Power", domain: "plugpower.com" },
  { name: "Narayana Group", domain: "narayanahealth.org" },
  { name: "GroupM", domain: "groupm.com" },
  { name: "Hotstar", domain: "hotstar.com" },
  { name: "ITC", domain: "itcportal.com" },
  { name: "GoIbibo", domain: "goibibo.com" },
  { name: "Ixigo", domain: "ixigo.com" },
  { name: "L&T Realty", domain: "lntrealty.com" },
  { name: "Spotify", domain: "spotify.com" },
  { name: "NoBroker", domain: "nobroker.in" },
];

function ClientTile({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);
  const src = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  return (
    <div
      className="flex items-center justify-center gap-3 h-20 px-6 rounded-xl border border-zinc-200 bg-white min-w-[200px]"
      title={name}
    >
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${name} logo`}
          className="h-8 w-8 object-contain"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      )}
      <span className="text-zinc-800 font-semibold text-base tracking-tight">
        {name}
      </span>
    </div>
  );
}

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

        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap group-hover:[animation-play-state:paused]">
          {loop.map((c, i) => (
            <ClientTile key={`${c.name}-${i}`} name={c.name} domain={c.domain} />
          ))}
        </div>
      </div>
    </section>
  );
}
