import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Orders from "../../Shared/Orders/Orders";

const AllBookings = () => {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("https://bechedaw-server.vercel.app/booking")
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, []);

  return (
    <div>
      <div className="px-4 pb-5 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">All Orders</h3>
        <p className="mt-1 text-sm text-gray-600">
          Please pay the product to get the product or delete it from your orders list
        </p>
      </div>

      <table className="w-full text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-4 text-left">
              Buyer Name
            </th>
            <th scope="col" className="py-3 px-4 text-left">
              Phone
            </th>
            <th scope="col" className="py-3 px-4 text-left">
              Email
            </th>
            <th scope="col" className="py-3 px-4 text-left">
              Location
            </th>
            <th scope="col" className="py-3 px-4 text-left">
              Price
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>

        {booking.map((book) => (
          <Orders book={book} key={book._id}></Orders>
        ))}
      </table>
    </div>
  );
};

export default AllBookings;
