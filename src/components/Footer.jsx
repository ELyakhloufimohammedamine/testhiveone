export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo + brand */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/testHive.png"
              alt="TestHive logo"
              className="h-8 w-8 rounded-md"
            />
            <span className="text-lg font-semibold text-gray-900">
              test<span className="text-sky-500">Hive</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">
              Features
            </a>
            <a href="#testimonials" className="hover:text-gray-900">
              Proof
            </a>
            <a href="#pricing" className="hover:text-gray-900">
              Pricing
            </a>
            <a href="#contact" className="hover:text-gray-900">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} TestHive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
