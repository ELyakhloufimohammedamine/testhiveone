import { motion as Motion } from "framer-motion"

const posts = [
  {
    title: "Risk-driven QA: what to test first",
    excerpt: "A simple model to prioritize critical paths, integrations, and data edges.",
    date: "2025-09-01",
    href: "https://www.linkedin.com/company/testhive-nador/posts/?feedView=all",
    tag: "Strategy",
    img: "/assets/risk.png", // optional thumbnail
  },
  {
    title: "Playwright suite stabilized in 6 weeks",
    excerpt: "How we reduced flaky tests and restored confidence in nightly builds.",
    date: "2025-08-20",
    href: "https://www.linkedin.com/company/testhive-nador/posts/?feedView=all",
    tag: "Case Study",
    img: "/assets/automation.png",
  },
  {
    title: "CI dashboards leaders actually read",
    excerpt: "Three signal metrics your CTO cares about—and two they don’t.",
    date: "2025-08-08",
    href: "https://www.linkedin.com/company/testhive-nador/posts/?feedView=all",
    tag: "Reporting",
    img: "/assets/reporting.png",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">News & Blogs</h2>
          <a
            className="text-sm font-medium text-sky-600 hover:text-sky-700"
            href="https://www.linkedin.com/company/testhive-nador/posts/?feedView=all"
            target="_blank" rel="noreferrer"
          >
            Follow on LinkedIn →
          </a>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Motion.li
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              {p.img && (
                <div className="aspect-[16/9] w-full bg-gray-50">
                  <img src={p.img} alt={p.title} className="h-full w-full object-contain p-3" loading="lazy" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="inline-flex items-center rounded-full bg-sky-50 px-2 py-1 font-medium text-sky-700">{p.tag}</span>
                  <time dateTime={p.date}>{new Date(p.date).toLocaleDateString()}</time>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Read on LinkedIn
                </a>
              </div>
            </Motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
