import React from "react";
import Btn from "../Btn";

const Orders = ({ book }) => {
  const {
    productName,
    resellingPrice,
    userPhone,
    bookingPersonName,
    bookingPersonEmail,
    location,
  } = book;
  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="py-4 px-4 text-left font-normal mx-0 text-gray-900">
          {bookingPersonName}
        </th>
        <td className="py-4 px-4 text-left">
          <a href={`tel:${userPhone}`}>{userPhone}</a>
        </td>
        <td className="py-4 px-4 text-left">{bookingPersonEmail}</td>
        <td className="py-4 px-4 text-left">{location}</td>
        <td className="py-4 px-4 text-left">{productName}</td>
        <td className="py-4 px-4 text-left flex gap-1">
          <Btn className="text-sm px-1 py-0 btn-sm">Pay Now</Btn>
          <button className="btn btn-sm rounded-none bg-red-500 border-none">
            Delete
          </button>
        </td>
        {/* <td className="py-4 px-6">{resellingPrice}</td> */}
      </tr>
    </tbody>
  );
};

export default Orders;
