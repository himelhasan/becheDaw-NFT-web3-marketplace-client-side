import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://bechedaw-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

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

      sellerName: user.displayName,
      sellerImg: user.photoURL,
      sellerEmail: user.email,
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
    <>
      <div className="px-4 pb-5 sm:px-0 ">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Add a Product to sell
        </h3>
        <p className="mt-1 text-sm text-gray-600">
          Please fill out all the info to submit the product
        </p>
      </div>

      <form key={1} onSubmit={handleSubmit(createProduct)}>
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
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              {...register("pCategory_id", {
                required: "Please choose your user role",
              })}
              required
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              {category.map((catItem) => (
                <option className="text-gray-700 " value={catItem._id} key={catItem._id}>
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
            <label className="block text-sm font-medium text-gray-700">Photo</label>

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
        <div className=" px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Upload Your Product
          </button>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
