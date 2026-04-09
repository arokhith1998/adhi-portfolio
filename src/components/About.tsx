export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-200">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        About
      </h2>
      <div className="mt-6 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            I&apos;m a marketing analytics professional who&apos;s spent the
            last four years in the trenches of performance marketing —
            optimizing paid search, managing 7-figure ad budgets, and running
            the experiments that actually move CPA and ROAS.
          </p>
          <p>
            My path has taken me from engineering at BITS Pilani to digital
            strategy at GenY Medium, AI-platform customer success at Pixis, the
            in-house marketing team at Plug Power, and most recently a product
            marketing internship at Sensata during my M.S. in Marketing
            Analytics at Simon Business School.
          </p>
          <p>
            I love the part of the job where messy data becomes a clear bet —
            and the bet pays off.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-zinc-200 p-6 bg-zinc-50">
            <h3 className="text-sm font-semibold text-zinc-900">Quick facts</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-zinc-500">Based in</dt>
                <dd className="text-zinc-900">New York, USA</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Education</dt>
                <dd className="text-zinc-900">M.S. Simon (Rochester)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Focus</dt>
                <dd className="text-zinc-900">Marketing Analytics</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Open to</dt>
                <dd className="text-zinc-900">Full-time roles</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
