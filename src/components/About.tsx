export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-200">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        About
      </h2>
      <div className="mt-6 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            I&apos;m a performance marketer who&apos;s spent the last four
            years running PPC, display, and Shopping campaigns across paid
            search, social, and programmatic — for both B2B and D2C ecommerce
            brands.
          </p>
          <p>
            From rebuilding Google Merchant Center and Shopping feeds to
            delivering -25% CPA through bid optimization, and running
            $1.4M+ in media budgets across global clients, I care about the
            part of the job where messy data becomes a clear bet — and the
            bet pays off.
          </p>
          <p>
            My path: Mechanical Engineering at BITS Pilani → digital
            strategy and analytics at GenY Medium, Pixis, and Plug Power →
            M.S. in Marketing Analytics at Simon Business School → Growth &
            Product Marketing at Sensata Technologies.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-zinc-200 p-6 bg-zinc-50">
            <h3 className="text-sm font-semibold text-zinc-900">Quick facts</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-zinc-500">Based in</dt>
                <dd className="text-zinc-900">Boston, MA</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Education</dt>
                <dd className="text-zinc-900">M.S. Simon (Rochester)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Focus</dt>
                <dd className="text-zinc-900">PPC · Display · Marketplace</dd>
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
