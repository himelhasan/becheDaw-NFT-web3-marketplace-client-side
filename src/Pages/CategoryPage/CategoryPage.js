import React from "react";
import bgimg from "../../media/bg.png";

const CategoryPage = () => {
  return (
    <>
      <section
        class="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center bg-center bg-cover bg-no-repeat pb-20"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div class="p-8 md:p-12 lg:px-16 lg:py-24 ">
          <div class="mx-auto max-w-xl text-center sm:text-left">
            <h2 class="text-2xl md:text-6xl font-semibold text-white">
              Discover Rare Artworks By World Class Artists
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
