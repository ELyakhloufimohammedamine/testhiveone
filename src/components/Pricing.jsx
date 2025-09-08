export default function Pricing({ onBookClick }) {
  return (
    <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">Pricing</h2>
      <p className="mt-2 max-w-2xl text-slate-600">
        Simple plans that scale with your team. Book a call for a tailored quote.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <PriceCard
          title="Starter"
          price="€799/mo"
          blurb="Best for MVPs and small teams."
          features={["Manual test pack (10 hrs/mo)","Basic regression suite","Monthly report"]}
          onBookClick={onBookClick}
          ctaLabel="Get Started"
        />
        <PriceCard
          highlighted
          title="Growth"
          price="€1,999/mo"
          blurb="Automation in &lt;90 days."
          features={["Everything in Starter","E2E automation (Cypress/Playwright/Selenium)","CI dashboards","Bi-weekly reporting"]}
          onBookClick={onBookClick}
          ctaLabel="Book a Call"
        />
        <PriceCard
          title="Enterprise"
          price="Custom"
          blurb="Custom QA program for complex environments."
          features={["Dedicated team & SLAs","Security & compliance support","24/5 coverage options"]}
          onBookClick={onBookClick}
          ctaLabel="Talk to Sales"
        />
      </div>
    </section>
  )
}

function PriceCard({ title, price, blurb, features, ctaLabel, onBookClick, highlighted }) {
  return (
    <div className={highlighted
        ? "rounded-3xl border-2 border-emerald-500 bg-white p-8 shadow-soft"
        : "rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"}>
      {highlighted && (
        <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          Most Popular
        </div>
      )}
      <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600" dangerouslySetInnerHTML={{ __html: blurb }} />
      <div className="mt-6 text-3xl font-bold text-slate-900">{price}</div>
      <ul className="mt-6 space-y-2 text-sm text-slate-600">
        {features.map((f, i) => <li key={i}>• {f}</li>)}
      </ul>
      <button
        onClick={onBookClick}
        className={highlighted
          ? "mt-6 w-full rounded-2xl bg-gradient-to-r from-emerald-600 via-sky-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:brightness-110"
          : "mt-6 w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:opacity-90"}>
        {ctaLabel}
      </button>
    </div>
  )
}
