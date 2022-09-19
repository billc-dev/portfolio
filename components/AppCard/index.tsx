import React, { FC } from "react";

interface Props {
  title: string;
  src: string;
}

const AppCard: FC<Props> = ({ title, src }) => {
  return (
    <div className="mx-2">
      <h6 className="text-center">{title}</h6>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="mx-auto mt-2 max-h-[38rem] select-none rounded-xl shadow-lg outline outline-[6px] outline-zinc-700"
        src={src}
        alt=""
      />
    </div>
  );
};

export default AppCard;
