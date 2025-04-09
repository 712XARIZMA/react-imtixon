import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("https://api.ashyo.fullstackdev.uz/auth/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("token", res.data.access);
        navigate("/dashboard");
      });
  }

  return (
    <div className="flex flex-col justify-center w-full items-center mt-auto h-[100vh]  mx-auto">
      <h1 className="text-center font-semibold text-4xl mb-[53px] text-[#4F4F4F]">
        Welcome, Log into you account
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
            type="password"
            placeholder="Enter Password"
            className="border rounded border-[#A7A7A7] p-[7px] w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="flex items-center cursor-pointer justify-center bg-[#2D88D4] w-full rounded !px-[20px] !py-[10px] text-center text-white"
        >
          Login
        </button>
        <Link to="/register">
          <button
            type="submit"
            className="flex cursor-pointer items-center justify-center text-[#2D88D4] w-full rounded !px-[20px] !py-[10px] text-center bg-[#a7a7a71f]"
          >
            Sign up
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
