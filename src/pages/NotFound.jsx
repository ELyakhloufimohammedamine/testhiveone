import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="mt-2 text-slate-600">Page not found.</p>
      <Link to="/" className="mt-6 inline-block rounded-xl border px-4 py-2 text-sm">Go home</Link>
    </div>
  )
}
