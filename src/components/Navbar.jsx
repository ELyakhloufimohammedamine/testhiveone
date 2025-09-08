import { Button } from "./ui";

export default function Navbar({ onBook }) {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Logo + Brand */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/assets/testHive.png" // keep the logo in /public/testhive-logo.png
            width={69}
            height={69}
            alt="TestHive logo"
            className="rounded-md"
          />
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            test<span className="text-sky-500">Hive</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-14 text-sm font-medium text-slate-700">
          {[
            { href: "#features", label: "Features" },
            { href: "#pricing", label: "Pricing" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
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

          {/* Gradient CTA — same look as your 'Sign in', now 'Book a Call' */}
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

        {/* Mobile CTA */}
        <div className="md:hidden">
          <Button
            onClick={onBook}
            size="sm"
            className="rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500
                       px-4 py-2 text-white font-semibold shadow-md active:scale-95"
          >
            Book
          </Button>
        </div>
      </div>
    </header>
  );
}
