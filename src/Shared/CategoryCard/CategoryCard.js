import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ cat }) => {
  const { name, cat_img } = cat;
  return (
    <div className="bg-gradient-to-r to-[#FF0062] from-[#0029FF] p-2 ">
      <div class="text-gray-900 hover:text-white max-w-sm bg-white hover:bg-transparent hover:opacity-1  border border-gray-200  shadow-md dark:bg-gray-800 dark:border-gray-700 h-40 flex items-center justify-center">
        <div class="p-5 flex flex-col items-center align-items-center">
          <Link to="">
            <h5 class="mb-2 text-2xl font-bold tracking-tight  text-center capitalize">
              {name}
            </h5>
          </Link>

          <Link
            to=""
            class="inline-flex items-center py-2 text-sm font-medium text-center  focus:ring-4 focus:outline-none"
          >
            Read more
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
