import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import UsersTable from "../../Shared/UsersTable/UsersTable";

const AllSellers = () => {
  const { logOut } = useContext(AuthContext);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://bechedaw-server.vercel.app/all-sellers");
      const data = await res.json();
      return data;
    },
  });

  const deleteUser = (id) => {
    const proceed = window.confirm("Are you sure, you want to Delete this user");

    if (proceed) {
      fetch(`https://bechedaw-server.vercel.app/allUser/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
          contentType: "application/json",
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            return logOut();
          }
          return res.json();
        })
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("User Deleted");
            refetch();
          }
        });
    }
  };

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
        <h3 className="text-lg font-medium leading-6 text-gray-900">All Sellers</h3>
        <p className="mt-1 text-sm text-gray-600">
          Here you can see all the buyer of your platform
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
          <UsersTable
            user={user}
            key={user._id}
            handelVerifyUser={handelVerifyUser}
            deleteUser={deleteUser}
          >
            {" "}
          </UsersTable>
        ))}
      </table>
    </div>
  );
};

export default AllSellers;
