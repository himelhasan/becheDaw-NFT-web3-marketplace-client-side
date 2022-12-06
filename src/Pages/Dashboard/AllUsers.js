import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import UsersTable from "../../Shared/UsersTable/UsersTable";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://bechedaw-server.vercel.app/allUsers");
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

  const handelVerifyUser = (id) => {
    console.log(id);
    fetch(`https://bechedaw-server.vercel.app/users/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
        contentType: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Verified");
          refetch();
        }
      });
  };

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
              Verified
            </th>
            <th scope="col" className="py-3 px-6 text-left">
              Action
            </th>
          </tr>
        </thead>

        {users.map((user) => (
          <UsersTable user={user} key={user._id} handelVerifyUser={handelVerifyUser}>
            {" "}
          </UsersTable>
        ))}
      </table>
    </div>
  );
};

export default AllUsers;
