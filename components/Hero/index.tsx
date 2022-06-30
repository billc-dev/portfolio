import GithubSVG from "../SVG/GithubSVG";
import LinkedinSVG from "../SVG/LinkedinSVG";
import { MailIcon } from "@heroicons/react/solid";

const Hero = () => {
  return (
    <section className="mt-4 md:mb-12">
      <div className="relative">
        <h1 className="font-bold text-7xl md:mb-6">Bill Cheng</h1>
        <h2 className="font-bold text-zinc-400 text-6xl mb-6">
          Software Developer
        </h2>
        <div className="flex items-center">
          <a
            href="https://github.com/billc-dev"
            target="_blank"
            rel="noreferrer"
          >
            <GithubSVG className="h-10 fill-zinc-200 mr-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/billcheng-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinSVG className="h-10 fill-zinc-200 mr-4" />
          </a>
          <a href="mailto:billcheng.dev@gmail.com">
            <MailIcon className="h-12 fill-zinc-200 mr-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
