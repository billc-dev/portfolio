import type { NextPage } from "next";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RecentWork from "../components/Recent Work";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto pt-2 p-4 md:p-8 mt-12">
        <Hero />
        <RecentWork />
      </div>
    </>
  );
};

export default Home;
