import Navbar from "../components/Navbar";
import UploadCard from "../components/UploadCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      <Navbar />

      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500 opacity-20 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500 opacity-20 blur-[120px]" />
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
        <p className="mt-6 max-w-2xl text-center text-base md:text-xl text-gray-400">
          Analyze your resume with AI, uncover missing skills,
boost ATS performance, and receive recruiter-ready recommendations.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex items-center justify-center gap-5">

  <button
    onClick={() => {
      document
        .getElementById("resumeUpload")
        ?.scrollIntoView({ behavior: "smooth" });
    }}
    className="rounded-2xl bg-white px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
  >
    Analyze Resume
  </button>

  <button
    onClick={() =>
      window.open(
        "https://github.com/shobhit-pixel/ResumeIQ-AI",
        "_blank"
      )
    }
    className="rounded-2xl border border-white/20 bg-white/5 px-10 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-blue-400 hover:bg-white/10 hover:scale-105"
  >
    View Code
  </button>

</div>
        
        {/* Upload Card */}
<section id="analysis" className="mt-16 w-full">
  <UploadCard />
</section>
        

        <section
  id="features"
  className="mt-24 w-full max-w-7xl mx-auto"
>
  <h2 className="mb-10 text-center text-4xl font-bold">
    Features
  </h2>

  <div className="grid gap-6 md:grid-cols-3">

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">
        ATS Score
      </h3>
      <p className="mt-2 text-gray-400">
        Analyze resume ATS compatibility.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">
        Skill Analysis
      </h3>
      <p className="mt-2 text-gray-400">
        Detect skills and missing technologies.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">
        Job Match
      </h3>
      <p className="mt-2 text-gray-400">
        Match resume with industry roles.
      </p>
    </div>

  </div>
</section>

<section
  id="about"
  className="mt-24 w-full max-w-7xl mx-auto"
>
  <h2 className="mb-10 text-center text-4xl font-bold">
    About ResumeIQ AI
  </h2>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">

    <p className="text-center text-lg leading-8 text-gray-300">
      ResumeIQ AI is an intelligent resume analysis platform designed to help
      students, job seekers, and professionals improve their resumes for
      Applicant Tracking Systems (ATS). The platform automatically extracts
      skills, identifies missing technologies, calculates ATS scores, provides
      personalized AI suggestions, and recommends suitable job roles based on
      resume content.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-3">

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
        <h3 className="text-3xl font-bold text-blue-400">
          ATS
        </h3>
        <p className="mt-2 text-gray-400">
          Smart ATS score calculation and optimization.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
        <h3 className="text-3xl font-bold text-purple-400">
          AI
        </h3>
        <p className="mt-2 text-gray-400">
          AI-powered resume insights and recommendations.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
        <h3 className="text-3xl font-bold text-green-400">
          Jobs
        </h3>
        <p className="mt-2 text-gray-400">
          Match resumes with suitable career opportunities.
        </p>
      </div>

    </div>
<Footer />
  </div>
</section>
        

      </div>

    </div>
  );
}