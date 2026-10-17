import Card from "../components/Card"

const services = [
  {
    title: "Computer Repair",
    description:
      "Perbaikan dan troubleshooting komputer serta laptop, termasuk perbaikan hardware, instalasi sistem operasi, dan upgrade perangkat.",
    icon: "💻",
  },
  {
    title: "Electronics Repair",
    description:
      "Pemeriksaan dan perbaikan perangkat serta rangkaian elektronika, termasuk penggantian komponen yang mengalami kerusakan.",
    icon: "🔌",
  },
  {
    title: "Industrial Equipment",
    description:
      "Perbaikan dan maintenance berbagai peralatan yang digunakan dalam kebutuhan industri agar dapat bekerja secara optimal.",
    icon: "⚙️",
  },
  {
    title: "PCB Development",
    description:
      "Perancangan layout, pengembangan, dan pembuatan PCB sesuai kebutuhan perangkat elektronika.",
    icon: "🔧",
  },
  {
    title: "Maintenance",
    description:
      "Pemeriksaan berkala, preventive maintenance, serta identifikasi masalah untuk menjaga kondisi perangkat.",
    icon: "🛠️",
  },
  {
    title: "Technical Support",
    description:
      "Konsultasi, analisis masalah, troubleshooting, dan rekomendasi solusi terkait kebutuhan teknologi.",
    icon: "💡",
  },
]

function Services() {
  return (
    <div className="min-h-screen bg-[#06172A] text-white">

      <section className="px-6 pt-16 pb-12">
        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#FF4A4A] font-semibold uppercase tracking-widest">
            Our Services
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Layanan Arkana Technology
          </h1>

          <p className="mt-5 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan berbagai layanan teknologi, elektronika, dan
            engineering untuk memenuhi kebutuhan pelanggan.
          </p>

        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => (
              <Card
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}

          </div>

        </div>
      </section>

    </div>
  )
}

export default Services