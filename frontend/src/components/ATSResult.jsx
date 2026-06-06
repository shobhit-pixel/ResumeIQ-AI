    import StrengthMeter from "./StrengthMeter";
    
     export default function ATSResult({
  atsScore,
  skills,
  missingSkills,
  suggestions,
  jobMatch,
}) {
  return (
    
    <div className="mt-10 grid gap-6 md:grid-cols-2">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

  <h3 className="mb-3 text-xl font-semibold">
    ATS Score
  </h3>

  <p className="text-5xl font-bold text-green-400">
    {atsScore}%
  </p>

  <span
    className={`mt-4 inline-block rounded-full px-4 py-2 text-sm font-medium ${
      atsScore >= 80
        ? "bg-green-500/20 text-green-400"
        : atsScore >= 60
        ? "bg-yellow-500/20 text-yellow-400"
        : "bg-red-500/20 text-red-400"
    }`}
  >
    {atsScore >= 80
      ? "Excellent"
      : atsScore >= 60
      ? "Good"
      : "Needs Improvement"}
  </span>

</div>
<StrengthMeter score={atsScore} />
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <h3 className="mb-3 text-xl font-semibold">
          Skills Found
        </h3>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-blue-500/20 px-3 py-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
  <h3 className="mb-3 text-xl font-semibold">
    Missing Skills
  </h3>

  <div className="flex flex-wrap gap-2">
    {missingSkills.map((skill) => (
      <span
        key={skill}
        className="rounded-lg bg-red-500/20 px-3 py-1 text-sm"
      >
        {skill}
      </span>
    ))}
  </div>
  
    </div>

<div className="rounded-3xl border border-white/10 bg-white/5 p-6">

  <h3 className="mb-4 text-xl font-semibold">
    AI Suggestions
  </h3>

  <ul className="space-y-3 text-gray-300">
    {suggestions?.map((item, index) => (
      <li key={index}>
        ✓ {item}
      </li>
    ))}
  </ul>

</div>

<div className="rounded-3xl border border-white/10 bg-white/5 p-6">

  <h3 className="mb-4 text-xl font-semibold">
    Resume Overview
  </h3>

  <div className="space-y-3 text-gray-300">

    <p>
      <strong>Skills Found:</strong> {skills.length}
    </p>

    <p>
      <strong>Missing Skills:</strong>{" "}
      {missingSkills.length}
    </p>

    <p>
      <strong>ATS Score:</strong> {atsScore}%
    </p>

    <p>
      <strong>Best Role:</strong>{" "}
      {
        Object.entries(jobMatch).sort(
          (a, b) => b[1] - a[1]
        )[0][0]
      }
    </p>

  </div>

</div>

<div className="rounded-3xl border border-white/10 bg-white/5 p-6">

  <h3 className="mb-6 text-xl font-semibold">
    Job Match Analysis
  </h3>

  <div className="space-y-5">

    <div>
      <div className="mb-1 flex justify-between">
        <span>Frontend Developer</span>
        <span>{jobMatch.frontend}%</span>
      </div>

      <div className="h-3 rounded-full bg-gray-700">
        <div
          className="h-3 rounded-full bg-blue-500"
          style={{
            width: `${jobMatch.frontend}%`
          }}
        />
      </div>
    </div>

    <div>
      <div className="mb-1 flex justify-between">
        <span>React Developer</span>
        <span>{jobMatch.react}%</span>
      </div>

      <div className="h-3 rounded-full bg-gray-700">
        <div
          className="h-3 rounded-full bg-green-500"
          style={{
            width: `${jobMatch.react}%`
          }}
        />
      </div>
    </div>

    <div>
      <div className="mb-1 flex justify-between">
        <span>Full Stack Developer</span>
        <span>{jobMatch.fullstack}%</span>
      </div>

      <div className="h-3 rounded-full bg-gray-700">
        <div
          className="h-3 rounded-full bg-purple-500"
          style={{
            width: `${jobMatch.fullstack}%`
          }}
        />
      </div>
    </div>

    <div>
      <div className="mb-1 flex justify-between">
        <span>Backend Developer</span>
        <span>{jobMatch.backend}%</span>
      </div>

      <div className="h-3 rounded-full bg-gray-700">
        <div
          className="h-3 rounded-full bg-red-500"
          style={{
            width: `${jobMatch.backend}%`
          }}
        />
      </div>
    </div>

  </div>

</div>


</div>


  );
}