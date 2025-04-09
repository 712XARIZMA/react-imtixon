import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import NotFound from "./Notfound";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Teachers = () => {
  const [teacher, setTeacher] = useState([]);
  const [searchTeacher, setSearchTeacher] = useState("");
  const searchedTeachers = teacher.filter((item) =>
    item.fullname.toLowerCase().includes(searchTeacher.toLowerCase())
  );

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  let token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://api.ashyo.fullstackdev.uz/users", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => setTeacher(res.data));
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="left   w-[300px] h-[100vh] bg-[#152259]">
          <div className="p-[25px] border-b-[#a7a7a7] border-b border-solid">
            <div className="logo flex flex-col  justify-center items-center gap-3">
              <img className="w-[65px]" src="./logo.png" alt="" />
              <h1 className="text-white">Udemy Inter. school</h1>
            </div>
          </div>
          <div className="sections p-[25px] flex flex-col  gap-2">
            <Link to={`/dashboard`}>
              <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
                {" "}
                <img src="./dashboard.svg" alt="" />
                Dashboard
              </button>
            </Link>
            <Link to={`/teachers`}>
              <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  bg-[#509CDB]  text-white gap-4">
                {" "}
                <img src="./dashboard.svg" alt="" />
                Teachers
                <FaAngleRight />
              </button>
            </Link>
            <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
              {" "}
              <img src="./students.svg" alt="" />
              Students
            </button>
            <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
              {" "}
              <img src="./billing.svg" alt="" />
              Billing
            </button>
            <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
              {" "}
              <img src="./settings.svg" alt="" />
              Settings and profile
            </button>
            <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
              {" "}
              <img src="./exams.svg" alt="" />
              Exams
            </button>
            <button className="flex mt-[114px] items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
              {" "}
              <img src="./features.svg" alt="" />
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
              <img src="./notification.svg" alt="" />
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
          <div className="center pl-8  pr-[104px]">
            <div className="title flex items-center justify-between">
              <h1 className="font-medium text-xl text-center text-[#4f4f4f]">
                Teachers
              </h1>
              <Link to="/addteacher">
                <button className="text-white rounded w-fit px-4 py-3 bg-[#509CDB]  ">
                  Add Teachers
                </button>
              </Link>
            </div>

            <div>
              <div className="search">
                <form
                  className="bg-[#e0e0e034] flex items-center p-4 gap-4 rounded mt-4 "
                  action=""
                >
                  <CiSearch />
                  <input
                    type="search"
                    className="w-full focus:outline-none"
                    placeholder="Search for a student by name or email"
                    value={searchTeacher}
                    onChange={(e) => setSearchTeacher(e.target.value)}
                  />
                </form>
              </div>
              <div className="mt-6 w-full  overflow-y-auto max-h-[470px]">
                {teacher.length == 0 ? (
                  <NotFound />
                ) : (
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr>
                        <th className="w-[100px] overflow-x-auto max-w-[100px]">
                          Full Name
                        </th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchedTeachers?.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <Link
                              to={`/teacherdata/${item.id}`}
                              className="text-black hover:underline"
                            >
                              {item.fullname}
                            </Link>
                          </td>
                          <td>{item.email}</td>
                          <td>{item.role}</td>
                          <td>{item.password}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
          <button className="bg-[#152259] absolute bottom-[20px] right-[20px] flex gap-[39px] w-fit rounded-[30px]  py-[22px] px-[24px] items-center text-white">
            <div className="flex items-center gap-2">
              <img src="./call.svg" alt="" />
              Support
            </div>
            <FaAngleUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
