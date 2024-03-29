import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Hero from "../components/Hero";
import Animate from "../components/Layout/Animate";
import Navbar from "../components/Navbar";
import RecentWork from "../components/Recent Work";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bill Cheng</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="mx-auto mt-12 max-w-6xl p-4 pt-2 md:p-8">
        <Animate>
          <Hero />
        </Animate>
        <RecentWork />
        <About />
      </div>
    </>
  );
};

export default Home;
