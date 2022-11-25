import React from "react";
import { useContext, useState } from "react";
import img from "../../media/undraw_Business_deal_re_up4u.png";

import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Btn from "../../Shared/Btn";

const Home = () => {
  const features = [
    {
      name: "Competitive exchange rates",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: GlobeAltIcon,
    },
    {
      name: "No hidden fees",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: ScaleIcon,
    },
    {
      name: "Transfers are instant",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: BoltIcon,
    },
    {
      name: "Mobile notifications",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: DevicePhoneMobileIcon,
    },
  ];

  return (
    <div>
      <section class="overflow-hidden bg-white sm:grid sm:grid-cols-2 sm:items-center">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-xl text-center sm:text-left">
            <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p class="hidden text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus
              tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum,
              augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
            </p>

            <div class="mt-4 md:mt-8">
              <Btn to="asdsa">Get Started</Btn>
            </div>
          </div>
        </div>

        <img
          alt="Violin"
          src={img}
          class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
        />
      </section>

      {/* features starts here*/}

      <div className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-[#ee7724]">
              Transactions
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A better way to get used items
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              We verify the seller for you so that you can shave a smooth and safe buying
              journey
            </p>
          </div>

          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r to-[#ee7724] via-[#dd3675] from-[#b44593] text-white sm:shrink-0">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-lg font-semibold leading-8 text-gray-900">
                      {feature.name}
                    </p>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* features ends here*/}
    </div>
  );
};

export default Home;
