export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/50 px-8 py-4 backdrop-blur-md">

      <h1 className="text-xl font-bold">
        ResumeIQ AI
      </h1>

      <div className="flex gap-8 text-gray-300"> 
        <a
          href="#analysis"
          className="transition hover:text-blue-400"
        >
          ATS Analysis
        </a>
        <a
          href="#features"
          className="transition hover:text-blue-400"
        >
          Features
        </a>

       

        <a
  href="#about"
  className="transition hover:text-blue-400"
>
  About
</a>
      </div>

    </nav>
  )
}