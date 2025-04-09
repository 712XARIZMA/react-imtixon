import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TeacherData = () => {
  const [teacher, setTeacher] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    let token = localStorage.getItem("token");

    axios
      .get(`https://api.ashyo.fullstackdev.uz/users/${id}`, {
        headers: { "x-auth-token": token },
      })
      .then((res) => setTeacher(res.data))
      .catch((err) => console.error("Error ", err));
  }, [id]);

  return (
    <div>
      <div className="flex">
        <div className="left   w-[300px] h-[100vh] bg-[#152259]">
          <div className="p-[25px] border-b-[#a7a7a7] border-b border-solid">
            <div className="logo flex flex-col  justify-center items-center gap-3">
              <img className="w-[65px]" src="/logo.png" alt="" />
              <h1 className="text-white">Udemy Inter. school</h1>
            </div>
          </div>
          <div className="sections p-[25px] flex flex-col  gap-2">
            <Link to={`/dashboard`}>
              <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
                {" "}
                <img src="/dashboard.svg" alt="" />
                Dashboard
              </button>
            </Link>
            <Link to={`/teachers`}>
              <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  bg-[#509CDB]  text-white gap-4">
                {" "}
                <img src="/dashboard.svg" alt="" />
                Teachers
                <FaAngleRight />
              </button>
            </Link>
            <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
              <img src="/students.svg" alt="" />
              Students
            </button>
            <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
              {" "}
              <img src="/billing.svg" alt="" />
              Billing
            </button>
            <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
              {" "}
              <img src="/settings.svg" alt="" />
              Settings and profile
            </button>
            <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
              {" "}
              <img src="/exams.svg" alt="" />
              Exams
            </button>
            <button className="flex mt-[114px] items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
              {" "}
              <img src="/features.svg" alt="" />
              Features
              <span className="font-semibold text-[10px] text-black px-2 py-px rounded-lg bg-[#B9D7F1]">
                NEW
              </span>
            </button>
          </div>
        </div>
        <div className="main w-full">
          <div className="header px-[124px] mb-[53px] flex items-center justify-between  bg-[#FCFAFA] h-[100px]">
            <div className="flex items-center justify-end w-full gap-12">
              <img src="/notification.svg" alt="" />
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
                className="w-fit border border-[#509CDB]  text-[#509CDB]  rounded-[8px] py-3 px-9"
              >
                Log out
              </button>
            </div>
          </div>
          <div className="center relative pl-8 gap-8 mx-15 flex justify-center items-center bg-white p-5 pr-[104px]">
            <div className="left flex flex-col gap-5 items-center justify-center">
              <img src="/defoult.svg" alt="" />
              <h1>{teacher?.fullname}</h1>
            </div>
            <div className="right ">
              <div className="flex flex-col gap-3">
                <h1 className="">
                  EMAIL :{" "}
                  <p className="font-medium text-[14px] leading-[131%] text-[#A7A7A7]">
                    {teacher?.email}
                  </p>
                </h1>
                <h1 className="">
                  PASSWORD :{" "}
                  <p className="font-medium text-[14px] leading-[131%] text-[#A7A7A7]">
                    {" "}
                    {teacher?.password}
                  </p>
                </h1>
                <h1 className="">
                  ROLE :{" "}
                  <p className="font-medium text-[14px] leading-[131%] text-[#A7A7A7]">
                    {" "}
                    {teacher?.role}
                  </p>
                </h1>
                <h1 className="">
                  CREATED AT :{" "}
                  <p className="font-medium text-[14px] leading-[131%] text-[#A7A7A7]">
                    {" "}
                    {teacher?.createdAt}
                  </p>
                </h1>
                <div className="flex gap-6">
                  <div className="w-15 h-15 flex items-center justify-center bg-[#47546c] rounded">
                    <img className="w-5" src="/students.svg" alt="" />
                  </div>
                  <div className="w-15 h-15 flex items-center justify-center bg-[#47546c] rounded">
                    <img className="w-5" src="/phone.svg" alt="" />
                  </div>
                  <div className="w-15 h-15 flex items-center justify-center bg-[#47546c] rounded">
                    <img className="w-5" src="/message.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <Link to="/teachers">
              <h1 className="text-[#A7A7A7] hover:underline absolute bottom-6 right-6">
                {" "}
                BACK TO TEACHERS
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherData;
