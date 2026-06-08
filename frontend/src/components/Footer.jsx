export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-10">

      <div className="mx-auto max-w-7xl px-6 text-center">

        <h3 className="text-2xl font-bold text-white">
          Shobhit Tripathi
        </h3>

        <p className="mt-2 text-gray-400">
          Frontend Developer • React.js Developer
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-8">

          <a
  onClick={() => window.open("https://github.com/shobhit-pixel", "_blank")}
  className="cursor-pointer text-gray-400 hover:text-white"
>
  GitHub
</a>

          <a
            href="https://linkedin.com/in/shobhit-k-tripathi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-blue-400"
          >
            LinkedIn
          </a>

          <a
            href="mailto:shobhitkrishnagopaltripathi@gmail.com"
            className="text-gray-400 transition hover:text-blue-400"
          >
            Email
          </a>

        </div>

        <p className="mt-6 text-sm text-gray-500">
          Built with React.js, Node.js & AI
        </p>

        <p className="mt-2 text-xs text-gray-600">
          © 2026 ResumeIQ AI. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}