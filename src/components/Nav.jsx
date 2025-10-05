export default function Nav() {
  return <div className="fixed top-5 w-full flex justify-center z-50">
    <div className="w-full sm:w-11/12 md:max-w-7xl mx-auto flex items-center justify-between px-6 py-5 mt-5 rounded-2xl bg-black/60 backdrop-blur-md text-white trans">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center cursor-pointer">
          Angel
          <span className="hover:text-green-400 transition-colors duration-400">Dev</span>
        </h1>
      </div>

      <nav className="flex gap-4 text-sm sm:text-base font-semibold">
        <a
          href="#about"
          className="relative hover:text-green-500 px-2 py-1 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
        >
          Acerca de Mi
        </a>

        <a
          href="#skills"
          className="relative hover:text-green-500 px-2 py-1 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
        >
          Habilidades
        </a>

        <a
          href="#portfolio"
          className="relative hover:text-green-500 px-2 py-1 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
        >
          Portafolio
        </a>

        <a
          href="#experiences"
          className="relative hover:text-green-500 px-2 py-1 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
        >
          Experiencia
        </a>

        <a
          href="#social"
          className="relative hover:text-green-500 px-2 py-1 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
        >
          Contacto
        </a>
      </nav>


    </div>
  </div>;
}