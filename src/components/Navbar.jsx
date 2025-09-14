// src/components/Navbar.jsx
import { useState, useEffect } from "react"
import { Button } from "./ui"

export default function Navbar({ onBook }) {
  const [open, setOpen] = useState(false)
  const [elevated, setElevated] = useState(false)

  // add a tiny shadow when scrolling
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "#pricing",  label: "Pricing"  },
    { href: "#nearshore", label: "Nearshore" },
      { href: "#faq",      label: "FAQ"      },  // ← new
  { href: "#blog",     label: "Blog"     },
    { href: "#contact",  label: "Contact"  },
    // add to links


  ]

  return (
    <header
      className={`sticky top-0 z-40 bg-white/80 backdrop-blur transition-shadow ${
        elevated ? "shadow-sm" : "shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">

        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/assets/testHive.png"   /* place logo in /public/testhive-logo.png */
            width={56}
            height={56}
            alt="TestHive logo"
            className="rounded-md"
          />
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            test<span className="text-sky-500">Hive</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-14 text-sm font-medium text-slate-700">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative transition-colors hover:text-slate-900
                         after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                         after:bg-sky-400 after:transition-all after:duration-300
                         hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <Button
            onClick={onBook}
            aria-label="Book your call"
            className="ml-6 rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500
                       px-5 py-2 text-white font-semibold shadow-md transition
                       hover:brightness-110 active:scale-95"
          >
            Book a Call
          </Button>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <Button
            onClick={onBook}
            size="sm"
            className="rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500
                       px-4 py-2 text-white font-semibold shadow-md active:scale-95"
          >
            Book
          </Button>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white
                       text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-95"
          >
            {/* hamburger / close */}
            <svg
              className={`h-5 w-5 transition-transform ${open ? "rotate-90" : ""}`}
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              {open ? (
                <g><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></g>
              ) : (
                <g><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></g>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300
                    ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="mx-auto max-w-7xl px-6 pb-4">
          <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="p-3">
              <Button
                onClick={() => { setOpen(false); onBook?.(); }}
                className="w-full rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500
                           px-5 py-2 text-white font-semibold shadow-md active:scale-95"
              >
                Book a Call
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
