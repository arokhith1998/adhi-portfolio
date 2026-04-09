export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        About
      </h2>
      <div className="mt-6 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3 space-y-4 text-zinc-300 leading-relaxed">
          <p>
            I work at the intersection of product marketing and pricing —
            backed by four years running PPC, display, and Shopping campaigns,
            building GTM and positioning for new products, and shaping pricing
            strategy for B2B and D2C ecommerce brands.
          </p>
          <p>
            I&apos;m drawn to the problems where the answer sits at the
            handshake between customer insight, positioning, and price — the
            place where experimentation compounds into real revenue.
          </p>
          <p>
            My path: Mechanical Engineering at BITS Pilani → digital strategy
            and analytics at GenY Medium, Pixis, and Plug Power → M.S.
            Marketing Analytics with a Pricing specialization at Simon Business
            School → Product Marketing at Sensata Technologies.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900/50">
            <h3 className="text-sm font-semibold text-zinc-100">Quick facts</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-zinc-500">Based in</dt>
                <dd className="text-zinc-100">Boston, MA</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Focus</dt>
                <dd className="text-zinc-100">Product · Pricing</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Education</dt>
                <dd className="text-zinc-100">M.S. Simon (Rochester)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Open to</dt>
                <dd className="text-zinc-100">Full-time roles</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
