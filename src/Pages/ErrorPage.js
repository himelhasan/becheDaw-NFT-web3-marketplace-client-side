import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../media/not-found.svg";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col  justify-center items-center">
      <img src={errorImg} alt="404" className="w-96 text-center" />
      <button className="btn bg-[#249B8C] w-1/4 my-5 rounded-none">
        <Link to="/">Return to home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
