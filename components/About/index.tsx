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
        I have always enjoyed identifying problems in my life and finding
        solutions for them. When my parents started a group buying business,
        much of the work was done manually. After searching for pre-made
        solutions online and finding none that fit our business model, I decided
        to create my own. This marked the beginning of my journey as a
        self-taught developer.
      </p>
      <p className="mb-6 text-lg md:w-1/2">
        I began learning web development, and it immediately clicked with me.
        Hours would pass by as I immersed myself in learning and coding. In a
        short time, I built both a marketplace and an internal tool to manage
        it, providing a customized solution for our business needs.
      </p>
      <h3 className="mb-2 pt-4 text-3xl font-semibold">My Hobbies</h3>
      <img
        alt="stenography keyboard"
        src="/steno-keyboard.jpg"
        className="mb-2 md:w-1/2"
      />
      <p className="mb-6 text-lg md:w-1/2">
        I’m interested in{" "}
        <a
          href="https://youtu.be/ylLJDD0Vvjw"
          target="_blank"
          className="text-blue-500 underline"
          rel="noreferrer"
        >
          stenography
        </a>
        , a method that allows for faster typing by pressing multiple keys
        simultaneously. Additionally, I designed a custom split keyboard PCB to
        ensure the key layouts are ergonomically suited to my hands.
      </p>
    </div>
  );
};

export default About;
