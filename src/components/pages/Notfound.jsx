import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col text-center gap-2 items-center justify-center w-full rounded bg-[#FCFAFA] py-10 px-5 mx-auto">
        <img src="./notfound.svg" className="w-[350px]" alt="" />
        <h1 className="font-semibold text-[28px] text-center text-[#4f4f4f]">
          No Teachers at this time
        </h1>
        <h3 className="font-medium text-sm text-[#4f4f4f]">
          Teachers will appear here after they enroll in your school.{" "}
        </h3>
      </div>
    </div>
  );
};

export default NotFound;
