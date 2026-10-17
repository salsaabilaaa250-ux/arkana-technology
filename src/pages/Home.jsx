function Home() {
  return (
    <div className="min-h-screen bg-[#06172A] text-white">

      <section
        className="relative min-h-150 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpeg')" }}
      >

        <div className="absolute inset-0 bg-[#06172A]/80"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36">

          <div className="max-w-3xl">

            <p className="text-[#FF4A4A] font-semibold tracking-widest uppercase">
              Technology • Electronics • Engineering
            </p>

            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Solusi Teknologi untuk Kebutuhan Industri dan Elektronika
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Arkana Technology menyediakan solusi teknologi, elektronika, dan
              engineering melalui layanan perbaikan, maintenance, serta
              pengembangan perangkat sesuai kebutuhan pelanggan.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <a
                href="#layanan"
                className="bg-[#FF4A4A] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-red-600 transition"
              >
                Layanan Unggul Arkana Technology
              </a>

              <a
                href="/contact"
                className="border border-blue-400 text-blue-400 px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-400 hover:text-[#06172A] transition"
              >
                Hubungi Kami
              </a>

            </div>

          </div>

        </div>
      </section>

      <section className="bg-[#06172A] px-6 py-20">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#FF4A4A] font-semibold uppercase tracking-widest">
            About Us
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Tentang Arkana Technology
          </h2>

          <p className="mt-6 text-slate-300 leading-relaxed">
            Arkana Technology merupakan perusahaan yang bergerak di bidang
            teknologi, elektronika, dan engineering. Kami menyediakan berbagai
            layanan mulai dari perbaikan komputer dan perangkat elektronika,
            maintenance peralatan industri, hingga perancangan dan
            pengembangan PCB. Setiap layanan dilakukan dengan mengutamakan
            ketelitian, kualitas, dan kebutuhan pelanggan.
          </p>

        </div>

      </section>

      <section id="layanan" className="bg-[#0F2942] px-6 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-[#FF4A4A] font-semibold uppercase tracking-widest">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              Layanan Unggulan
            </h2>

            <p className="mt-4 text-slate-300">
              Beberapa layanan utama yang kami sediakan untuk kebutuhan
              teknologi dan engineering.
            </p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-[#06172A] border border-slate-700 rounded-2xl p-6 hover:border-[#FF4A4A] transition">

              <div className="w-12 h-12 bg-[#FF4A4A]/10 rounded-lg flex items-center justify-center mb-5">
                <span className="text-[#FF4A4A] text-xl">
                  💻
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Computer Repair
              </h3>

              <p className="mt-3 text-slate-400">
                Perbaikan dan troubleshooting komputer serta laptop,
                termasuk hardware, software, dan upgrade perangkat.
              </p>

            </div>


            <div className="bg-[#06172A] border border-slate-700 rounded-2xl p-6 hover:border-[#FF4A4A] transition">

              <div className="w-12 h-12 bg-[#FF4A4A]/10 rounded-lg flex items-center justify-center mb-5">
                <span className="text-[#FF4A4A] text-xl">
                  🔌
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Electronics Repair
              </h3>

              <p className="mt-3 text-slate-400">
                Pemeriksaan dan perbaikan perangkat serta rangkaian
                elektronika yang mengalami kerusakan.
              </p>

            </div>


            <div className="bg-[#06172A] border border-slate-700 rounded-2xl p-6 hover:border-[#FF4A4A] transition">

              <div className="w-12 h-12 bg-[#FF4A4A]/10 rounded-lg flex items-center justify-center mb-5">
                <span className="text-[#FF4A4A] text-xl">
                  ⚙️
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Industrial Equipment
              </h3>

              <p className="mt-3 text-slate-400">
                Perbaikan dan maintenance peralatan industri agar dapat
                bekerja dengan baik dan optimal.
              </p>

            </div>


            <div className="bg-[#06172A] border border-slate-700 rounded-2xl p-6 hover:border-[#FF4A4A] transition">

              <div className="w-12 h-12 bg-[#FF4A4A]/10 rounded-lg flex items-center justify-center mb-5">
                <span className="text-[#FF4A4A] text-xl">
                  🔧
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                PCB Development
              </h3>

              <p className="mt-3 text-slate-400">
                Perancangan dan pengembangan PCB untuk memenuhi kebutuhan
                perangkat elektronika.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Home