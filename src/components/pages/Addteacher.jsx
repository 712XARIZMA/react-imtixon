import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";

const Addteacher = () => {
  const navigate = useNavigate();
  let [fullname, setFullname] = useState();
  let [email, setEmail] = useState();
  let [phone_number, setPhoneNumber] = useState();
  let [password, setPassword] = useState();
  let [Role, setRole] = useState();
  let [is_verified, setIsVerified] = useState();
  let [image, setImage] = useState(null);

  function fetchAdd(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("fullname", fullname);
    formdata.append("email", email);
    formdata.append("phone_number", phone_number);
    formdata.append("password", password);
    formdata.append("role", "USER");
    formdata.append("is_verified", is_verified);

    if (image) {
      formdata.append("image", image);
    }

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.ashyo.fullstackdev.uz/users/add", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert("Successfully added", result);
        navigate("/teachers");
      })
      .catch((error) => console.error("Error adding teacher:", error));
  }

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
        <div className="main  w-full">
          <div className="header px-[124px] mb-[53px] flex items-center justify-between  bg-[#FCFAFA] h-[100px]">
            <div className="flex items-center justify-end w-full gap-12">
              <img src="./notification.svg" alt="" />
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
                className="w-fit  text-[#424242]  rounded-[8px] py-3 px-9"
              >
                Log out
              </button>
            </div>
          </div>
          <div className="center pl-8  pr-[104px]">
            <div>
              <form onSubmit={fetchAdd} className=" mt-10 mx-auto w-full">
                <div className="title flex items-center justify-between">
                  <h1 className="font-medium text-xl text-center text-[#4f4f4f]">
                    Add teacher
                  </h1>
                  <button
                    type="submit"
                    className="text-white rounded w-fit px-4 py-3 bg-[#509CDB] "
                  >
                    Save
                  </button>
                </div>
                <div className="grid grid-cols-2">
                  <label
                    htmlFor="fullname"
                    className="flex flex-col font-medium text-sm text-[#8A8A8A] leading-[30px] w-[407px]"
                  >
                    Full Name
                    <input
                      id="fullname"
                      type="text"
                      required
                      value={fullname}
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                      className=" rounded border mb-9 px-[9px] py-[13px] border-solid border-[#A7A7A7]"
                      placeholder="Full Name"
                    />
                  </label>
                  <label
                    htmlFor="email"
                    className="flex flex-col font-medium text-sm text-[#8A8A8A] leading-[30px] w-[407px]"
                  >
                    Email Address
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className=" rounded border mb-9 px-[9px] py-[13px] border-solid border-[#A7A7A7]"
                      placeholder="Email"
                    />
                  </label>
                  <label
                    htmlFor="phonenumber"
                    className="flex flex-col font-medium text-sm text-[#8A8A8A] leading-[30px] w-[407px]"
                  >
                    Phone Number
                    <input
                      id="phonenumber"
                      type="text"
                      required
                      value={phone_number}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                      className=" rounded border mb-9 px-[9px] py-[13px] border-solid border-[#A7A7A7]"
                      placeholder="Phone Number"
                    />
                  </label>
                  <label
                    htmlFor="password"
                    className="flex flex-col font-medium text-sm text-[#8A8A8A] leading-[30px] w-[407px]"
                  >
                    Password
                    <input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className=" rounded border mb-9 px-[9px] py-[13px] border-solid border-[#A7A7A7]"
                      placeholder="Password"
                    />
                  </label>
                  <label
                    htmlFor="role"
                    className="flex flex-col font-medium text-sm text-[#8A8A8A] leading-[30px] w-[407px]"
                  >
                    Role
                    <select
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                      className="rounded appearance-none border mb-9 px-[9px] py-[13px] border-solid border-[#A7A7A7]"
                      name="role"
                      id="role"
                      value={Role}
                    >
                      <option value="USER">USER</option>
                      <option value="ADMIN">ADMIN</option>
                    </select>
                  </label>

                  <label
                    htmlFor="isVerified"
                    className="flex flex-col  font-medium text-sm text-[#8A8A8A] leading-[30px] w-[407px]"
                  >
                    IsVerified
                    <select
                      onChange={(e) => {
                        setIsVerified(e.target.value);
                      }}
                      className="rounded appearance-none border mb-9 px-[9px] py-[13px] border-solid border-[#A7A7A7]"
                      name="isVerified"
                      id="isVerified"
                      value={is_verified}
                    >
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </label>
                  <label
                    htmlFor="img"
                    className="flex flex-col font-medium text-sm text-[#8A8A8A] leading-[30px] w-[407px]"
                  >
                    Img
                    <input
                      id="img"
                      type="file"
                      required
                      onChange={(e) => setImage(e.target.files[0])}
                      className=" rounded border mb-9 px-[9px] py-[13px] border-solid border-[#A7A7A7]"
                      placeholder="img"
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addteacher;
