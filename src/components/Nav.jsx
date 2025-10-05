export default function Nav() {
  return <div className="w-full sm:w-11/12 md:max-w-6xl mx-auto flex items-center justify-between px-6 py-5 mt-5 rounded-2xl bg-black/60 text-white trans">
    <div className="flex items-center justify-center">
      <h1 className="text-4xl font-bold text-center">MR</h1>
    </div>

    <nav className="flex gap-4 text-sm sm:text-base">
      <a href="/about" className="hover:text-gray-400">About</a>
      <a href="/skills" className="hover:text-gray-400">Skills</a>
      <a href="/portfolio" className="hover:text-gray-400">Portfolio</a>
      <a href="/experiences" className="hover:text-gray-400">Experience</a>
      <a href="/social" className="hover:text-gray-400">Social</a>
    </nav>
  </div>;
}