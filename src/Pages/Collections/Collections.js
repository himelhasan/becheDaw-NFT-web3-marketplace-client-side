import React from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../Shared/BookingModal/BookingModal";
import ProductCards from "../../Shared/ProductCards/ProductCards";

const Collections = () => {
  const usedProducts = useLoaderData();
  console.log(usedProducts);
  return (
    <div className="my-20 py-20 container mx-auto">
      <h2>GET YOUR DESIRED NFT {usedProducts.length}</h2>

      <div className="my-20 mx-5 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {usedProducts.map((product) => (
          <ProductCards product={product} key={product._id}></ProductCards>
        ))}
      </div>
    </div>
  );
};

export default Collections;
