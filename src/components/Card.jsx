function Card({ title, description, icon }) {
  return (
    <div className="bg-[#0F2942] border border-slate-700 rounded-2xl p-7 hover:border-[#FF4A4A] hover:-translate-y-1 transition duration-300">

      <div className="w-14 h-14 rounded-xl bg-[#06172A] border border-slate-700 flex items-center justify-center mb-6">
        <span className="text-2xl">
          {icon}
        </span>
      </div>

      <h2 className="text-xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-4 text-slate-400 leading-relaxed">
        {description}
      </p>

      <div className="mt-6 w-10 h-1 bg-[#FF4A4A] rounded-full"></div>

    </div>
  )
}

export default Card