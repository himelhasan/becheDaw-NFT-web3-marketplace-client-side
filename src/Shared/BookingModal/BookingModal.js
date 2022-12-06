import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import Btn from "../Btn";

const BookingModal = ({ product, showModal, setShowModal }) => {
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
  } = product;

  const { user: person } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    console.log(data);

    const bookingPersonName = person.displayName;
    const bookingPersonEmail = person.email;
    const userPhone = data.userPhone;
    const location = data.location;
    const orderTime = Date();

    const bookingInfo = {
      productName: productName,
      resellingPrice: resellingPrice,
      bookingPersonName: bookingPersonName,
      bookingPersonEmail: bookingPersonEmail,
      userPhone: userPhone,
      location: location,
      orderTime: orderTime,
    };
    console.log("bookingInfo", bookingInfo);

    fetch("https://bechedaw-server.vercel.app/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        if (data.acknowledged) {
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setShowModal(false);
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 flex-col p-4">
          <div className="flex flex-col items-center">
            <div className="ml-3 flex-1">
              <p className="text-sm text-center font-medium text-gray-900 py-2">
                Congratulations {bookingPersonName ? bookingPersonName : "the seller"} !!!
              </p>
              <p className="mt-1 text-sm text-center text-gray-500 py-2">
                You have booked a meeting with for {productName}
              </p>
              <p className="mt-1 text-sm text-center text-gray-500 py-2">
                The price of the product is ${resellingPrice}.
              </p>
              <p className="mt-1 text-sm text-center text-gray-500 py-2">
                You have requested to meet at ${location}. The seller will reach out to
                you at your phone no ${userPhone} or email at ${bookingPersonEmail}
              </p>
            </div>
          </div>
        </div>

        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t gap-2 content-center">
                  <h3 className="text-lg font-semibold text-black">
                    Book your meeting with {sellerName ? sellerName : "the owner"}
                  </h3>
                  <button
                    className="btn h-12 w-12 rounded-full text-xl"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {/*  */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                      <input
                        defaultValue={productName}
                        disabled
                        className="form-control disabled block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        defaultValue={`${resellingPrice}ETH`}
                        disabled
                        className="form-control disabled block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        defaultValue={person?.displayName}
                        disabled
                        className="form-control disabled block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        defaultValue={person?.email}
                        disabled
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        {...register("userPhone", {
                          required: "Please enter your profile photo link",
                        })}
                        type="tel"
                        autoComplete="tel"
                        required
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Your Contact no"
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        {...register("location", {
                          required: "Please enter your password",
                        })}
                        type="text"
                        required
                        autoComplete="street-address"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Meeting location"
                      />
                    </div>
                    <div className="text-center pt-1 mb-2 pb-1">
                      <input
                        type="submit"
                        value="Register Your Account"
                        className="bg-gradient-to-r to-[#FF0062] from-[#0029FF]  inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      />
                    </div>
                  </form>
                  {/*  */}
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default BookingModal;
