import { useState } from "react"

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [success, setSuccess] = useState(false)

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

    setSuccess(false)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      alert("Silakan isi semua data terlebih dahulu.")
      return
    }

    setSuccess(true)

    setForm({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-[#06172A] text-white">

      <section className="px-6 pt-16 pb-12">
        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#FF4A4A] font-semibold uppercase tracking-widest">
            Contact Us
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Arkana Technology
          </h1>

          <p className="mt-5 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            untuk konsultasi, perbaikan, maintenance,
            dan kebutuhan teknologi lainnya.
          </p>

        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="bg-[#0F2942] border border-slate-700 rounded-2xl p-8">

            <p className="text-[#FF4A4A] font-semibold uppercase tracking-widest">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Informasi Kontak
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Jangan ragu untuk menghubungi Arkana Technology untuk
              mendapatkan informasi mengenai layanan yang kami sediakan.
            </p>

            <div className="mt-8 flex gap-4">

              <div className="w-12 h-12 shrink-0 rounded-xl bg-[#06172A] border border-slate-700 flex items-center justify-center">
                <span className="text-blue-400 text-xl">
                  📍
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Alamat
                </h3>

                <p className="mt-1 text-slate-400">
                  Jl. Teknologi No. 10, Bandung
                </p>
              </div>

            </div>


            <div className="mt-6 flex gap-4">

              <div className="w-12 h-12 shrink-0 rounded-xl bg-[#06172A] border border-slate-700 flex items-center justify-center">
                <span className="text-blue-400 text-xl">
                  ✉️
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Email
                </h3>

                <p className="mt-1 text-slate-400">
                  info@arkanatechnology.com
                </p>
              </div>

            </div>

            <div className="mt-6 flex gap-4">

              <div className="w-12 h-12 shrink-0 rounded-xl bg-[#06172A] border border-slate-700 flex items-center justify-center">
                <span className="text-blue-400 text-xl">
                  📱
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  WhatsApp
                </h3>

                <p className="mt-1 text-slate-400">
                  +62 812-3456-7890
                </p>
              </div>

            </div>

            <div className="mt-6 flex gap-4">

              <div className="w-12 h-12 shrink-0 rounded-xl bg-[#06172A] border border-slate-700 flex items-center justify-center">
                <span className="text-blue-400 text-xl">
                  📷
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Instagram
                </h3>

                <p className="mt-1 text-slate-400">
                  @arkanatechnology
                </p>
              </div>

            </div>

          </div>

          <div className="bg-[#0F2942] border border-slate-700 rounded-2xl p-8">

            <p className="text-[#FF4A4A] font-semibold uppercase tracking-widest">
              Send Message
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Kirim Pesan
            </h2>


            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              <div>

                <label className="block mb-2 font-medium text-white">
                  Nama
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama"
                  className="w-full bg-[#06172A] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium text-white">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Masukkan email"
                  className="w-full bg-[#06172A] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium text-white">
                  Pesan
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan Anda"
                  rows="5"
                  className="w-full bg-[#06172A] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition"
                ></textarea>

              </div>

              <button
                type="submit"
                className="w-full bg-[#FF4A4A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
              >
                Kirim Pesan
              </button>

              {success && (
                <p className="text-green-400 text-center font-medium">
                  Pesan berhasil dikirim!
                </p>
              )}

            </form>

          </div>

        </div>
      </section>

    </div>
  )
}

export default Contact