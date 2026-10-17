function Footer() {
  return (
    <footer className="bg-slate-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold">
            Arkana Technology
          </h2>

          <p className="mt-3 text-slate-300">
            Technology • Electronics • Engineering
          </p>

          <p className="mt-4 text-slate-400">
            Menyediakan solusi teknologi, elektronika, dan engineering
            melalui layanan repair, maintenance, dan pengembangan perangkat.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <div className="space-y-2 text-slate-300">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>Contact</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact
          </h3>

          <div className="space-y-2 text-slate-300">
            <p>Jl. Teknologi No. 10, Bandung</p>
            <p>info@arkanatechnology.com</p>
            <p>+62 812-3456-7890</p>
            <p>Instagram: @arkanatechnology</p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
        <p>
          © 2026 Arkana Technology. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer