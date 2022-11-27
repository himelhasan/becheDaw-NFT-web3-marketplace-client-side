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
      <section
        class="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center bg-center bg-cover bg-no-repeat pb-20"
        style={{ backgroundImage: `url(${banner_img})` }}
      >
        <div class="p-8 md:p-12 lg:px-16 lg:py-24 ">
          <div class="mx-auto max-w-xl text-center sm:text-left">
            <h2 class="text-2xl md:text-6xl font-semibold text-white">
              Discover Rare Artworks By World Class Artists
            </h2>
          </div>
        </div>
      </section>

      <div className="my-20 mx-5 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {categoryData.map((product) => (
          <ProductCards product={product} key={product._id}></ProductCards>
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
