import React from "react";
import { Link } from "react-router-dom";

const Btn = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="btn bg-gradient-to-r to-[#ee7724] via-[#dd3675] from-[#b44593] hover:bg-slate-200 text-white font-semibold  rounded-none border-none  px-10 py-2.5 mr-4 transition duration-150 ease-in-out mb-3"
    >
      {children}
    </Link>
  );
};

export default Btn;
