import React from "react";
import { Link } from "react-router-dom";
import Btn from "../Btn";
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
    user,
  } = product;

  const { userEmail, userImg, userName } = user[0];
  const [showModal, setShowModal] = useState(false);

  const date = format(new Date(`${postedDate}`), "PP");

  return (
    <div class="w-full max-w-sm bg-[#23324A] rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to="/">
        <div
          className="bg-center bg-cover bg-no-repeat w-full h-80"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </Link>
      <div class="px-5 py-5">
        <Link to="#">
          <h5 class="text-xl font-semibold tracking-tight">{productName}</h5>
        </Link>

        <div class="flex py-5 justify-between ">
          <div class="flex">
            <div
              className="bg-center bg-origin-content bg-contain	w-12 h-12 mb-2 avatar rounded-full mr-3 border-4"
              style={{ backgroundImage: `url(${userImg})` }}
            ></div>
            <span>
              <p class="text-sm text-gray-500 dark:text-gray-400">Current Owner</p>
              <h5 class=" text-md font-medium ">{userName}</h5>
            </span>
          </div>
          <span className="flex  flex-col items-end">
            <p className="text-sm text-muted">Reselling Price</p>
            <p class="text-2xl font-bold">{resellingPrice}ETH</p>
          </span>
        </div>
        <div class="flex items-center justify-between pt-2">
          <div class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <p class="text-sm text-gray-500 dark:text-gray-400">{date}</p>
          </div>

          {/* <label
            htmlFor={_id}
            className="btn btn-primary text-white"
            // onClick={() => setTreatment(appointmentOption)}
          >
            Book Appointment
          </label> */}
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
