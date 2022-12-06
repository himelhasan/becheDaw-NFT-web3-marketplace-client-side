import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";
import PaymentBox from "../../../Shared/PaymentBox/PaymentBox";
import toast from "react-hot-toast";
import Orders from "../../../Shared/Orders/Orders";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateAccountInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();

  const { user, modifyProfile } = useContext(AuthContext);
  const [err, setErr] = useState({
    general: "",
  });

  const updateProfileDetails = (data) => {
    const name = data.name;
    const phone = data.phone;
    const userPhoto = data.userImg;
    const userAddress = data.userAddress;

    const userInfo = {
      displayName: name,
      photoURL: userPhoto,
      phoneNumber: phone,
    };

    const userInfoDB = {
      displayName: name,
      photoURL: userPhoto,
      phoneNumber: phone,
      Address: userAddress,
    };

    modifyProfile(userInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        setErr({ ...err, general: error });
      });
  };

  return (
    <div className="w-full">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900 pb-2">
            Personal Information
          </h3>
          <>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center p-10">
                <img
                  src={user.photoURL}
                  alt={user?.displayName}
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {user?.displayName}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {user?.email}
                </span>
              </div>
            </div>
          </>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form key={2} onSubmit={handleSubmit2(updateProfileDetails)}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      defaultValue={user.displayName}
                      {...register2("name")}
                      autoComplete="given-name"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Your Phone
                    </label>
                    <input
                      {...register2("phone")}
                      type="phone"
                      defaultValue={user?.phoneNumber}
                      autoComplete="phone"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      defaultValue={user.email}
                      disabled
                      className="disabled form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div className=" col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="mt-1 flex items-center">
                      {user?.photoURL ? (
                        <img
                          src={user?.photoURL}
                          className="h-12 w-12 rounded-full"
                          alt=""
                        />
                      ) : (
                        <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                      )}

                      <input
                        {...register2("userImg")}
                        type="url"
                        defaultValue={user?.photoURL}
                        placeholder="Image link"
                        className="form-control block w-full ml-2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Address
                    </label>
                    <input
                      {...register2("userAddress")}
                      type="text"
                      autoComplete="street-address"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Update Your Account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAccountInfo;
