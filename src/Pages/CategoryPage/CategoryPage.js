import React from "react";
import { useLoaderData } from "react-router-dom";
import bgimg from "../../media/bg.png";
import ProductCards from "../../Shared/ProductCards/ProductCards";

const CategoryPage = () => {
  const category = useLoaderData();
  const categoryInfo = category[0];
  const categoryData = category[1];

  const { banner_img, cat_img, category_id, name, _id } = categoryInfo[0];
  console.log(categoryInfo);
  console.log(banner_img);

  return (
    <>
      <>
        <div
          className="bg-center bg-cover bg-no-repeat "
          style={{ backgroundImage: `url(${banner_img})` }}
        >
          <div className="bg-cover bg-opacity-60 py-32  bg-gradient-to-r from-primary-blue px-5">
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
              <p className="border-none inline-block px-2 bg-primary-pink text-white font-bold">
                Browse
              </p>
              <h1 className=" text-5xl font-bold text-white">{name}</h1>
            </div>
          </div>
        </div>
      </>

      <div className="my-20 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mx-5 md:mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        {categoryData.map((product) => (
          <ProductCards product={product} key={product._id}></ProductCards>
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
