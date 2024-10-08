"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchRef.current!.value === "" || searchRef.current!.value.trim() === "") {
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      router.push(`/search/${searchRef.current!.value}`);
      searchRef.current!.value = "";
    }
  };

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (searchRef.current!.value === "" || searchRef.current!.value.trim() === "") {
      return;
    }
    event.preventDefault();
    router.push(`/search/${searchRef.current!.value}`);
  };
  return (
    <div>
      {" "}
      <input
        type="text"
        placeholder="Search Anime"
        className="p-2 rounded-md md:w-80 sm:w-10/12 w-4/5 md:mt-0 sm:mt-3 mt-3 text-black "
        ref={searchRef}
        onKeyDown={handleEnter}
      />
      <button
        className="absolute md:right-24 md:top-5 sm:right-36 sm:top-16 right-28 top-16"
        onClick={handleSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default InputSearch;
