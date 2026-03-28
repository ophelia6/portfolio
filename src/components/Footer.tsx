import { personal } from "@/data/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-mono">
            Designed & built by{" "}
            <span className="text-teal-400">{personal.name}</span>
          </p>
          <div className="flex items-center gap-6">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-teal-400 transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-slate-500 hover:text-teal-400 transition-colors text-sm"
            >
              Email
            </a>
          </div>
          <p className="text-slate-600 text-xs font-mono">
            © {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
