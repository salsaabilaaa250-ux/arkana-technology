import { Link } from "react-router"

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <h1 className="text-2xl font-bold text-center md:text-left">
            Arkana Technology
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">

            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>

            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>

            <Link to="/services" className="hover:text-blue-400">
              Service
            </Link>

            <Link to="/portofolio" className="hover:text-blue-400">
              Portofolio
            </Link>

            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>

          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar