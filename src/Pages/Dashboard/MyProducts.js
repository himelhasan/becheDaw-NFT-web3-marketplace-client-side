import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import MyProductCard from "../../Shared/MyProductCard/MyProductCard";
import UsersTable from "../../Shared/UsersTable/UsersTable";

const MyProducts = () => {
  //   const url = `http://localhost:5000/products?email=superadmin@admin.com`;
  const { user } = useContext(AuthContext);
  const email = user.email;
  const { data: products = [] } = useQuery({
    queryKey: "products",
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products?email=${email}`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <div className="px-4 pb-5 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">My Products</h3>
        <p className="mt-1 text-sm text-gray-600">
          You can promote your products for 0.000012ETH for a day
        </p>
      </div>

      <table className="w-full text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-4 text-left">
              User Name
            </th>
            <th scope="col" className="py-3 px-4 text-left">
              Phone
            </th>
            <th scope="col" className="py-3 px-4 text-left">
              Email
            </th>
            <th scope="col" className="py-3 px-4 text-left">
              Role
            </th>
            <th scope="col" className="py-3 px-4 text-left">
              Location
            </th>
            <th scope="col" className="py-3 px-6 text-left">
              Advertised
            </th>
            <th scope="col" className="py-3 px-6 text-left">
              Action
            </th>
          </tr>
        </thead>

        {products.map((product) => (
          <MyProductCard product={product} key={product._id}></MyProductCard>
          //   <UsersTable user={user} key={user._id} handelVerifyUser={handelVerifyUser}>
          //     {" "}
          //   </UsersTable>
        ))}
      </table>
    </div>
  );
};

export default MyProducts;
