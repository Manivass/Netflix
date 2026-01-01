import React from "react";
import { BG_URL } from "../utils/constant";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return <div className="w-screen h-screen bg-cover bg-center " style={{ backgroundImage: `url(${BG_URL})` }}>
    <GPTSearchBar />
  </div>;
};

export default GPTSearch;
