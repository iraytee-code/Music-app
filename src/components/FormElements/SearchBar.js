import React, { Fragment } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ placeholder, type, className }) => {
  return (
    <Fragment>
      <div className="flex items-center  bg-dark text-light/50">
        <div className="">
          <AiOutlineSearch size={20} />
        </div>
        <input type={type} placeholder={placeholder} className={className} />
      </div>
    </Fragment>
  );
};

export default SearchBar;
