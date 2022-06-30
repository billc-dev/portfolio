import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
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
    <section className="mb-16 relative">
      <h2 className="text-3xl font-semibold pt-4 underline mb-2">
        My Recent Work
      </h2>
      <div ref={ref} className="absolute -top-8" />
      <HappyGroupBuy />
      <HappyGroupBuyAdmin />
    </section>
  );
};

export default RecentWork;
