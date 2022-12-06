import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import BookingModal from "../BookingModal/BookingModal";
import { useState } from "react";

const ProductCards = ({ product }) => {
  const {
    _id,
    booked,
    buyingPrice,
    category_id,
    description,
    img,
    postedDate,
    productName,
    resellingPrice,
    sellerEmail,
    sellerImg,
    sellerName,
    location,
    purchased_year,
  } = product;

  const purchasedYear = format(new Date(purchased_year), "PP");

  const [showModal, setShowModal] = useState(false);

  const date = format(new Date(`${postedDate}`), "P");

  return (
    <div className="w-full max-w-sm bg-[#23324A] rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to="#">
        <div
          className="bg-center bg-cover bg-no-repeat w-full h-80"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </Link>
      <div className="px-5 py-5">
        <Link to="#">
          <h5 className="text-xl font-semibold tracking-tight text-slate-100">
            {productName}
          </h5>
        </Link>

        <div className="flex py-5 justify-between ">
          <div className="flex">
            <div
              className="bg-center bg-origin-content bg-contain	w-12 h-12 mb-2 avatar rounded-full mr-3 border-4"
              style={{ backgroundImage: `url(${sellerImg})` }}
            ></div>
            <span>
              <p className="text-sm text-gray-400">Current Owner</p>
              <h5 className="text-md font-medium text-slate-200">
                {sellerName}

                {}
                <span className="bg-blue-500 mx-2 text-white text-sm font-semibold inline-flex items-center p-1 rounded-full dark:bg-green-500 dark:text-black">
                  <svg
                    aria-hidden="true"
                    className=" w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </h5>
            </span>
          </div>
          <span className="flex  flex-col items-end">
            <p className="text-sm text-muted text-gray-400">Reselling Price</p>
            <p className="text-2xl font-bold text-slate-50">{resellingPrice}ETH</p>
          </span>
        </div>
        {/*  */}
        <div className="flex pb-5 gap-2 justify-between ">
          <span className="">
            <p className="text-sm text-gray-400">Purchased year</p>
            <h5 className="text-base text-slate-200">{purchasedYear}</h5>
          </span>
          <span className="">
            <p className="text-sm text-gray-400">Buying Price</p>
            <h5 className="text-md font-medium text-slate-200">{buyingPrice}ETH</h5>
          </span>
        </div>
        <span className="">
          <p className="text-sm text-gray-400">Location</p>
          <h5 className="text-base text-slate-200">{location.substring(0, 40)}</h5>
        </span>

        {/*  */}
        <div className="flex items-center justify-between pt-5">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-slate-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <p className="text-sm text-slate-100">{date}</p>
          </div>

          <button
            className="bg-primary-pink text-white hover:bg-primary-color font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Book Now
          </button>

          <BookingModal
            product={product}
            showModal={showModal}
            setShowModal={setShowModal}
          >
            {" "}
          </BookingModal>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
