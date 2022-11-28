import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Orders from "../../Shared/Orders/Orders";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  //   const [booking, setBooking] = useState([]);

  //   const url = `http://localhost:5000/booking?email=${user?.email}`;
  const url = "http://localhost:5000/booking?email=himelhassdssan497@gmail.com";

  const { data: booking = [] } = useQuery({
    queryKey: ["booking", user?.email],

    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  //   useEffect(() => {
  //     fetch("https://bechedaw-server.vercel.app/booking")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setBooking(data);
  //       });
  //   }, []);

  return (
    <div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">All Orders</h3>
              <p className="mt-1 text-sm text-gray-600">
                Please pay the product to get the product or delete it from your orders
                list
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div class="overflow-x-auto relative">
                <table class="w-full text-sm text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="py-3 px-4 text-left">
                        Buyer Name
                      </th>
                      <th scope="col" class="py-3 px-4 text-left">
                        Phone
                      </th>
                      <th scope="col" class="py-3 px-4 text-left">
                        Email
                      </th>
                      <th scope="col" class="py-3 px-4 text-left">
                        Location
                      </th>
                      <th scope="col" class="py-3 px-4 text-left">
                        Price
                      </th>
                      <th scope="col" class="py-3 px-6">
                        Action
                      </th>
                    </tr>
                  </thead>

                  {booking.map((book) => (
                    <Orders book={book}></Orders>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
