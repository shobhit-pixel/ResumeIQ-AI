import ATSResult from "./ATSResult";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";

export default function UploadCard() {
 const [fileName, setFileName] = useState("");
const [uploadStatus, setUploadStatus] = useState("");

const [atsScore, setAtsScore] = useState(null);
const [skills, setSkills] = useState([]);
const [missingSkills, setMissingSkills] = useState([]);
const [suggestions, setSuggestions] = useState([]);
const [jobMatch, setJobMatch] = useState({});
const [loading, setLoading] = useState(false);
  

  const handleDrop = async (e) => {
  e.preventDefault();

  const file = e.dataTransfer.files[0];

  if (!file) return;

  const fakeEvent = {
    target: {
      files: [file],
    },
  };

  handleFileChange(fakeEvent);
};

const handleDragOver = (e) => {
  e.preventDefault();
};

const handleFileChange = async (e) => {
  const file = e.target.files[0];

  setLoading(true);

  if (!file) return;

  setFileName(file.name);

  const formData = new FormData();
  formData.append("resume", file);

  try {
    console.log("Uploading file...");

    const res = await axios.post(
  "https://resumeiq-ai-0w1q.onrender.com/api/upload",
  formData
);

setAtsScore(res.data.atsScore);
setSkills(res.data.skills);
setMissingSkills(res.data.missingSkills);
setSuggestions(res.data.suggestions);
setJobMatch(res.data.jobMatch);

setLoading(false);

setUploadStatus("✅ Resume uploaded successfully");

  } catch (error) {
    setLoading(false);
    console.error("FULL ERROR:", error);

    if (error.response) {
      console.log("STATUS:", error.response.status);
      console.log(
  "RESPONSE DATA:",
  JSON.stringify(error.response.data, null, 2)
);
    }

    setUploadStatus("❌ Upload failed");
  }
};

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="mt-16 w-full max-w-4xl"
    >
      <div
  onDrop={handleDrop}
  onDragOver={handleDragOver}
  className="rounded-3xl border-2 border-dashed border-white/20 bg-white/5 p-12 text-center backdrop-blur-md shadow-[0_0_80px_rgba(59,130,246,0.15)] transition hover:border-blue-400 hover:bg-white/10"
>
<div className="mb-4 text-7xl">
  📤
</div>

        <h2 className="mb-3 text-2xl font-semibold">
          Upload Your Resume
        </h2>

        <p className="mb-2 text-gray-300">
  Drag & Drop your resume here
</p>
<p className="mt-4 text-xs text-blue-400">
  Supported: PDF resumes
</p>

<p className="mb-6 text-sm text-gray-500">
  PDF files only • Max size 5MB
</p>

        <input
          type="file"
          accept=".pdf"
          className="hidden"
          id="resumeUpload"
          onChange={handleFileChange}
        />

        <label
          htmlFor="resumeUpload"
          className="cursor-pointer rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 font-semibold shadow-lg shadow-purple-500/30 transition hover:scale-105"
        >
          Choose Resume
        </label>

        {
  loading && (
    <div className="mt-6 flex flex-col items-center">

      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

      <p className="mt-3 text-blue-400">
        Extracting skills & calculating ATS score...
      </p>

    </div>
  )
}

        {fileName && (
          <p className="mt-4 text-green-400">
            {fileName}
          </p>
        )}

        {uploadStatus && (
          <p className="mt-2 text-sm text-gray-300">
            {uploadStatus}
          </p>
        )}
        {atsScore && (
 <ATSResult
  atsScore={atsScore}
  skills={skills}
  missingSkills={missingSkills}
  suggestions={suggestions}
  jobMatch={jobMatch}
/>
)}
      </div>
    </motion.div>
  );
}