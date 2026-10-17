const portofolios = [
  {
    title: "Computer Maintenance",
    description:
      "Perawatan dan pemeriksaan komputer untuk menjaga perangkat tetap berjalan dengan baik.",
    image: "/P1 (1).jpeg",
  },
  {
    title: "Computer Repair",
    description:
      "Perbaikan komputer dan laptop untuk mengatasi berbagai masalah hardware maupun software.",
    image: "/P1 (2).jpeg",
  },
  {
    title: "Electronics Repair",
    description:
      "Pemeriksaan dan perbaikan perangkat elektronika serta penggantian komponen yang rusak.",
    image: "/P1 (3).jpeg",
  },
  {
    title: "PCB Development",
    description:
      "Perancangan dan pengembangan PCB sesuai kebutuhan perangkat elektronika.",
    image: "/P1 (4).jpeg",
  },
  {
    title: "Industrial Equipment",
    description:
      "Penanganan dan perbaikan peralatan industri agar dapat digunakan secara optimal.",
    image: "/P1 (5).jpeg",
  },
  {
    title: "Preventive Maintenance",
    description:
      "Pemeriksaan berkala untuk mencegah kerusakan dan menjaga kondisi perangkat.",
    image: "/P1 (6).jpeg",
  },
  {
    title: "Computer Assembly",
    description:
      "Perakitan komputer berdasarkan kebutuhan dan spesifikasi yang telah ditentukan.",
    image: "/P1 (7).jpeg",
  },
  {
    title: "Industrial Control Repair",
    description:
      "Perbaikan sistem kontrol industri untuk membantu menjaga proses kerja perangkat.",
    image: "/P1 (8).jpeg",
  },
  {
    title: "Electronic Device Repair",
    description:
      "Perbaikan perangkat elektronik dengan melakukan pemeriksaan dan identifikasi kerusakan.",
    image: "/P1 (9).jpeg",
  },
  {
    title: "Technical Support",
    description:
      "Memberikan bantuan teknis, analisis masalah, dan rekomendasi solusi kepada pelanggan.",
    image: "/P1 (10).jpeg",
  },
]

function Portofolio() {
  return (
    <div className="min-h-screen bg-[#06172A] text-white">

      <section className="px-6 pt-16 pb-12">
        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#FF4A4A] font-semibold uppercase tracking-widest">
            Our Portfolio
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Project & Pekerjaan
          </h1>

          <p className="mt-5 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Beberapa project dan pekerjaan yang telah dilakukan oleh
            Arkana Technology di bidang teknologi, elektronika, dan
            engineering.
          </p>

        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {portofolios.map((portofolio) => (
              <div
                key={portofolio.title}
                className="group bg-[#0F2942] border border-slate-700 rounded-2xl overflow-hidden hover:border-[#FF4A4A] transition duration-300"
              >

                <div className="overflow-hidden">
                  <img
                    src={portofolio.image}
                    alt={portofolio.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">

                  <h2 className="text-xl font-bold text-white">
                    {portofolio.title}
                  </h2>

                  <p className="mt-3 text-slate-400 leading-relaxed">
                    {portofolio.description}
                  </p>

                  <div className="mt-5 w-10 h-1 bg-[#FF4A4A] rounded-full"></div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  )
}

export default Portofolio