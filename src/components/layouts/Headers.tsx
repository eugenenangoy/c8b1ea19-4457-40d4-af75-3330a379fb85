import Image from "next/image";
import React from "react";
import InputArea from "../common/InputArea";
import { FaSearch } from "react-icons/fa";

const Headers = () => {
  return (
    <div className="flex fixed top-0 h-16 w-screen bg-gray-50 px-8 shadow-lg">
      <div className="flex">
        <p className="flex items-center">
          <Image
            src={"https://flowbite.com/docs/images/logo.svg"}
            width={40}
            height={40}
            alt="flowbite-logo"
            className="me-3"
          />
          <div className="input-container">
            <FaSearch className="inline-icon" />
            <InputArea
              classname="bg-gray-200 w-full h-10 pl-8"
              placeholder="Search Your Post"
            />
          </div>
        </p>
      </div>
      <div className="flex items-center"></div>
      <div className="flex"></div>
    </div>
  );
};

export default Headers;
