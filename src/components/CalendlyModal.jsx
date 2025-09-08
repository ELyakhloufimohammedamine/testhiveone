import { PopupModal } from 'react-calendly'
export default function CalendlyModal({ url, open, onClose }) {
if (!open) return null
return (
<div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid
place-items-center bg-black/70 p-4">
<div className="relative w-full max-w-3xl overflow-hidden rounded-2xl
bg-neutral-900 shadow-soft border border-white/10">
<button
onClick={onClose}
aria-label="Close scheduling modal"
className="absolute right-3 top-3 rounded-full bg-white/10 px-3
py-1 text-sm hover:bg-white/20"
>Close</button>
<PopupModal
url={url}
onModalClose={onClose}
rootElement={document.getElementById('root')}
open={true}
/>
</div>
</div>
)
}
