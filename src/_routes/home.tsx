import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 h-full py-2 sm:gap-12 sm:py-4 sm:pl-[4vw]">
      {/* Hero */}
      <div className="flex flex-col items-center sm:gap-2 lg:gap-4">
        <h3 className="max-w-sm sm:max-w-3xl lg:max-w-4xl flex py-3 text-2xl sm:text-5xl lg:text-6xl leading-[1.1] text-center font-nunito font-semibold tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          Enter a world where creativity merges with technology
        </h3>

        <p className="text-sm sm:text-xl lg:text-2xl max-w-sm sm:max-w-lg font-mono font-medium text-neutral-400 text-center tracking-tight sm:leading-6">
          Meet{" "}
          <a
            href="https://www.linkedin.com/in/enzo-filippo-31559bab/"
            className="text-neutral-100 underline"
            target="_blank"
          >
            Enzo Filippo
          </a>
          , web developer bringing your online presence to life
        </p>
      </div>

      {/* Links */}

      <div className="flex gap-4">
        <Link to="/projects" className="border rounded-3xl px-4 py-2">
          Browse projects
        </Link>

        <Link to="/contact" className="border rounded-3xl px-4 py-2">
          Contact me
        </Link>
      </div>
    </div>
  );
}
