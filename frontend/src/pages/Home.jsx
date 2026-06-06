import Navbar from "../components/Navbar";
import UploadCard from "../components/UploadCard";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      <Navbar />

      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500 opacity-20 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500 opacity-20 blur-[120px]" />\
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-32 pb-20">

        {/* Badge */}
        <div className="mb-6 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
          🚀 AI Powered Resume Analysis
        </div>

        {/* Heading */}
       <h1 className="text-center text-6xl font-bold leading-tight md:text-8xl">
  ResumeIQ
  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
    {" "}AI
  </span>
</h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-center text-lg text-gray-400 md:text-xl">
          Analyze your resume with AI, uncover missing skills,
boost ATS performance, and receive recruiter-ready recommendations.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
            Analyze Resume
          </button>

          <button className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 backdrop-blur-md transition hover:bg-white/10">
            View Demo
          </button>
        </div>

        {/* Upload Card */}
        <UploadCard />

        {/* ATS Preview Cards */}
        <div className="mt-20 grid w-full max-w-6xl gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="mb-2 text-xl font-semibold">
              ATS Score
            </h3>

            <p className="text-4xl font-bold text-green-400">
              92%
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="mb-2 text-xl font-semibold">
              Missing Skills
            </h3>

            <p className="text-gray-400">
              TypeScript, Redux
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="mb-2 text-xl font-semibold">
              Job Match
            </h3>

            <p className="text-blue-400">
              Frontend Developer 95%
            </p>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="mt-24 grid w-full max-w-6xl gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="mb-3 text-xl font-semibold">
              ATS Score Analysis
            </h3>

            <p className="text-gray-400">
              Evaluate your resume against modern ATS systems.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="mb-3 text-xl font-semibold">
              Skill Gap Detection
            </h3>

            <p className="text-gray-400">
              Discover missing skills required for your target role.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="mb-3 text-xl font-semibold">
              AI Recommendations
            </h3>

            <p className="text-gray-400">
              Receive personalized resume improvements powered by AI.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}