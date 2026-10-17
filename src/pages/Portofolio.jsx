const portofolios = [
  {
    title: "Computer Hardware Diagnostics",
    description:
      "Perawatan dan pemeriksaan komputer untuk menjaga perangkat tetap berjalan dengan baik.",
    image: "/P1 (1).jpeg",
  },
  {
    title: "CRT Monitor Repair",
    description:
      "Pemeriksaan dan perbaikan monitor komputer tabung untuk mengidentifikasi kerusakan serta mengembalikan fungsi perangkat agar dapat digunakan kembali.",
    image: "/P1 (2).jpeg",
  },
  {
    title: "Laptop Motherboard Repair",
    description:
      "Pemeriksaan komponen motherboard laptop untuk mengidentifikasi kerusakan dan menentukan langkah perbaikan pada perangkat keras.",
    image: "/P1 (3).jpeg",
  },
  {
    title: "Industrial Machinery Repair",
    description:
      "Perbaikan dan penanganan mesin industri di lingkungan pabrik untuk mengatasi gangguan serta menjaga mesin agar dapat beroperasi dengan baik.",
    image: "/P1 (4).jpeg",
  },
  {
    title: "Industrial Equipment",
    description:
      "Penanganan dan perbaikan peralatan industri agar dapat digunakan secara optimal.",
    image: "/P1 (5).jpeg",
  },
  {
    title: "Industrial Control Panel Repair",
    description:
      "Pemeriksaan dan pemeliharaan instalasi serta komponen kelistrikan industri untuk membantu menjaga keamanan dan keandalan operasional peralatan pabrik.",
    image: "/P1 (6).jpeg",
  },
  {
    title: "Computer Hardware Repair & BIOS Reinstallation",
    description:
      "Proses pemeriksaan dan pembongkaran CPU untuk mengidentifikasi kerusakan perangkat keras serta melakukan instalasi ulang BIOS agar komputer dapat berfungsi kembali.",
    image: "/P1 (8).jpeg",
  },
  {
    title: "Repair Inventory & Documentation",
    description:
      "Kegiatan pencatatan dan pendataan barang serta perangkat yang masuk untuk diperbaiki guna memudahkan pemantauan status dan pengelolaan pekerjaan perbaikan.",
    image: "/P1 (9).jpeg",
  },
  {
    title: "PCB Design & Development",
    description:
      "Proses perancangan desain Printed Circuit Board (PCB) berdasarkan skema dan ukuran yang ditentukan sebagai dasar pembuatan rangkaian elektronika.",
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