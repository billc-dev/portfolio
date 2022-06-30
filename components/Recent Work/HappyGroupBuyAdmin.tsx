/* eslint-disable @next/next/no-img-element */
import { CodeIcon } from "@heroicons/react/solid";
import Button from "../Button";

const HappyGroupBuyAdmin = () => {
  return (
    <div className="grid md:grid-cols-2 mb-4">
      <div>
        <h3 className="text-2xl font-semibold">Happy Group Buy Admin</h3>
        <h4 className="text-lg text-zinc-200">
          Internal tool to manage Happy Group Buy
        </h4>
        <div className="flex mt-2">
          <Button
            icon={<CodeIcon />}
            onClick={() =>
              window.open("https://github.com/billc-dev/tuango-tw", "_blank")
            }
          >
            Code
          </Button>
          {/* <Button
            className="ml-2"
            icon={<GlobeIcon />}
            onClick={() =>
              window.open("https://xn--ndsp5rmr3blfh.com/posts", "_blank")
            }
          >
            Live Site
          </Button> */}
        </div>
        <div className="mt-3 px-8 py-6 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors">
          <p className="text-lg">Key Features:</p>
          <ul>
            <li>- Pickup user orders</li>
            <li>- Deliver seller orders</li>
            <li>- Send delivery notifications</li>
            <li>- Edit posts, orders, location, and users</li>
            <li>- Revenue and profit charts</li>
          </ul>
        </div>
      </div>
      <div className="flex mt-2">
        <div className="mt-2 z-[2] mx-auto hover:z-10 hover:scale-125 duration-200 transition-all">
          <p className="text-center text-lg font-semibold mb-1 max-w-[177px] bg-zinc-900 rounded-lg">
            Pickup User Orders
          </p>
          <img
            className="select-none max-h-[24rem] rounded-xl shadow"
            src="/tuango_admin_img/pickup.jpg"
            alt="Pickup User Orders"
          />
        </div>
        <div className="mt-6 z-[1] -ml-6 mx-auto hover:z-10 hover:scale-125 duration-200 transition-all">
          <p className="text-center text-lg font-semibold mb-1 max-w-[177px] bg-zinc-900 rounded-lg">
            Deliver Seller Orders
          </p>
          <img
            className="select-none max-h-[24rem] rounded-xl shadow"
            src="/tuango_admin_img/deliver.jpg"
            alt="Deliver Seller Orders"
          />
        </div>
        <div className="hidden lg:block mt-10 -ml-6 mx-auto hover:z-10 hover:scale-125 duration-200 transition-all">
          <p className="text-center text-xl font-semibold mb-1 max-w-[177px] bg-zinc-900 rounded-lg">
            Manage Orders Storage Location
          </p>
          <img
            className="select-none max-h-[24rem] rounded-xl shadow"
            src="/tuango_admin_img/location.jpg"
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

export default HappyGroupBuyAdmin;
