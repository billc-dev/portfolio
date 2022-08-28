import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Animate from "../Layout/Animate";
import HappyGroupBuy from "./HappyGroupBuy";
import HappyGroupBuyAdmin from "./HappyGroupBuyAdmin";

const RecentWork = () => {
  const { asPath } = useRouter();
  const hash = asPath.split("#")[1];
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (hash !== "work") return;
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);
  return (
    <section className="relative mb-16">
      <Animate>
        <h2 className="mb-2 pt-4 text-4xl font-semibold underline">
          My Recent Work
        </h2>
        <div ref={ref} className="absolute -top-8" />
        <HappyGroupBuy />
      </Animate>
      <Animate>
        <HappyGroupBuyAdmin />
      </Animate>
    </section>
  );
};

export default RecentWork;
