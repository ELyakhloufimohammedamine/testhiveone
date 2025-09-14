export default function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative py-16 md:py-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        {children}
      </div>
    </section>
  )
}
