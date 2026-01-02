import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
const GPTSearchBar = () => {
  const userPreferredLang = useSelector((store) => store.userInfo.userLanguage);
  return (
    <div className="z-20 w-full  pt-25  flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="  bg-black w-1/2 px-4 py-3 grid grid-cols-12 "
      >
        <input
          className="bg-white text-black py-2 px-4 col-span-10 mr-6 outline-neutral-600 rounded-md text-md "
          placeholder={lang[userPreferredLang].GPTSearchPlaceHolder}
        />
        <button className="text-md text-white bg-red-600  col-span-2 rounded-md cursor-pointer">
          {lang[userPreferredLang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
