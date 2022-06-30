import type { NextPage } from "next";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RecentWork from "../components/Recent Work";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto mt-12 max-w-6xl p-4 pt-2 md:p-8">
        <Hero />
        <RecentWork />
      </div>
    </>
  );
};

export default Home;
