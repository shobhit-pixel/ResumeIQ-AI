export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        <h1 className="text-lg font-bold md:text-xl">
          ResumeIQ AI
        </h1>

        {/* Mobile Menu */}
        <div className="flex gap-4 text-sm text-gray-300 md:hidden">

          <a href="#analysis" className="hover:text-blue-400">
            Analyze
          </a>

          <a href="#about" className="hover:text-blue-400">
            About
          </a>

        </div>

        {/* Desktop Menu */}
        <div className="hidden gap-8 text-gray-300 md:flex">

          <a href="#features" className="hover:text-blue-400">
            Features
          </a>

          <a href="#analysis" className="hover:text-blue-400">
            ATS Analysis
          </a>

          <a href="#about" className="hover:text-blue-400">
            About
          </a>

        </div>

      </div>

    </nav>
  );
}