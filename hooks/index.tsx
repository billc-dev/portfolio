import { useRouter } from "next/router";
import { useRef, useEffect } from "react";

export const useScrollIntoView = (sectionHash: string) => {
  const { asPath } = useRouter();
  const hash = asPath.split("#")[1];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hash !== sectionHash) return;
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [hash, sectionHash]);

  return { ref };
};
