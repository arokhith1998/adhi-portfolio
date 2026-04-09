const groups = [
  {
    label: "Marketing & Advertising",
    items: [
      "Google Ads",
      "Search Ads 360",
      "Meta Ads",
      "LinkedIn Ads",
      "Criteo",
      "SEO",
      "A/B Testing",
      "Brand Lift",
      "Incremental Lift",
    ],
  },
  {
    label: "Analytics & BI",
    items: ["Google Analytics", "Power BI", "Tableau", "Excel", "SQL"],
  },
  {
    label: "Programming",
    items: ["Python", "R", "SQL", "HTML", "CSS"],
  },
  {
    label: "Platforms & CRM",
    items: ["Salesforce", "Pardot", "HubSpot", "Shopify", "WordPress"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-200">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Toolkit
      </h2>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {groups.map((g) => (
          <div key={g.label} className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="font-semibold text-zinc-900">{g.label}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
