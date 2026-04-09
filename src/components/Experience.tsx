const jobs = [
  {
    company: "Sensata Technologies",
    role: "Product Marketing Intern",
    period: "Jun 2024 – Aug 2024",
    points: [
      "Built interactive Power BI dashboards translating competitive and market research into actionable strategy.",
      "Leveraged advanced Excel (pivot tables, data modeling) for rigorous data integrity.",
    ],
  },
  {
    company: "Plug Power",
    role: "Digital Marketing Manager",
    period: "Oct 2022 – Jul 2023",
    points: [
      "Led A/B testing and comparative analysis — decreased CPA by 25%.",
      "Automated marketing operations, cutting bounce rate 30% and CPL 50%.",
    ],
  },
  {
    company: "Pixis",
    role: "Customer Success / Digital Marketing Manager — AI Platform Expert",
    period: "Jul 2021 – Sep 2022",
    points: [
      "Reduced churn 50% by restructuring client engagement for budget-constrained accounts.",
      "Delivered 300% ROI lift within a month for a leading fashion brand.",
      "Managed an 8-member team overseeing $1.4M in client budgets.",
    ],
  },
  {
    company: "GenY Medium",
    role: "Senior Digital Marketing Analyst",
    period: "Jan 2020 – Jun 2021",
    points: [
      "Delivered 16x ROAS lift for a D2C brand via Google Merchant Center and Meta catalog optimization.",
      "Executed SEO audits improving keyword quality, internal linking, and content.",
      "Built database audits and dashboards, improving data accessibility 30%.",
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
