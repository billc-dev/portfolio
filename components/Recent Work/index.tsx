/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const RecentWork = () => {
  const { asPath } = useRouter();
  const hash = asPath.split("#")[1];
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (hash !== "work") return;
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);
  return (
    <section className="">
      <h2 className="text-center text-3xl font-semibold mb-8 pt-4" ref={ref}>
        My Recent Work
      </h2>
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold">Happy Group Buy</h3>
          <h4 className="text-lg text-zinc-200">A multi-vendor marketplace</h4>
          <div className="mt-7 px-8 py-6 bg-zinc-800 hover:bg-zinc-800/80 rounded-lg transition-colors">
            <p className="text-lg">Key Features:</p>
            <ul>
              <li>- View products</li>
              <li>- Place and track orders</li>
              <li>- Message buyers and sellers</li>
              <li>- Create Posts</li>
              <li>- Search Posts</li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <img
            className="mt-2 z-[2] mx-auto select-none max-h-[20rem] hover:z-10 hover:max-h-[22rem] duration-200 transition-all rounded-xl shadow shadow-zinc-700"
            src="/tuango_img/post_cards-dark.jpg"
            alt=""
          />
          <img
            className="mt-6 z-[1] -ml-6 mx-auto select-none max-h-[20rem] hover:z-10 hover:max-h-[22rem] duration-200 transition-all rounded-xl shadow shadow-zinc-700"
            src="/tuango_img/order_nav-dark.jpg"
            alt=""
          />
          <img
            className="mt-10 -ml-6 mx-auto select-none max-h-[20rem] hover:z-10 hover:max-h-[22rem] duration-200 transition-all rounded-xl shadow shadow-zinc-700"
            src="/tuango_img/message-dark.jpg"
            alt=""
          />
        </div>
      </div>
      {/* <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2 my-4">
        <AppCard title="Post Card View" src="/tuango_img/post_cards-dark.jpg" />
        <AppCard title="Post Feed View" src="/tuango_img/post_feed-dark.jpg" />
        <AppCard title="Create Post" src="/tuango_img/create_post-dark.jpg" />
        <AppCard title="Order Form" src="/tuango_img/order_form-dark.jpg" />
        <AppCard title="View Orders" src="/tuango_img/order_nav-dark.jpg" />
        <AppCard title="Q&A" src="/tuango_img/Q&A-dark.jpg" />
        <AppCard title="Search Posts" src="/tuango_img/search-dark.jpg" />
        <AppCard title="Private Messaging" src="/tuango_img/message-dark.jpg" />
      </section> */}
    </section>
  );
};

export default RecentWork;
