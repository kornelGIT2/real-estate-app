import React from "react";
import type { searchOptions } from "./HeroSearch";

interface SearchButton {
  children: React.ReactNode;
  setSearchOption: (type: searchOptions) => void;
  type: searchOptions;
  searchType: searchOptions;
  key: number;
}

function SearchButton({
  key,
  children,
  setSearchOption,
  type,
  searchType,
}: SearchButton) {
  return (
    <button
      key={key}
      onClick={() => {
        setSearchOption(type);
      }}
      className={` border-b-2 p-2 hover:underline rouned-t-xl  ${
        searchType === type ? "border-teal-500" : ""
      }  w-full group hover:bg-teal-300 hover:bg-opacity-10 `}
    >
      {children}
    </button>
  );
}

export default SearchButton;
