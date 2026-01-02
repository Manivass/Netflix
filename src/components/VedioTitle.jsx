import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VedioTitle = ({ original_title, overview }) => {
  return (
    <div className=" bg-gradient-to-r from-black absolute w-screen h-screen pl-[5%] pt-[13%] text-white z-10">
      <h2 className="text-2xl w-1/3 font-semibold mb-4">{original_title}</h2>
      <p className="text-md text-white/80 w-3/12 mb-8">{overview}</p>
      <div className="flex gap-4 ">
        <button className="text-black bg-white flex gap-1  px-5 py-2.5 rounded-md hover:bg-white/50 hover:text-white cursor-pointer">
          <span className="translate-y-1 text-md">
            <FaPlay />
          </span>{" "}
          Play{" "}
        </button>
        <button className="flex gap-1  font-semibold px-5 py-2.5 bg-white/50   rounded-md  cursor-pointer">
          More Info
          <span className="translate-y-1 text-lg font-semibold">
            <IoIosInformationCircleOutline />
          </span>{" "}
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
