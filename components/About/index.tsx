/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useScrollIntoView } from "../../hooks";

const About = () => {
  const { ref } = useScrollIntoView("about");
  return (
    <div className="relative">
      <div ref={ref} className="absolute -top-8" />
      <h2 className="mb-2 pt-4 text-4xl font-semibold underline">About Me</h2>
      <h3 className="mb-2 pt-4 text-3xl font-semibold">My Journey</h3>
      <p className="mb-6 text-lg md:w-1/2">
        I always liked finding problems in my life and finding the solution to
        the problem. My parents had this group buying business but a lot of the
        work had to be done manually. I tried finding pre-made solutions online
        but nothing really matched our business model. This was when my journey
        as a self-taught developer started. I thought maybe I can just build the
        solution by myself and it would be “free”. I started learning web
        development and it just clicked with me. Time would fly by while I was
        learning and coding. I was able to quickly build the marketplace and
        also the internal tool to manage the marketplace.
      </p>
      <h3 className="mb-2 pt-4 text-3xl font-semibold">My Hobbies</h3>
      <img
        alt="stenography keyboard"
        src="/steno-keyboard.jpg"
        className="mb-2 md:w-1/2"
      />
      <p className="mb-6 text-lg md:w-1/2">
        I’m currently learning{" "}
        <a
          href="https://youtu.be/ylLJDD0Vvjw"
          target="_blank"
          className="text-blue-500 underline"
          rel="noreferrer"
        >
          stenography
        </a>
        , which is a way to type faster by pressing multiple keys at once. I
        also designed a custom split keyboard PCB to make the key layouts fit my
        hands. My parents also have a bicycle shop so I started biking at a
        young age and I really like riding in the Netherlands. If your bike
        breaks, maybe I could help you fix it :)
      </p>
    </div>
  );
};

export default About;
