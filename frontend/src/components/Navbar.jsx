export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/50 px-8 py-4 backdrop-blur-md">

      <h1 className="text-xl font-bold">
        ResumeIQ AI
      </h1>

      <div className="flex gap-8 text-gray-300">
        <a href="#">Features</a>
        <a href="#">ATS Analysis</a>
        <a href="#">Dashboard</a>
      </div>

    </nav>
  )
}