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
  const navigate = useNavigate;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();

  const { user, modifyProfile } = useContext(AuthContext);
  const [err, setErr] = useState({
    general: "",
  });
  console.log(user);
  const [category, setCategory] = useState([]);
  const [booking, setBooking] = useState([]);
  console.log(category);
  useEffect(() => {
    fetch("https://bechedaw-server.vercel.app/booking")
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://bechedaw-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

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
        const updatedUser = res.user;
        console.log(updatedUser);
      })
      .catch((error) => {
        setErr({ ...err, general: error });
      });
  };

  const createProduct = (data) => {
    // console.log(data);
    const sllerName = data.name;
    const sllePhoto = data.userPhoto;
    const sellerEmail = data.userPhoto;

    const pImg = data.pImg;
    const pName = data.pName;
    const pDescription = data.pDescription;
    const pResellingPrice = data.pResellingPrice;
    const pBuyingPrice = data.pBuyingPrice;
    const pPostedDate = new Date();
    const pLocation = data.pLocation;
    const pPurchased_year = data.pPurchased_year;
    const pCategory_id = data.pCategory_id;

    const productInfo = {
      img: pImg,
      productName: pName,
      description: pDescription,
      resellingPrice: pResellingPrice,
      buyingPrice: pBuyingPrice,
      postedDate: pPostedDate,
      booked: false,
      advertised: false,
      location: pLocation,
      purchased_year: pPurchased_year,
      category_id: pCategory_id,
      seller: [
        {
          sellerName: user.displayName,
          sellerImg: user.photoURL,
          sellerEmail: user.email,
        },
      ],
    };

    // const redirectTo = `/category/${pCategory_id}`;
    const from = `/category/${pCategory_id}` || "/";
    console.log(productInfo);

    fetch("https://bechedaw-server.vercel.app/allProducts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);

        if (data.acknowledged) {
          toast.success(`Successfully added ${pName}!`);
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="md:container md:mx-auto my-10">
      <div className="w-full">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900 pb-2">
                Personal Information
              </h3>
              <>
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex flex-col items-center p-10">
                    <img
                      src={user.photoURL}
                      alt={user?.displayName}
                      class="w-24 h-24 mb-3 rounded-full shadow-lg"
                    />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      {user?.displayName}
                    </h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                      {user?.email}
                    </span>
                  </div>
                </div>
              </>
            </div>
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

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Add a Product to sell
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Please fill out all the info to submit the product
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form key={1} onSubmit={handleSubmit(createProduct)}>
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Product Name
                        </label>
                        <input
                          type="text"
                          {...register("pName", {
                            required: "Please enter your Product Name",
                          })}
                          required
                          autoComplete="given-name"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Your Reselling Price
                        </label>
                        <input
                          {...register("pResellingPrice", {
                            required: "Please enter your Reselling Price",
                          })}
                          required
                          type="number"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Category
                        </label>
                        <select
                          {...register("pCategory_id", {
                            required: "Please choose your user role",
                          })}
                          required
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        >
                          {category.map((catItem) => (
                            <option
                              className="text-gray-700 "
                              value={catItem._id}
                              key={catItem._id}
                            >
                              {catItem.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Your Address
                        </label>
                        <input
                          {...register("pLocation", {
                            required: "Please enter your Location ",
                          })}
                          required
                          type="text"
                          autoComplete="street-address"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Purchased Year
                        </label>
                        <input
                          {...register("pPurchased_year", {
                            required: "Please enter your Location ",
                          })}
                          required
                          type="date"
                          className="form-control flex flex-row w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Buying Price
                        </label>
                        <input
                          {...register("pBuyingPrice", {
                            required: "Please enter your Location ",
                          })}
                          required
                          type="number"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Product Details
                        </label>
                        <textarea
                          {...register("pDescription", {
                            required: "Please enter your Location ",
                          })}
                          rows="5"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Write your product details here..."
                        ></textarea>
                      </div>
                      <div className=" col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Photo
                        </label>

                        <input
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          type="file"
                          id="formFile"
                        />
                        <div className="divider">OR</div>

                        <input
                          {...register("pImg", {
                            required: "Please enter your product image link ",
                          })}
                          required
                          placeholder="Image link"
                          type="url"
                          className="form-control block w-full my-2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Upload Your Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
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

export default UpdateAccountInfo;
