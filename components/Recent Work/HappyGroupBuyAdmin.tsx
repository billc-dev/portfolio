/* eslint-disable @next/next/no-img-element */
import { CodeIcon } from "@heroicons/react/solid";
import Button from "../Button";

const HappyGroupBuyAdmin = () => {
  return (
    <div className="mt-16 mb-4 grid md:grid-cols-2">
      <div>
        <div className="flex items-center">
          <div className="mr-4 hidden h-24 w-24 min-w-[96px] overflow-hidden rounded-2xl lg:block">
            <img
              className="scale-125"
              src="/tuango_admin_img/logo.png"
              alt="Happy Group Buy Logo"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Happy Group Buy Admin</h3>
            <h4 className="text-lg text-zinc-200">
              Internal tool to manage Happy Group Buy
            </h4>
            <div className="mt-2 flex"></div>
          </div>
        </div>
        <div className="mt-3 rounded-lg bg-zinc-900 px-8 py-6 transition-colors hover:bg-zinc-800">
          <p className="text-lg font-semibold">Key Features:</p>
          <ul className="mb-1">
            <li>- Pickup user orders</li>
            <li>- Deliver seller orders</li>
            <li>- Send delivery notifications</li>
            <li>- Edit posts, orders, location, and users</li>
            <li>- Revenue and profit charts</li>
          </ul>
          <p>Identical tech stack as Happy Group Buy</p>
        </div>
      </div>
      <div className="mt-2 flex">
        <div className="z-[2] mx-auto mt-2 transition-all duration-200 hover:z-10 hover:scale-125">
          <p className="mb-1 max-w-[177px] rounded-lg bg-zinc-900 text-center text-lg font-semibold">
            Pickup User Orders
          </p>
          <img
            className="max-h-[24rem] select-none rounded-xl shadow"
            src="/tuango_admin_img/pickup.jpg"
            alt="Pickup User Orders"
          />
        </div>
        <div className="z-[1] mx-auto mt-6 -ml-6 transition-all duration-200 hover:z-10 hover:scale-125">
          <p className="mb-1 max-w-[177px] rounded-lg bg-zinc-900 text-center text-lg font-semibold">
            Deliver Seller Orders
          </p>
          <img
            className="max-h-[24rem] select-none rounded-xl shadow"
            src="/tuango_admin_img/deliver.jpg"
            alt="Deliver Seller Orders"
          />
        </div>
        <div className="mx-auto mt-10 -ml-6 hidden transition-all duration-200 hover:z-10 hover:scale-125 lg:block">
          <p className="mb-1 max-w-[177px] rounded-lg bg-zinc-900 text-center text-xl font-semibold">
            Manage Orders Storage Location
          </p>
          <img
            className="max-h-[24rem] select-none rounded-xl shadow"
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
