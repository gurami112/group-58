export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 backdrop-blur bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight">Sea Pigs</a>
          <nav className="flex gap-4 text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#species" className="hover:text-white">Species</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 space-y-16">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-black">Meet the Sea Pigs</h1>
            <p className="mt-3 text-slate-300">Deep-sea cucumbers that roam abyssal plains and look adorably odd.</p>
            <a href="#species" className="inline-block mt-5 px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600">Explore</a>
          </div>
          <img src="https://images.unsplash.com/photo-1544551763-7ef4200b69c3?q=80&w=1200&auto=format&fit=crop" className="rounded-2xl border border-slate-800" />
        </section>

        <section id="about" className="space-y-3">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="text-slate-300">Sea pigs are holothurians living 1000–6000m deep, feeding on organic particles on the ocean floor.</p>
        </section>

        <section id="species" className="space-y-4">
          <h2 className="text-2xl font-bold">Species</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900">Scotoplanes globosa</div>
            <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900">Scotoplanes mutabilis</div>
            <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900">Scotoplanes sp.</div>
          </div>
        </section>

        <section id="gallery" className="space-y-4">
          <h2 className="text-2xl font-bold">Gallery</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1470167290877-7d5d3446de4c?q=80&w=1200&auto=format&fit=crop" className="rounded-2xl border border-slate-800" />
            <img src="https://images.unsplash.com/photo-1470167290877-7d5d3446de4c?q=80&w=1200&auto=format&fit=crop" className="rounded-2xl border border-slate-800" />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-400">
        © Sea Pigs
      </footer>
    </div>
  )
}
