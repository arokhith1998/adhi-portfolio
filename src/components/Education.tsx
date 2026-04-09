import { GraduationCap } from "lucide-react";

const degrees = [
  {
    school: "Simon Business School, University of Rochester",
    degree: "M.S. in Marketing Analytics — Pricing Specialization",
    period: "Dec 2024",
    details:
      "STEM-certified. Coursework: Pricing Policies, Advanced Pricing, Pricing Analytics, Consumer Behavior, Data Management & Visualization. Teaching Assistant for Digital Marketing Strategy and Economics & Marketing Strategy. Project Manager on a pro-bono GTM consulting project for Safran.",
  },
  {
    school: "Birla Institute of Technology & Science (BITS), Pilani",
    degree: "B.E. in Mechanical Engineering",
    period: "May 2020",
    details:
      "Content Writer & Business Development Associate at Qbox (entrepreneurial venture).",
  },
];

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-200">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Education
      </h2>
      <div className="mt-8 space-y-6">
        {degrees.map((d) => (
          <div
            key={d.school}
            className="flex gap-5 rounded-2xl border border-zinc-200 p-6 hover:border-zinc-900 transition-colors"
          >
            <GraduationCap className="w-6 h-6 text-zinc-400 shrink-0 mt-1" />
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-zinc-900">{d.degree}</h3>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">
                  {d.period}
                </span>
              </div>
              <p className="text-sm text-zinc-600 mt-0.5">{d.school}</p>
              <p className="mt-3 text-[15px] text-zinc-700 leading-relaxed">
                {d.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
