import React from "react";

const MyProductCard = ({ product }) => {
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
  return (
    <>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="py-4 px-4 text-left font-normal mx-0 text-gray-900">
            {productName}
          </th>
          <td className="py-4 px-4 text-left">{resellingPrice}</td>
          <td className="py-4 px-4 text-left">{buyingPrice}</td>
          <td className="py-4 px-4 text-left">{postedDate}</td>
          <td className="py-4 px-4 text-left">{booked ? "yes" : "no"}</td>
          <td className="py-4 px-4 text-left">
            <button className='className="btn btn-sm rounded-none bg-green-500 text-white border-none'>
              Promote
            </button>
          </td>
          <td className="py-4 px-4 text-left flex gap-1">
            <button className="btn btn-sm rounded-none bg-red-500 border-none">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default MyProductCard;
