import React, { useEffect } from "react";
import { useContext, useState } from "react";
import img from "../../media/hero.png";
import bgimg from "../../media/night-landscape-halloween-castle-graves_316839-3623.webp";

import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Btn from "../../Shared/Btn";
import CategoryCard from "../../Shared/CategoryCard/CategoryCard";
import ProductCards from "../../Shared/ProductCards/ProductCards";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [adProducts, setAdProducts] = useState([]);

  useEffect(() => {
    fetch("https://bechedaw-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategory(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://bechedaw-server.vercel.app/advertised")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdProducts(data);
      });
  }, []);

  const features = [
    {
      name: "Set Up Your Wallet",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: GlobeAltIcon,
    },
    {
      name: "List Item for Sale",
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
      <div
        className="bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="bg-cover bg-opacity-60 bg-gradient-to-r from-primary-blue px-5">
          <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center py-20">
              <div className="p-8 md:p-12 lg:px-16 lg:py-24 ">
                <div className="mx-auto max-w-xl text-center sm:text-left">
                  <h2 className="text-2xl md:text-5xl font-semibold text-slate-50">
                    Discover Rare Artworks By World Class Artists
                  </h2>

                  <p className="hidden text-slate-50 md:mt-4 md:block">
                    Profile picture (PFP) non-fungible tokens (NFTs) have dominated the
                    weird wide world of digital collectibles. Generative avatar projects
                    became astoundingly popular in 2021, and their significance has only
                    increased as the NFT ecosystem has grown.
                  </p>

                  <div className="mt-4 md:mt-8">
                    <Btn to="asdsa">Get Started</Btn>
                  </div>
                </div>
              </div>

              <img
                alt="Violin"
                src={img}
                className=" w-50 object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
              />
            </section>
          </div>
        </div>
      </div>

      {/* Categrory cards starts here */}

      <div className="py-24 sm:py-32 lg:py-40 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-[#ee7724]">
              Collections
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Browse by Category
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              We verify the seller for you so that you can shave a smooth and safe buying
              journey
            </p>
          </div>

          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-16">
              {category.map((cat) => (
                <CategoryCard cat={cat}></CategoryCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* features starts here*/}

      <div className=" py-24 sm:py-32 lg:py-40">
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r to-[#FF0062] from-[#0029FF] text-white sm:shrink-0">
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

      {/* ADs starts here*/}

      <div className=" py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-[#ee7724]">
              Illustration{" "}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              NFTs Spotlight
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              We verify the seller for you so that you can shave a smooth and safe buying
              journey
            </p>
          </div>

          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            {adProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-16">
                {adProducts.map((product) => (
                  <ProductCards product={product} key={product._id}></ProductCards>
                ))}
              </div>
            ) : (
              <p className="text-black text-center">No products found</p>
            )}
          </div>
        </div>
      </div>

      {/* ADs ends here*/}
    </div>
  );
};

export default Home;
