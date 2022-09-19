/* eslint-disable @next/next/no-img-element */
import { CodeIcon, GlobeIcon } from "@heroicons/react/solid";
import Button from "../Button";
import YoutubeSVG from "../SVG/YoutubeSVG";

const HappyGroupBuy = () => {
  return (
    <div className="my-6 grid rounded-3xl bg-zinc-900 p-8 lg:grid-cols-2">
      <div>
        <div className="flex items-center">
          <div className="mr-4 hidden h-24 w-24 min-w-[96px] rounded-full bg-white md:block">
            <img src="/tuango_img/logo.png" alt="Happy Group Buy Logo" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Happy Group Buy</h3>
            <h4 className="text-lg text-zinc-200">
              A multi-vendor marketplace
            </h4>
            <div className="mt-2 flex">
              <Button
                icon={<CodeIcon />}
                onClick={() =>
                  window.open(
                    "https://github.com/billc-dev/tuango-tw",
                    "_blank"
                  )
                }
              >
                Code
              </Button>
              <Button
                className="ml-2"
                icon={<GlobeIcon className="fill-zinc-300" />}
                onClick={() =>
                  window.open("https://xn--ndsp5rmr3blfh.com/posts", "_blank")
                }
              >
                Live Site
              </Button>
              <Button
                className="ml-2"
                icon={<YoutubeSVG className="fill-zinc-300" />}
                onClick={() =>
                  window.open("https://youtu.be/QqO1jJcqzgM", "_blank")
                }
              >
                Demo
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-4 text-lg">
          <p>
            A local group buying marketplace built to connect local sellers to
            local buyers.
          </p>
          <p className="mt-4">
            <strong>Core Technologies:</strong>
          </p>
          <p>Next.js, TypeScript, Node.js, Express, Firebase, AWS</p>
          {/* <p className="text-lg font-semibold">Intro:</p>
          <p>
            In 2020, I was looking for a multi-vendor marketplace solution,
            however, all existing solutions were desigined for single-vendor.
            That was when I decided to build this web app.
          </p>
          <p className="text-lg font-semibold">Key Features:</p>
          <ul className="mb-1">
            <li>- View products</li>
            <li>- Place and track orders</li>
            <li>- Message buyers and sellers</li>
            <li>- Create products</li>
            <li>- Social login</li>
          </ul>
          <p className="mb-1">
            V1: React.js, Context API, Material UI, Node.js, Express, Firebase
          </p>
          <p>
            V2: Next.js, React Query, Tailwind CSS, TypeScript, AWS CloudFront &
            S3
          </p> */}
        </div>
      </div>
      <div className="mt-2 flex">
        <div className="z-[2] mx-auto mt-2 transition-all duration-200 hover:z-10 hover:scale-125 ">
          <p className="mb-1 text-center text-xl font-semibold">
            Post Cards View
          </p>
          <img
            className="max-h-[24rem] select-none rounded-xl shadow shadow-zinc-700"
            src="/tuango_img/post_cards-dark.jpg"
            alt="Post Cards View"
          />
        </div>
        <div className="z-[1] mx-auto mt-6 -ml-6 transition-all duration-200 hover:z-10 hover:scale-125 ">
          <p className="mb-1 text-center text-xl font-semibold">
            Order Navigation
          </p>
          <img
            className="max-h-[24rem] select-none rounded-xl shadow shadow-zinc-700"
            src="/tuango_img/order_nav-dark.jpg"
            alt="Order Navigation"
          />
        </div>
        <div className="mx-auto mt-10 -ml-6 hidden transition-all duration-200 hover:z-10 hover:scale-125 md:block ">
          <p className="mb-1 text-center text-xl font-semibold">
            Private Messaging
          </p>
          <img
            className="max-h-[24rem] select-none rounded-xl shadow shadow-zinc-700"
            src="/tuango_img/message-dark.jpg"
            alt="Private Messaging"
          />
        </div>
      </div>
      {/* <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2 my-4"> */}
      {/* <AppCard title="Post Card View" src="/tuango_img/post_cards-dark.jpg" />
      <AppCard title="Post Feed View" src="/tuango_img/post_feed-dark.jpg" />
      <AppCard title="Create Post" src="/tuango_img/create_post-dark.jpg" />
      <AppCard title="Order Form" src="/tuango_img/order_form-dark.jpg" />
      <AppCard title="View Orders" src="/tuango_img/order_nav-dark.jpg" />
      <AppCard title="Q&A" src="/tuango_img/Q&A-dark.jpg" />
      <AppCard title="Search Posts" src="/tuango_img/search-dark.jpg" />
      <AppCard title="Private Messaging" src="/tuango_img/message-dark.jpg" /> */}
      {/* </section> */}
    </div>
  );
};

export default HappyGroupBuy;
