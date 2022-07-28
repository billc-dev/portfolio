import GithubSVG from "../SVG/GithubSVG";
import LinkedinSVG from "../SVG/LinkedinSVG";
import { MailIcon } from "@heroicons/react/solid";

const Hero = () => {
  return (
    <section className="mt-4 md:mb-12">
      <div className="relative">
        <h1 className="text-7xl font-bold md:mb-6">Bill Cheng</h1>
        <h2 className="mb-6 text-6xl font-bold text-zinc-400">
          Software Developer
        </h2>
        <p className="mb-6 md:w-1/2">
          I am a self-taught software developer who is passionate about building
          solutions that solve impactful problems. I have hands-on experience in
          building production-ready web apps from frontend to backend and
          building deployment processes.
        </p>
        <div className="flex items-center">
          <a
            href="https://github.com/billc-dev"
            target="_blank"
            rel="noreferrer"
          >
            <GithubSVG className="mr-4 h-10 fill-zinc-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/billcheng-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinSVG className="mr-4 h-10 fill-zinc-200" />
          </a>
          <a href="mailto:billcheng.dev@gmail.com">
            <MailIcon className="mr-4 h-12 fill-zinc-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
