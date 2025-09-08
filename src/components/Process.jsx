// src/components/Process.jsx
const steps = [
  { title: "Discover", text: "30-min call • goals, risks, env." },
  { title: "Assess", text: "Coverage & flakiness audit; tooling fit." },
  { title: "Prioritize", text: "Critical paths, integrations, data edges." },
  { title: "Implement", text: "Manual pack + automation build (<90 days)." },
  { title: "Report", text: "Dashboards & alerts leaders use." },
];

export default function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-gray-900">How We Work</h2>
        <p className="mt-2 text-gray-600">A focused path from discovery to visible quality.</p>
        <ol className="mt-10 grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm">
              <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600 font-bold">{i+1}</div>
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
