import React from "react";
import { Link } from "react-router-dom";

const Btn = ({ children, to, className }) => {
  return (
    <Link
      to={to}
      className={`${className} btn bg-gradient-to-r to-[#FF0062] from-[#0029FF] hover:bg-slate-200 text-white font-semibold  rounded-none border-none  px-10 py-2.5 transition duration-150 ease-in-out`}
    >
      {children}
    </Link>
  );
};

// to-[#FF0062] from-[#0029FF]
export default Btn;
