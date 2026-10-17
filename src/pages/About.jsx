const team = [
  {
    name: "Andika Pratama",
    description:
      "Pemilik perusahaan yang bertanggung jawab terhadap pengelolaan dan arah perusahaan.",
  },
  {
    name: "Nabila Putri",
    description:
      "Mengelola administrasi, arsip, surat-menyurat, dan keuangan perusahaan.",
  },
  {
    name: "Rizky Ramadhan",
    description:
      "Mengelola data perusahaan, software, sistem, dan kebutuhan IT.",
  },
  {
    name: "Tim Engineering",
    description:
      "5 engineer yang menangani perbaikan komputer, elektronika, peralatan industri, PCB, dan maintenance.",
  },
]

function About() {
  return (
    <div className="min-h-screen bg-[#06172A] text-white">

      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#FF4A4A] font-semibold uppercase tracking-widest">
            About Us
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Tentang Arkana Technology
          </h1>

          <p className="mt-5 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Mengenal lebih dekat Arkana Technology sebagai perusahaan yang
            bergerak di bidang teknologi, elektronika, dan engineering.
          </p>

        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-[#FF4A4A] font-semibold uppercase tracking-widest">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Perjalanan Arkana Technology
            </h2>

            <p className="mt-6 text-slate-300 leading-relaxed">
              Arkana Technology didirikan untuk menyediakan solusi di bidang
              teknologi, elektronika, dan engineering. Perusahaan ini pada
              awalnya berfokus pada layanan perbaikan dan maintenance,
              kemudian berkembang dengan menyediakan layanan komputer,
              elektronika, peralatan industri, hingga pengembangan PCB.
            </p>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Setiap pekerjaan dilakukan dengan mengutamakan ketelitian,
              kualitas, dan kebutuhan pelanggan agar solusi yang diberikan
              dapat digunakan secara optimal.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <img
              src="/about 1.jpeg"
              alt="Aktivitas Arkana Technology"
              className="w-full h-62.5 object-cover rounded-2xl border border-slate-700 shadow-lg"
            />

            <img
              src="/about 2.jpeg"
              alt="Kegiatan Arkana Technology"
              className="w-full h-62.5 object-cover rounded-2xl border border-slate-700 shadow-lg"
            />

          </div>

        </div>
      </section>

      <section className="bg-[#0F2942] px-6 py-20">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-[#FF4A4A] font-semibold uppercase tracking-widest">
              Our Direction
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Visi & Misi Arkana Technology
            </h2>

          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div className="bg-[#06172A] border border-slate-700 rounded-2xl p-8 hover:border-blue-400 transition">

              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                <span className="text-blue-400 text-xl">
                  ◈
                </span>
              </div>

              <h3 className="text-2xl font-bold text-center">
                Visi
              </h3>

              <p className="mt-4 text-slate-300 leading-relaxed">
                Menjadi perusahaan teknologi dan engineering yang terpercaya
                dalam menyediakan solusi inovatif di bidang komputer,
                elektronika, dan industri.
              </p>

            </div>

            <div className="bg-[#06172A] border border-slate-700 rounded-2xl p-8 hover:border-[#FF4A4A] transition">

              <div className="w-12 h-12 rounded-lg bg-[#FF4A4A]/10 flex items-center justify-center mb-6">
                <span className="text-[#FF4A4A] text-xl">
                  ◆
                </span>
              </div>

              <h3 className="text-2xl font-bold text-center">
                Misi
              </h3>

              <ul className="mt-4 list-disc list-inside text-slate-300 space-y-3">

                <li>
                  Memberikan layanan repair dan maintenance yang berkualitas.
                </li>

                <li>
                  Menyediakan solusi teknologi sesuai kebutuhan pelanggan.
                </li>

                <li>
                  Mengembangkan layanan di bidang elektronika dan engineering.
                </li>

                <li>
                  Mengutamakan ketelitian, profesionalitas, dan kepuasan
                  pelanggan.
                </li>

                <li>
                  Mengikuti perkembangan teknologi untuk meningkatkan kualitas
                  layanan.
                </li>

              </ul>

            </div>

          </div>

        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-[#FF4A4A] font-semibold uppercase tracking-widest">
              Our Team
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Profil Tim
            </h2>

            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              Tim Arkana Technology terdiri dari berbagai bagian yang
              mendukung pengelolaan perusahaan dan pelaksanaan pekerjaan
              teknis.
            </p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">

            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#0F2942] border border-slate-700 rounded-2xl p-6 hover:border-[#FF4A4A] transition"
              >

                <div className="w-14 h-14 mx-auto rounded-full bg-[#06172A] border border-slate-600 flex items-center justify-center mb-5">
                  <span className="text-blue-400 text-xl">
                    👤
                  </span>
                </div>

                <h3 className="text-xl font-bold text-center">
                  {member.name}
                </h3>

                <p className="mt-3 text-slate-400 leading-relaxed text-center">
                  {member.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  )
}

export default About