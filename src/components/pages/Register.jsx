import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`https://api.ashyo.fullstackdev.uz/auth/register`, {
        email,
        fullname,
        password,
      })
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("token", res.data.accessToken);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Ro'yxatdan o'tishda xatolik yuz berdi:", error);
      });
  }

  return (
    <div className="flex flex-col justify-center w-full items-center mt-auto h-[100vh]  mx-auto">
      <h1 className="text-center font-semibold text-4xl mb-[53px] text-[#4F4F4F]">
        Welcome, Sign up
      </h1>
      <form
        className="flex flex-col gap-[15px] w-fit !py-[72px] !px-[135px] bg-white"
        onSubmit={handleSubmit}
      >
        <h2 className=" font-medium text-base mb-[14px] leading-[156%] text-center text-[#667085]">
          It is our great pleasure to have <br /> you on board!{" "}
        </h2>
        <label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="border rounded border-[#A7A7A7] p-[7px] w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Enter your Full Name"
            className="border rounded border-[#A7A7A7] p-[7px] w-full"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Enter Password"
            className="border rounded border-[#A7A7A7] p-[7px] w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="flex items-center justify-center bg-[#2D88D4] w-full rounded !px-[20px] !py-[10px] text-center text-white"
        >
          Sign up
        </button>

        <p className="text-center">
          Have an account?{" "}
          <Link to="/" className="">
            {" "}
            <span className="text-[#2D88D4]">Sign up</span>{" "}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
