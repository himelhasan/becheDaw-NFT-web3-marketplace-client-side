import React from "react";

const UsersTable = ({ user, handelVerifyUser, deleteUser }) => {
  const { _id, displayName, userEmail, phoneNumber, userRole, Address, photoURL } = user;

  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="py-4 px-4 text-left font-normal mx-0 text-gray-900">
          {displayName}
        </th>
        <td className="py-4 px-4 text-left">
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </td>
        <td className="py-4 px-4 text-left">
          <a href={`mailto:${userEmail}`}>{userEmail}</a>
        </td>
        <td className="py-4 px-4 text-left">{userRole}</td>
        <td className="py-4 px-4 text-left">{Address}</td>

        <td className="py-4 px-4 text-left flex gap-1 ">
          {user?.isVerified ? (
            <span className="bg-green-500 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-green-500 dark:text-black">
              <svg
                aria-hidden="true"
                className="w-3.5 h-3.5"
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
              <span className="sr-only">Icon description</span>
            </span>
          ) : (
            <button
              onClick={() => handelVerifyUser(_id)}
              className="btn btn-sm rounded-none bg-green-500 border-none"
            >
              Verify
            </button>
          )}
        </td>
        <td className="py-4 px-4 text-left">
          <button
            onClick={() => deleteUser(_id)}
            className="btn btn-sm rounded-none bg-red-500 border-none"
          >
            Delete
          </button>
        </td>
        {/* <td className="py-4 px-6">{resellingPrice}</td> */}
      </tr>
    </tbody>
  );
};

export default UsersTable;
