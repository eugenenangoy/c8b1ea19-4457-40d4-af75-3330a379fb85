import React, { Fragment, MouseEventHandler } from "react";
import { CgProfile } from "react-icons/cg";

type AvatarsPropsType = {
  src?: string;
  w: number;
  h: number;
  alt: string;
  isOnline?: boolean;
  pointer?: boolean;
  onclick?: MouseEventHandler<HTMLDivElement>;
};


const Avatars = ({
  src,
  w,
  h,
  isOnline,
  alt,
  onclick,
  pointer,
}: AvatarsPropsType) => {
  return (
    <div className="relative inline-block">
      {!src ? (
        <div className={`w-${w} h-${h} rounded-full flex items-center`}>
          <CgProfile className={`w-full h-full text-gray-200`} />
        </div>
      ) : (
        <div
          className={`flex items-center rounded-full border ${
            pointer ? "cursor-pointer" : ""
          } w-${w} h-${h}`}
          onClick={onclick}
        >
          <img src={src} className={`inline items-center w-full h-full rounded-full`} alt={alt}/>
          {!isOnline ? (
            ""
          ) : (
            <span className="w-3 h-3 rounded-full bg-green-500 border-2 border-white absolute bottom-0.5 right-0.5"></span>
          )}
        </div>
      )}
    </div>
  );
};

export default Avatars;
