const jobs = [
  {
    company: "Sensata Technologies",
    role: "Growth & Product Marketing",
    period: "Sep 2024 – Present",
    points: ["Product Marketing", "Product Marketing Intern"],
  },
  {
    company: "Plug Power",
    role: "Digital Marketing Manager",
    period: "Oct 2022 – Jul 2023",
    points: [
      "Led PPC and display campaigns across Google Ads, Meta, and LinkedIn — A/B tested keywords, match types, bid strategies, and creatives to deliver −25% CPA and +20% conversion rate.",
      "Owned keyword research and bid optimization across omni-channel campaigns, refining auction dynamics to cut wasted spend 15%.",
      "Built audience segments and retargeting funnels using Adobe Audience Manager and CRM data, improving MQL-to-SQL conversion across priority product lines.",
      "Automated the MarTech stack (Salesforce, Adobe Analytics, GA, GTM) for closed-loop attribution from ad click to SQL.",
    ],
  },
  {
    company: "Pixis",
    role: "Customer Success & Growth Manager (AI Platform)",
    period: "Jul 2021 – Sep 2022",
    points: [
      "Managed $1.4M media budget across global D2C and ecommerce clients; ran weekly PPC and display optimization cycles across Google, Meta, and programmatic channels.",
      "Delivered 3x ROAS in one month for a leading fashion brand via Shopping feed cleanup, smart bidding, creative refresh, and lookalike expansion.",
      "Reduced client churn 50% through proactive partner strategy reviews and vertical-specific advertising playbooks.",
      "Directed an 8-person team executing ecommerce marketplace advertising strategies across multiple accounts.",
    ],
  },
  {
    company: "GenY Medium",
    role: "Senior Digital Marketing Analyst",
    period: "Jan 2020 – Jun 2021",
    points: [
      "Delivered 16x ROAS for a D2C ecommerce brand by rebuilding Google Merchant Center and Meta catalog feeds, fixing disapprovals, and launching structured Shopping + Advantage+ campaigns.",
      "Ran full-funnel paid media (Search, Shopping, Display, Meta) and built weekly performance dashboards informing budget reallocation and creative roadmaps.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-200">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Experience
      </h2>
      <ol className="mt-8 space-y-10">
        {jobs.map((j) => (
          <li key={j.company} className="grid md:grid-cols-5 gap-6">
            <div className="md:col-span-2">
              <p className="text-sm text-zinc-500">{j.period}</p>
              <h3 className="mt-1 font-semibold text-zinc-900">{j.company}</h3>
              <p className="text-sm text-zinc-600">{j.role}</p>
            </div>
            <ul className="md:col-span-3 space-y-2 text-zinc-700 leading-relaxed text-[15px]">
              {j.points.map((p) => (
                <li key={p} className="relative pl-5">
                  <span className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-zinc-400" />
                  {p}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
