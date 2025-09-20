// src/components/Navbar.jsx
import { NavLink, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui";

const base = "text-sm font-medium transition-colors";
const active = "text-sky-600 font-semibold";
const idle = "text-slate-600 hover:text-slate-900";

export default function Navbar({ onBook }) {
  const [openDropdown, setOpenDropdown] = useState(null); // desktop dropdowns
  const [mobileOpen, setMobileOpen] = useState(false);    // mobile drawer
  const mobileRef = useRef(null);

  const toggleDropdown = (name) => {
    setOpenDropdown((cur) => (cur === name ? null : name));
  };

  // Close mobile menu on ESC or outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
    const onClick = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [mobileOpen]);

  // Utility: close all menus
  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={closeAll}>
          <img
            src="/assets/testHive.png"
            width={40}
            height={40}
            alt="TestHive"
            className="rounded-md"
          />
          <span className="text-xl font-bold tracking-tight">
            test<span className="text-sky-500">Hive</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/whytesthive" className={({ isActive }) => `${base} ${isActive ? active : idle}`}>
            Why TestHive?
          </NavLink>

          {/* Pricing dropdown (desktop) */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("pricing")}
              className={`${base} ${idle} flex items-center gap-1`}
              aria-haspopup="menu"
              aria-expanded={openDropdown === "pricing"}
            >
              Pricing <ChevronDown className="h-4 w-4" />
            </button>
            {openDropdown === "pricing" && (
              <div
                role="menu"
                className="absolute left-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-lg p-2"
              >
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm ${isActive ? "text-sky-600 font-medium" : "text-slate-700 hover:bg-slate-50"}`
                  }
                  onClick={closeAll}
                  role="menuitem"
                >
                  Pricing Overview
                </NavLink>
                <NavLink
                  to="/accelerator"
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm ${isActive ? "text-sky-600 font-medium" : "text-slate-700 hover:bg-slate-50"}`
                  }
                  onClick={closeAll}
                  role="menuitem"
                >
                  Accelerator
                </NavLink>
                <NavLink
                  to="/partner"
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm ${isActive ? "text-sky-600 font-medium" : "text-slate-700 hover:bg-slate-50"}`
                  }
                  onClick={closeAll}
                  role="menuitem"
                >
                  Partner Program
                </NavLink>
              </div>
            )}
          </div>

          {/* Blog dropdown (desktop) */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("blog")}
              className={`${base} ${idle} flex items-center gap-1`}
              aria-haspopup="menu"
              aria-expanded={openDropdown === "blog"}
            >
              Blog <ChevronDown className="h-4 w-4" />
            </button>
            {openDropdown === "blog" && (
              <div
                role="menu"
                className="absolute left-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white shadow-lg p-2"
              >
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm ${isActive ? "text-sky-600 font-medium" : "text-slate-700 hover:bg-slate-50"}`
                  }
                  onClick={closeAll}
                  role="menuitem"
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/nearshore"
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm ${isActive ? "text-sky-600 font-medium" : "text-slate-700 hover:bg-slate-50"}`
                  }
                  onClick={closeAll}
                  role="menuitem"
                >
                  Nearshore
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/faq" className={({ isActive }) => `${base} ${isActive ? active : idle}`}>
            FAQ
          </NavLink>

          {/* CTA */}
          <Button
            onClick={() => {
              closeAll();
              onBook?.();
            }}
            className="ml-2 rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-5 py-2 text-white font-semibold shadow-md hover:brightness-110 active:scale-95"
          >
            Book a Call
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 shadow-sm text-slate-700"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/40" />
      )}

      {/* Mobile drawer */}
      <div
        ref={mobileRef}
        className={`fixed inset-x-0 top-0 z-50 origin-top rounded-b-2xl border-b border-slate-200 bg-white p-4 shadow-xl md:hidden transition-transform duration-300 ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3" onClick={closeAll}>
              <img src="/assets/testHive.png" width={36} height={36} alt="TestHive" className="rounded-md" />
              <span className="text-lg font-bold tracking-tight">
                test<span className="text-sky-500">Hive</span>
              </span>
            </Link>
            <button
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 shadow-sm text-slate-700"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile links */}
          <nav className="mt-6 space-y-1">
            <NavLink
              to="/whytesthive"
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 ${isActive ? "bg-sky-50 text-sky-700" : "text-slate-700 hover:bg-slate-50"}`
              }
              onClick={closeAll}
            >
              Why TestHive?
            </NavLink>

            {/* Pricing group */}
            <div className="rounded-lg border border-slate-200">
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Pricing
              </div>
              <div className="px-1 pb-2">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    `block rounded-md px-2.5 py-2 text-sm ${isActive ? "bg-sky-50 text-sky-700" : "text-slate-700 hover:bg-slate-50"}`
                  }
                  onClick={closeAll}
                >
                  Pricing Overview
                </NavLink>
                <NavLink
                  to="/accelerator"
                  className={({ isActive }) =>
                    `block rounded-md px-2.5 py-2 text-sm ${isActive ? "bg-sky-50 text-sky-700" : "text-slate-700 hover:bg-slate-50"}`
                  }
                  onClick={closeAll}
                >
                  Accelerator
                </NavLink>
                <NavLink
                  to="/partner"
                  className={({ isActive }) =>
                    `block rounded-md px-2.5 py-2 text-sm ${isActive ? "bg-sky-50 text-sky-700" : "text-slate-700 hover:bg-slate-50"}`
                  }
                  onClick={closeAll}
                >
                  Partner Program
                </NavLink>
              </div>
            </div>

            {/* Blog group */}
            <div className="rounded-lg border border-slate-200">
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Content
              </div>
              <div className="px-1 pb-2">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `block rounded-md px-2.5 py-2 text-sm ${isActive ? "bg-sky-50 text-sky-700" : "text-slate-700 hover:bg-slate-50"}`
                  }
                  onClick={closeAll}
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/nearshore"
                  className={({ isActive }) =>
                    `block rounded-md px-2.5 py-2 text-sm ${isActive ? "bg-sky-50 text-sky-700" : "text-slate-700 hover:bg-slate-50"}`
                  }
                  onClick={closeAll}
                >
                  Nearshore
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 ${isActive ? "bg-sky-50 text-sky-700" : "text-slate-700 hover:bg-slate-50"}`
              }
              onClick={closeAll}
            >
              FAQ
            </NavLink>

            {/* CTA */}
            <Button
              onClick={() => {
                closeAll();
                onBook?.();
              }}
              className="mt-3 w-full rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-5 py-2 text-white font-semibold shadow-md hover:brightness-110 active:scale-95"
            >
              Book a Call
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
